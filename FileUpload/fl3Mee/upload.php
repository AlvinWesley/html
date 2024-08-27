<?php
$folder="uploads/";
$firstName=$_POST['firstName'];
move_uploaded_file($_FILES['file']['tmp_name'],
                    $folder.time().'_'.$firstName.$_FILES['file']['name']);
               
?>