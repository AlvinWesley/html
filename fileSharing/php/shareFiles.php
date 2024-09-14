<?php
session_start();
// Ensure the user is authenticated
include_once "connect.php";
if (!isset($_SESSION['userId'])) {
    echo "Error: User not authenticated.";
    exit;
}

// Base upload directory
$uploadDir = __DIR__ . '/../../FileUpload/fl3Mee/uploads/';

// Ensure the base directory exists
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}else{
    echo "failed to create main dir coz its already there😂";
}

// Get current user ID
$user_id = $_SESSION['userId'];

// Process each user and their respective files
if (isset($_POST['users'])) {
    foreach ($_POST['users'] as $user) {
        $recipient_id = $user['recipient_id'];
        $receiver_name = $user['receiver'];
        $receiverInits=$user['recipient_Inits'];

   // Create the recipient's directory if it doesn't exist
$recipientFolder = $uploadDir . $recipient_id . '/SharedFiles/';
if (!file_exists($recipientFolder)) {
    // Attempt to create the directory
    if (!mkdir($recipientFolder, 0755, true)) {
        echo "Failed to create directory for user: $receiver_name.";
        continue;
    } else {
        // Check if the folder for the recipient's ID as the owner exists in the database
        $sqlLookForFolder = "SELECT folder_id,folder_name, folder_type, owner_id 
                             FROM folders 
                             WHERE folder_name = 'SharedFiles' 
                             AND folder_type = 'sharedFilesFolder' 
                             AND owner_id = ?";

        // Use a prepared statement to avoid SQL injection
        if ($stmt = $conn->prepare($sqlLookForFolder)) {
            $stmt->bind_param("i", $recipient_id); // Bind the recipient_id as an integer
            $stmt->execute();
            $result = $stmt->get_result();
            // If no rows are returned, the folder doesn't exist, so insert it
            if ($result->num_rows == 0) {
                $insertFolderSql = "INSERT INTO folders (folder_name, color_label, folder_type, owner_id, can_be_deleated) 
                                    VALUES ('SharedFiles', '#cfeea4', 'sharedFilesFolder', ?, false)";
                if ($insertStmt = $conn->prepare($insertFolderSql)) {
                    $insertStmt->bind_param("i", $recipient_id); // Bind recipient_id
                    if ($insertStmt->execute()) {
                        echo "Folder successfully created and saved in the database.";
                    } else {
                        // Log errors instead of displaying them in production
                        echo "Error while inserting folder: " . $conn->error;
                    }
                    $insertStmt->close();
                }
            } else {
                echo "Folder already exists in the database.";
            }
            $stmt->close();
        } else {
            // Log or handle errors with preparing the SQL statement
            echo "Error preparing the SQL statement: " . $conn->error;
        }
    }
}
        // Process files for this recipient
        foreach ($user['files'] as $file) {
            $filePseudoName = $file['filePseudoName'];
            $fileName = $file['fileName'];
            $dir = $file['dir'];

            // Construct source and destination paths
            $source = __DIR__ . '/../../FileUpload/fl3Mee' . $dir . $filePseudoName;
            $recipientFileName = time() . '_' . uniqid() . '_' . $receiver_name . '_Shr_' . $user_id . '_' . $fileName;
            $destination = $recipientFolder . $recipientFileName;

            // Move/copy the file to the recipient's folder
            if (copy($source, $destination)) {
                echo "File $fileName successfully copied to $receiver_name's folder.\n";
            //SQL Code To Save The Files Into The Database Now
            //First fetch the Destination Folder id 
            $sqlGetFolderId = "SELECT folder_id FROM folders WHERE folder_name = ? AND owner_id = ? AND folder_type = ?";
                    if ($stmt = $conn->prepare($sqlGetFolderId)) {
                        $folderName = 'SharedFiles';
                        $folderType = 'sharedFilesFolder';
                        $stmt->bind_param("sis", $folderName, $recipient_id, $folderType);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $row = $result->fetch_assoc();
                        $stmt->close();
                    }

            $folder_id=$row['folder_id'];
            $file_name=$file['fileName']."(shrd)(".$receiverInits.")";
            $file_type=$file['fileType'];
            $file_extension=$file['fileExtension'];
            $file_description="This Is Shared file from ".$receiver_name;
            $file_size=$file['fileSize'];
            $uploader_id=$file['uploaderId'];
          $sqlInsertFile = "INSERT INTO FILES_TBL (folder_id, file_name, file_pseudo_name, file_type, file_extension, file_description, file_size, file_path_directory, uploader_id)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                    if ($stmt = $conn->prepare($sqlInsertFile)) {
                        $stmt->bind_param("isssssisi", $folder_id, $file_name, $recipientFileName, $file_type, $file_extension, $file_description, $file_size, $recipientFolder, $uploader_id);
                        if ($stmt->execute()) {
                            echo "Shared Files Added To the Database";
                            //now RECORD the Shared files  INTO THE FILE_SHARING_TABLE Table
                            //$sqlUpdateSharedFiles = "INSERT INTO FILE_SHARING_TABLE";
                        } else {
                            echo "Error Saving the Shared Files into the Database: " . $conn->error;
                        }
                        $stmt->close();
                    }
            } else {
                // Log more detailed errors if file copying fails
                $error = error_get_last();
                echo "Error copying $fileName to $receiver_name's folder: " . $error['message'] . "\n";
            }
        }
    }
} else {
    echo "Error: No users or files provided.";
}
?>
