<?php
session_start();
include "connect.php";
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