<?php
$servername="localhost";
$username="root";
$password="wesel123@90";
$database_name="BungoArch";
$conn=new mysqli($servername,$username,$password,$database_name);
if($conn->connect_error){
    //echo"<br>connection to database ".$database_name."has experienced an error <br>";
    die("connection has experienced an error ".$conn->connect_error);
}else{
   // echo"<br>Connection to database ".$database_name." has been succesfull <br>";
}
?>