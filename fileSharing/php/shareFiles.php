<?php
//session_start();
// Ensure the user is authenticated
//shida😂😂
include_once "connect.php";
include_once  "../../backend/php/signin/sessions.php";
$session_id='';
$user_id='';
$session_id = $_POST['ses_id'];
if($session_id){
   $user_id=getUserId($session_id);
}
$sqlFetchUserName="SELECT f_name,l_name from USER_DETAILS_TBL where user_id='$user_id'";
$sqlRunFetch=mysqli_query($conn,$sqlFetchUserName);
$namesAssoc=mysqli_fetch_assoc($sqlRunFetch);
$u_firstName=ucwords($namesAssoc['f_name']);
$u_lastName=ucwords($namesAssoc['l_name']);
$u_inits=ucwords($u_firstName[0].$u_lastName[0]);
// Base upload directory
$uploadDir = __DIR__ . '/../../FileUpload/fl3Mee/uploads/';

// Ensure the base directory exists
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}


$comments=$_POST['senderComments'];
// Process each user and their respective files
if (isset($_POST['users'])) {
    foreach ($_POST['users'] as $user) {
        $recipient_id = $user['recipient_id'];
        $receiver_name = $user['receiver'];
        $senderInits = $u_inits;

        // Create the recipient's directory if it doesn't exist
        $recipientFolder = $uploadDir . $recipient_id . '/SharedFiles/';
        if (!file_exists($recipientFolder)) {
            // Attempt to create the directory
            if (!mkdir($recipientFolder, 0755, true)) {
                echo "Failed to create directory for user: $receiver_name.";
                continue;
            }
        }

        // Check if the folder exists in the database
        $sqlLookForFolder = "SELECT folder_id FROM folders WHERE folder_name = 'SharedFiles' AND owner_id = ? AND folder_type = 'sharedFilesFolder'";
        if ($stmt = $conn->prepare($sqlLookForFolder)) {
            $stmt->bind_param("i", $recipient_id);
            $stmt->execute();
            $result = $stmt->get_result();

            // If no folder exists, insert the folder into the database
            if ($result->num_rows == 0) {
                $insertFolderSql = "INSERT INTO folders (folder_name, color_label, folder_type, owner_id, can_be_deleated) 
                                    VALUES ('SharedFiles', '#cfeea4', 'sharedFilesFolder', ?, false)";
                if ($insertStmt = $conn->prepare($insertFolderSql)) {
                    $insertStmt->bind_param("i", $recipient_id);
                    if ($insertStmt->execute()) {
                        echo "Folder successfully created and saved in the database.";
                        $folder_id = $insertStmt->insert_id; // Get the inserted folder's ID
                    } else {
                        echo "Error while inserting folder: " . $conn->error;
                        continue;
                    }
                    $insertStmt->close();
                }
            } else {
                // Folder exists, get the folder ID
                $row = $result->fetch_assoc();
                $folder_id = $row['folder_id'];
            }
            $stmt->close();
        } else {
            echo "Error preparing the SQL statement: " . $conn->error;
            continue;
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
                //echo "File $fileName successfully copied to $receiver_name's folder.\n";

                // Insert file into the database
                $file_name = "(shrd)(" . $senderInits . ")".$file['fileName'];
                $file_type = $file['fileType'];
                $file_extension = $file['fileExtension'];
                $file_description = "This Is Shared file from " . $receiver_name;
                $file_size = $file['fileSize'];
                $uploader_id = $file['uploaderId'];

                $sqlInsertFile = "INSERT INTO FILES_TBL (folder_id, file_name, file_pseudo_name, file_type, file_extension, file_description, file_size, file_path_directory, uploader_id,owner_id,file_access_level)
                                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,2)";
                if ($stmt = $conn->prepare($sqlInsertFile)) {
                    $stmt->bind_param("isssssisii", $folder_id, $file_name, $recipientFileName, $file_type, $file_extension, $file_description, $file_size, $recipientFolder, $uploader_id,$recipient_id);
                    if ($stmt->execute()) {
                       // echo "Shared Files Added To the Database";

                        // Get the file_id of the newly inserted file
                        $file_id = $stmt->insert_id;

                        // Now record the shared file into the FILE_SHARING_TBL table
                        $sqlInsertSharing = "INSERT INTO FILE_SHARING_TBL (file_id, receiver_id, sender_id, sender_comments, sharing_status)
                                             VALUES (?, ?, ?, ?, 'shared')";
                        if ($shareStmt = $conn->prepare($sqlInsertSharing)) {

                            $shareStmt->bind_param("iiis", $file_id, $recipient_id, $user_id,$comments);
                            if ($shareStmt->execute()) {
                                echo "File successfully shared to $receiver_name <br>";
                                $share_id=$shareStmt->insert_id;
                                $notification_name='File Shared: '.$file_name;
                                $notification_type='file_share_info';
                                $notification_sentTo=$recipient_id;
                                $sender_name=$u_firstName." ".$u_lastName;
                                $notification_message=$sender_name.' has shared a file to you. Please acknowledge the file and check the shared folder to view';
                                $insertNotification = 
                                 "INSERT INTO NOTIFICATIONS (n_name, n_type,n_sent_to, n_message,n_id_tags)
                                             VALUES (?, ?, ?, ?, ?)";
                                if ($notificationStmt = $conn->prepare($insertNotification)) {
                                    $notificationStmt->bind_param("ssssi", $notification_name, $notification_type, $notification_sentTo,$notification_message,$share_id);
                                    if($notificationStmt->execute()){
                                        echo "Notification sent to $receiver_name";
                                    }else{
                                        echo "notification sending ran into an error " .$conn->error;
                                    }
                                }else{
                                    echo "error sending the notification to $receiver_name";
                                }
                            } else {
                                echo "Error recording the file sharing event: " . $conn->error;
                            }
                            $shareStmt->close();
                        }
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
