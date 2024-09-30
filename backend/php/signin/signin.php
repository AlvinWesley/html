<?php
include 'connect.php'; // Database connection
session_start();

$formPrompt = '';
$sc = false;
$inputError = array(
    'userName' => '',
    'password' => '',
);
$userName = '';
$userId = '';
$userPasswordAuth = '';
$session_id = '';
$session_timeout = 3600; // Session expires after 1 hour
$userType='#us_01#';
// Authenticate user by username
function auth($userName) {
    global $conn, $userId, $userPasswordAuth, $userType;

    // Prepare the SQL statement with INNER JOIN and correct placement of the WHERE clause
    $stmt = $conn->prepare("
        SELECT USER_LOGIN_TBL.user_id, 
               USER_LOGIN_TBL.user_password,
               USER_DETAILS_TBL.user_type,
               USER_DETAILS_TBL.regStatus 
        FROM USER_LOGIN_TBL 
        INNER JOIN USER_DETAILS_TBL ON USER_LOGIN_TBL.user_id = USER_DETAILS_TBL.user_id
        WHERE USER_LOGIN_TBL.user_name = ? AND regStatus=1
    ");

    // Bind the parameter
    $stmt->bind_param("s", $userName);
    
    // Execute the statement
    $stmt->execute();
    
    // Bind the results to the variables
    $stmt->bind_result($userId, $userPasswordAuth, $userType, $regStatus);
    
    // Fetch the result
    $authSuccess = $stmt->fetch();
    
    // Close the statement
    $stmt->close();
    
    // Return the result of the fetch operation
    return $authSuccess;
}

// Expire a session in the database
function expireSession($session_id) {
    global $conn;
    $stmt = $conn->prepare("UPDATE USER_SESSIONS_TBL SET expiration_time = NOW() WHERE session_id = ?");
    $stmt->bind_param("s", $session_id);
    $stmt->execute();
    $stmt->close();
}

// Terminate all active sessions for a user
function terminateAllSessions($userId) {
    global $conn;
    $stmt = $conn->prepare("UPDATE USER_SESSIONS_TBL SET expiration_time = NOW() WHERE user_id = ? AND expiration_time IS NULL");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->close();
}

// Handle form submission
if (isset($_POST['signIn'])) {
    if (empty($_POST['userName'])) {
        $inputError['userName'] = "Username is required";
    } else {
        $userName = $_POST['userName'];
        if (auth($userName)) {
            if (empty($_POST['userPassword'])) {
                $inputError['password'] = "Password is required";
            } else {
                if ($_POST['userPassword'] === $userPasswordAuth) {
                    // Terminate any active sessions for this user
                    terminateAllSessions($userId);
                    // Create a new session ID and store session data
                    $session_id = bin2hex(random_bytes(32)); // Custom session ID
                    $ip_address = $_SERVER['REMOTE_ADDR'];
                    $user_agent = $_SERVER['HTTP_USER_AGENT'];
                    $hostname = gethostbyaddr($ip_address);

                    // Store session data in the database
                    $stmt = $conn->prepare("INSERT INTO USER_SESSIONS_TBL (session_id, user_id, user_agent, ip_address, host_name, expiration_time) 
                                            VALUES (?, ?, ?, ?, ?, NULL)");
                    $stmt->bind_param("sisss", $session_id, $userId, $user_agent, $ip_address, $hostname);
                    if ($stmt->execute()) {
                        // Set session manually and use session ID in the URL instead of cookies
                        $_SESSION[$session_id] = $userId;
                        $formPrompt = "Login Success.";

                        $sc = true;
                    } else {
                        $formPrompt = "Failed to log in. Please try again.";
                    }
                    $stmt->close();
                } else {
                    $formPrompt = "Invalid username or password.";
                }
            }
        } else {
            $formPrompt = "Invalid username or password.";
        }
    }

    // Return response as JSON
    echo json_encode(array(
        "formPrompt" => $formPrompt,
        "userNamePrompt" => $inputError['userName'],
        "userPassPrompt" => $inputError['password'],
        "sc" => $sc,
        "sessionId" => $session_id,
        "userType"=> $userType
    ));
    exit;
}
?>
