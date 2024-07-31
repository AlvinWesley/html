<?php
include "connect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['userId']) && isset($_POST['userStatus'])) {
        $userId = $_POST['userId'];
        $userStatus = $_POST['userStatus'];
        
        $query2 = "UPDATE USER_DETAILS_TBL SET regStatus='$userStatus' WHERE user_id='$userId'";
        $exe = mysqli_query($conn, $query2);
        
        if ($exe) {
            echo "User status updated successfully";
        } else {
            echo "Error updating user status: " . mysqli_error($conn);
        }
    }
} else {
    $query = "SELECT user_id, f_name, l_name, email, regStatus, phone_number, date_of_reg FROM USER_DETAILS_TBL";
    $run = mysqli_query($conn, $query);
    $results = mysqli_fetch_all($run, MYSQLI_ASSOC);
    echo json_encode($results);
}

$conn->close();
?>
