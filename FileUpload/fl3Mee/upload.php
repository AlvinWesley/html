<?php
// $firstName=$_POST['firstName'];
// $folder="uploads/".$firstName;
// // Path to the directory you want to create
// $directoryPath = 'path/to/your/new/folder';

//  //Check if the directory already exists
// if (!file_exists($directoryPath)) {
// //Attempt to create the directory
//   if (mkdir($directoryPath, 0777, true)) {
//          echo 'Directory created successfully!';
//      } else {
//          echo 'Failed to create directory.';
//     }
//  } else {
//      echo 'Directory already exists.';
//  }

// move_uploaded_file($_FILES['file']['tmp_name'],
//                     $folder.time().'_'.$firstName.$_FILES['file']['name']);
               
?>
<?php
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
?>
