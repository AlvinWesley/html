<?php
if (isset($_POST['r1'])) {
    $r1 = $_POST['r1'];
    echo "Received data: " . htmlspecialchars($r1);
} else {
    echo "No data received";
}
?>
