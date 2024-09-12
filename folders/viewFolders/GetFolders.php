<?php
include"../connect.php";
$folderID='';
if(isset($_POST['folder_id'])){
    $folderID=$_POST['folder_id'];
    $sqlFetchFiles="SELECT file_id,file_name,date_of_upload,file_size,uploader_id,file_access_level from FILES_TBL where folder_id='$folderID'";
    $fetchFolderFiles=mysqli_query($conn,$sqlFetchFiles);
    $folderFileArr=mysqli_fetch_all($fetchFolderFiles,MYSQLI_ASSOC);
    echo json_encode($folderFileArr);
}  //$folderID=$_POST['folder_id'];
//     $sqlFetchFiles="SELECT file_id,file_name,date_of_upload,file_size,uploader_id from FILES_TBL";
//     $fetchFolderFiles=mysqli_query($conn,$sqlFetchFiles);
//     $folderFileArr=mysqli_fetch_all($fetchFolderFiles,MYSQLI_ASSOC);
//     echo json_encode($folderFileArr);
// 
?>