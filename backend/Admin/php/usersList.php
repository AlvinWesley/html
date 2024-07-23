<?php
include"connect.php";
$query="SELECT f_name,l_name,email FROM USER_DETAILS_TBL ";
$run=mysqli_query($conn,$query);
$results=mysqli_fetch_all($run,MYSQLI_ASSOC);
echo json_encode($results);
?>