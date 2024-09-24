<?php
// Includes
include 'connect.php'; // Database connection

$formPrompt = array(
    'form' => ''
);
$sc = false;
$inputError = array(
    'userName' => '',
    'password' => '',
);
$userName = '';
$userId = '';
$userPassword = '';
$userPasswordAuth = '';
$session_id = '';
$session_timeout = 3600; // Session expires after 1 hour

// Helper function to authenticate user by username
function auth($userName) {
    global $conn, $userId, $userPasswordAuth;
    $stmt = $conn->prepare("SELECT user_id, user_password FROM USER_LOGIN_TBL WHERE user_name = ?");
    $stmt->bind_param("s", $userName);
    $stmt->execute();
    $stmt->bind_result($userId, $userPasswordAuth);
    if ($stmt->fetch()) {
        $stmt->close();
        return true;
    }
    $stmt->close();
    return false;
}

// Helper function to check if the user already has an active session
function hasActiveSession($userId) {
    global $conn;
    $stmt = $conn->prepare("SELECT session_id FROM USER_SESSIONS_TBL WHERE user_id = ? AND expiration_time IS NULL");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->store_result();
    $active = $stmt->num_rows > 0;
    $stmt->close();
    return $active;
}

// Helper function to validate session during requests
function validateSession($session_id) {
    global $conn, $session_timeout;
    $stmt = $conn->prepare("SELECT session_id, user_id, user_agent, ip_address, login_time 
    FROM USER_SESSIONS_TBL WHERE session_id = ? AND expiration_time IS NULL");
    $stmt->bind_param("s", $session_id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($db_session_id, $db_user_id, $db_user_agent, $db_ip_address, $db_login_time);
        $stmt->fetch();
        $stmt->close();

        // Check for session expiration
        $current_time = time();
        $login_time = strtotime($db_login_time);
        if (($current_time - $login_time) > $session_timeout) {
            expireSession($db_session_id); // Expire the session
            return false; // Session has expired
        }

        // Validate IP and User-Agent (for additional security)
        if ($db_ip_address != $_SERVER['REMOTE_ADDR'] || $db_user_agent != $_SERVER['HTTP_USER_AGENT']) {
            return false; // Session invalid due to IP/User-Agent mismatch
        }

        // Update login time to extend session if valid
        extendSession($db_session_id);
        return true; // Session is valid
    }
    
    $stmt->close();
    return false; // Session does not exist or is invalid
}

// Helper function to expire a session
function expireSession($session_id) {
    global $conn;
    $stmt = $conn->prepare("UPDATE USER_SESSIONS_TBL SET expiration_time = NOW() WHERE session_id = ?");
    $stmt->bind_param("s", $session_id);
    $stmt->execute();
    $stmt->close();
}

// Helper function to extend session (keep it active)
function extendSession($session_id) {
    global $conn;
    $stmt = $conn->prepare("UPDATE USER_SESSIONS_TBL SET login_time = NOW() WHERE session_id = ?");
    $stmt->bind_param("s", $session_id);
    $stmt->execute();
    $stmt->close();
}

// Helper function to terminate all active sessions for a user
function terminateAllSessions($userId) {
    global $conn;
    $stmt = $conn->prepare("UPDATE USER_SESSIONS_TBL SET expiration_time = NOW() WHERE user_id = ? AND expiration_time IS NULL");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->close();
}

// Handle sign-in form submission
if (isset($_POST['signIn'])) {
    if (empty($_POST['userName'])) {
        $inputError['userName'] = "The Username field cannot be empty";
    } else {
        $userName = $_POST['userName'];
        if (auth($userName)) {
            if (empty($_POST['userPassword'])) {
                $inputError['password'] = "The Password field cannot be empty";
            } else {
                $userPassword = $_POST['userPassword'];
                if ($userPassword == $userPasswordAuth) {
                    
                    // Terminate all active sessions for this user
                    terminateAllSessions($userId);

                    // Generate a new session ID and store the session data
                    $session_id = bin2hex(random_bytes(32)); // Secure session ID
                    $ip_address = $_SERVER['REMOTE_ADDR'];
                    $user_agent = $_SERVER['HTTP_USER_AGENT'];

                    // Set expiration time for the session (null = active)
                    $stmt = $conn->prepare("INSERT INTO USER_SESSIONS_TBL (session_id, user_id, user_agent, ip_address, expiration_time) 
                                            VALUES (?, ?, ?, ?, NULL)");
                    $stmt->bind_param("siss", $session_id, $userId, $user_agent, $ip_address);
                    if ($stmt->execute()) {
                        // Set session cookie to store session ID
                        setcookie("session_id", $session_id, time() + $session_timeout, "/", "", true, true); // HttpOnly and Secure flags

                        $formPrompt['form'] = "Login Success. Previous sessions have been terminated.";
                        $sc = true;

                        // Here you could fetch and show additional user details if necessary (e.g., first name, email)
                    } else {
                        $formPrompt['form'] = "Failed to log in. Please try again.";
                    }
                    $stmt->close();
                } else {
                    $formPrompt['form'] = "The Username or Password is Incorrect.";
                }
            }
        } else {
            $formPrompt['form'] = "The Username or Password is Incorrect.";
        }
    }

    echo json_encode(array(
        "formPrompt" => $formPrompt['form'],
        "userNamePrompt" => $inputError['userName'],
        "userPassPrompt" => $inputError['password'],
        "sc" => $sc
    ));

    exit;
}
?>
