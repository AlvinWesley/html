<?php
if (isset($_POST['filePath']) && isset($_POST['fileName'])) {
    $fileDirRoot = __DIR__.'/../../FileUpload/fl3Mee/';
    $filePath = $fileDirRoot . $_POST['filePath'];
    $fileName = $_POST['fileName'];

    if (file_exists($filePath)) {
        // Set headers to trigger file download
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $fileName . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filePath));
        
        // Clean output buffer to avoid issues
        ob_clean();
        flush();
        
        // Output the file for download
        readfile($filePath);
        
        // No further output should be sent after readfile
        exit;
    } else {
        echo json_encode(['error' => 'File not found.']);
    }
} else {
    echo json_encode(['error' => 'No file specified.']);
}
?>
