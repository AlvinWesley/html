<?php
session_start();
include "connect.php";

if (isset($_POST['firstName'])){
$firstName = $_POST['firstName'];
$uploadDir = 'uploads/';
$folder = $uploadDir . $firstName . '/'; // Path to the directory for the user's folder

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
    $fileName = time() . '_' . $firstName . '_' . $_FILES['file']['name'];
    $filePath = $folder . $fileName;

    if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
        echo 'File uploaded successfully!';
    } else {
        echo 'Failed to upload file.';
    }
} else {
    echo 'No file uploaded or upload error.';
}
}
//Handling Saving Of Folders into the Database Here

if(isset($_POST["folderName"])){
    if(isset($_SESSION['userId'])){
        $folderColor="orange";
        if(isset ($_POST["folder-clr"])){
            $folderColor=$_POST['folder-clr'];
        }
        $userId = $_SESSION['userId'];
        $folderName=$_POST["folderName"];
        $folderType="general";
        $sql="INSERT INTO FOLDERS(folder_name,folder_type,color_label,owner_id)
                VALUES('$folderName','$folderType','$folderColor','$userId')";
        $execute=mysqli_query($conn,$sql);
      if($execute){
    echo "Folder has been added successfully";
        }else{
    echo "Folder add has experienced an error: " . mysqli_error($conn);
        }

    }
   
}else{
    echo"Error Here";
}
?>
