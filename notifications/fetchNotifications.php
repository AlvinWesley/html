<?php
include "connect.php";
session_start();

if (isset($_SESSION['userId'])) {
    $user_id = $_SESSION['userId'];

    $sqlGetNotifications = "
        SELECT 
            n_id, 
            n_name, 
            n_message,
            n_type,
            n_id_tags,
            n_sent_to, 
            n_time_sent, 
            n_status_read 
        FROM NOTIFICATIONS  
        WHERE n_sent_to = '$user_id'
        order by n_time_sent desc;
    ";

    $sqlRun = mysqli_query($conn, $sqlGetNotifications);
    $sqlFetchThem = mysqli_fetch_all($sqlRun, MYSQLI_ASSOC);
    echo json_encode($sqlFetchThem);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['receiverComments']) && isset($_POST['sharing_id'])) {
        $sharing_id = $_POST['sharing_id'];
        $receiverComments = $_POST['receiverComments'];
        $user_id = $_SESSION['userId'];
        $sqlUpdateRecepientComment = "
            UPDATE FILE_SHARING_TBL 
            SET receiver_comments = '$receiverComments'
            WHERE receiver_id = '$user_id' AND sharing_id = '$sharing_id'
        ";
        
        $sqlrunUpdate = mysqli_query($conn, $sqlUpdateRecepientComment);

        if ($sqlrunUpdate) {
            echo json_encode(array("fileUpdate" => "Comment Update Successful"));
            $sql2Delete="
            DELETE FROM NOTIFICATIONS
            WHERE n_id_tags = '$sharing_id'
            ";
            $sqlrunDelete = mysqli_query($conn, $sql2Delete);
            if($sqlrunDelete){
                echo json_encode(array("fileDelete" => "Notification Delete Successful"));
            }else{
                echo json_encode(array("fileDelete" => "Notification Delete Failed"));
            }
    
        } else {
            echo json_encode(array("error" => "Failed to update comment"));
        }
    }
}
