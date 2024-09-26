<?php
session_start();
include "connect.php";

$user_id = '';
include_once  "../../php/signin/sessions.php";

$session_id='';
$user_Id='';
$session_id = $_GET['ses_id']?? null;
if($session_id){
   $user_Id=getUserId($session_id);
}
    // Use aggregate functions for columns that are not grouped
    $sqlFetchFiles = "
    SELECT file_name, MAX(file_id) AS file_id,
    MAX(file_path_directory) AS file_path_directory ,
    MAX(folder_id) AS folder_id,
    MAX(file_size) AS file_size,
    MAX(file_type) AS file_type,
    MAX(uploader_id) AS uploader_id,   
    MAX(file_extension) AS file_extension, 
    MAX(date_of_upload) AS date_of_upload,
    MAX(file_pseudo_name) AS file_pseudo_name
    FROM FILES_TBL 
    WHERE uploader_id = '$user_id' 
    AND file_access_level = 1 
    GROUP BY file_name 
    ORDER BY file_id DESC"; // Orders by the most recent file_id

    $sqlFileRun = mysqli_query($conn, $sqlFetchFiles);
    $sqlGetThem = mysqli_fetch_all($sqlFileRun, MYSQLI_ASSOC);

    echo json_encode($sqlGetThem);

