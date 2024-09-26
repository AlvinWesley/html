<?php

//$session_id = $_GET['ses_id'] ?? null;
function getUserId($session_id){
    $user_Id='';
    include_once 'connect.php';
     $stmt = $conn->prepare("SELECT user_id FROM USER_SESSIONS_TBL WHERE session_id = ?");
    $stmt->bind_param("s", $session_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_Id = $row['user_id'];
        //echo "Session is valid for user ID: " . $user_Id;
    } else {
        echo "Session not found or invalid.";
        header("Location: /BungoArch/html/backend/php/signin/auth-sign-in.php");
        exit;
    }
    $stmt->close();
    return $user_Id;
}
?>
