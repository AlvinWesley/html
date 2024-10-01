<?php
include "connect.php";
include_once  "../../../html/backend/php/signin/sessions.php";
$session_id='';
$user_id='';
$session_id = $_GET['ses_id']?? null;
if($session_id){
   $user_id=getUserId($session_id);
}
$sqlFetchFiles="SELECT  file_id ,folder_id,file_name,file_extension,file_access_level,file_path_directory,file_pseudo_name from FILES_TBL where owner_id='$user_id'" ;
$sqlFileRun=mysqli_query($conn,$sqlFetchFiles);
$sqlGetThem=mysqli_fetch_all($sqlFileRun,MYSQLI_ASSOC);
echo json_encode($sqlGetThem);   
