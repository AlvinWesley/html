<?php
include_once "sessions.php";
$ip_address = $_SERVER['REMOTE_ADDR'];
$hostname = gethostbyaddr($ip_address);
echo "IP Address: $ip_address, Hostname: $hostname";
echo"<br>{$_SESSION[$session_id]} :is the sessions id we know";
?>