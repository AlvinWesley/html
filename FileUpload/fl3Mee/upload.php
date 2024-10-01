<?php
include "connect.php";
include_once  "../../../html/backend/php/signin/sessions.php";

$session_id='';
$user_id='';
$session_id = $_GET['ses_id']?? null;
if($session_id){
   $user_id=getUserId($session_id);
}
//$sqlFetchFolders="SELECT folder_id,folder_name,date_created,is_active,max_numberOf_items,color_label FROM folders where owner_id='$user_id'";
$sqlFetchFolders="
SELECT
 f.folder_id,
COUNT(fl.file_id) AS file_count,
f.folder_name As folderName,
f.date_created As dateCreated,
f.is_active As isActive,
f.max_numberOf_items As maxNumberOfItems,
f.color_label As backgroundColor,
f.owner_id As ownerId
FROM folders f 
LEFT JOIN Files_Tbl fl ON f.folder_id = fl.folder_id
where f.owner_id='$user_id'
GROUP BY f.folder_id,f.folder_name";
$result = mysqli_query($conn, $sqlFetchFolders);
$fetchResultsFolder=mysqli_fetch_all($result,MYSQLI_ASSOC);
 //$TheseItemsFolder= array("FileCounts"=>$fetchCountResults,"Folders"=>$fetchResultsFolder);
echo json_encode($fetchResultsFolder);
if (isset($_POST['firstName'])){
$firstName = $_POST['firstName'];
$uploadDir = __DIR__.'/uploads/'.$user_id;
$folder = $uploadDir .'/'. $firstName . '/'; // Path to the directory for the user's folder
// Check if the "uploads" directory exists, create it if not
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}
// Check if the user's folder exists, create it if not
if (!file_exists($folder)) {
    if (mkdir($folder, 0777, true)) {
        echo 'Directory created successfully!';
    } else {
       echo 'Failed to create directory.';
    }
} else {
    echo 'Directory already exists.';
}

// Move the uploaded file to the user's folder
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
$session_id = $_POST['ses_id'];
if($session_id){
   $user_id=getUserId($session_id);
}
    $firstName = trim($_POST['firstName']);
    $file_name = trim($_FILES['file']['name']);
    $filePseudoName = time() . '_' . $firstName . '_' .$file_name;
    $filePath = $folder . $filePseudoName;
    $d_filePath= $folder;
    $file_size=$_FILES['file']['size'];
    $folder_id=$_POST['folder_id'];
    //$file_name=$_FILES['file']['name'];
    $file_type=$_FILES['file']['type'];
    $file_description=$_POST["file_description"];
    $file_extension=$_POST["file-extension"];
    $file_access_level=$_POST['fileAcess'];
    //$date_of_upload=Date();
  //mkdir($uploadDir, 0777, true);
 // move_uploaded_file($_FILES['file']['tmp_name'], $filePath);
    if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
        //Handling Files into the database
          $sqlInsertFile="INSERT INTO Files_Tbl (folder_id,
                                            file_name,
                                            file_pseudo_name,
                                            file_type,
                                            file_extension,
                                            file_description,
                                            file_size,
                                            file_path_directory,
                                            uploader_id,
                                            owner_id,
                                            file_access_level)
                    VALUES('$folder_id','$file_name','$filePseudoName',
                            '$file_type','$file_extension','$file_description',
                            '$file_size','$d_filePath','$user_id','$user_id','$file_access_level')";
    $sqlFileExecute=mysqli_query($conn,$sqlInsertFile);
    if($sqlFileExecute){
        echo 'File upload saved to database successfully!';
    }else{
        echo 'Failed to save upload file to database ';
    }
        
    } else {
        echo 'Failed to move upload file.';
    }
} else {
    echo 'No file uploaded or upload error.';
}
}
//Handling Saving Of Folders into the Database Here

if(isset($_POST["folderName"])){
   // if(isset($_SESSION['userId'])){
   $session_id = $_POST['ses_id'];
if($session_id){
   $user_id=getUserId($session_id);
}
        $folderColor="orange";
        if(isset ($_POST["folder-clr"])){
            $folderColor=$_POST['folder-clr'];
        }
        //$userId = $_SESSION['userId'];
        $folderName=$_POST["folderName"];
        // $user_id=(int)$user_id;
        //echo $user_id;
        $folderType="general";
        $sql="INSERT INTO FOLDERS(folder_name,folder_type,color_label,owner_id)
                VALUES('$folderName','$folderType','$folderColor','$user_id')";
        $execute=mysqli_query($conn,$sql);
      if($execute){
    //echo "Folder has been added successfully";
        }else{
    //echo "Folder add has experienced an error: " . mysqli_error($conn);
        }

    //}
   
}else{
    //echo"Error Here";
}
?>
