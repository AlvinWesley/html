<?php
//now guys here is the procudure to move 
$source = 'path/to/folderA/filename.ext'; // Path to the file in folder A
$destination = 'path/to/folderB/filename.ext'; // Path to the file in folder B

if (rename($source, $destination)) {
    echo "File moved successfully.";
} else {
    echo "Failed to move the file.";
}
?>
