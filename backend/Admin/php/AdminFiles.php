<?php
session_start();
include "connect.php";
if(isset($_SESSION['userId'])){
    $userId=$_SESSION['$userId'];
    $sqlGetUserDetails="SELECT f_name, l_name,email from USER_DETAILS_TBL where user_id='$userId'";
    $queryDetails=mysqli_query($conn,$sqlGetUserDetails);
    $fetchResultDetails=mysqli_fetch_all($queryDetails,MYSQLI_ASSOC);
    $_SESSION['fName']=$fetchResultDetails[0]['f_name'];
    $_SESSION['lName']=$fetchResultDetails[0]['l_name'];
    $_SESSION['email']=$fetchResultDetails[0]['email'];
    
}else{
    echo"<br><h1> ACCESS TO THIS PAGE IS DENIED TRY LOGIN IN FIRST</h1>";
   // header("Location:/BungoArch/html/backend/php/signin/auth-sign-in.php");
}
//USER PROFILE EDIT HAPPENS HERE

?>