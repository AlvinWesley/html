<?php
include "connect.php";
session_start();
$user_id='';
if(isset($_SESSION['userId'])){
    $user_id = $_SESSION['userId'];
$sqlFetchFiles="SELECT  file_id ,folder_id,file_name,file_extension from FILES_TBL where owner_id='$user_id'" ;
$sqlFileRun=mysqli_query($conn,$sqlFetchFiles);
$sqlGetThem=mysqli_fetch_all($sqlFileRun,MYSQLI_ASSOC);
echo json_encode($sqlGetThem);   
}

?>