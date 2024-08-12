<?php
$servername="localhost";
$username="root";
$password="wesel123@90";//Change this password to blank

$database_name="BungoArch";
$conn=new mysqli($servername,$username,$password,$database_name);
if($conn->connect_error){
    //echo"<br>connection to database ".$database_name."has experienced an error <br>";
    die("connection has experienced an error ".$conn->connect_error);
}else{
   // echo"<br>Connection to database ".$database_name." has been succesfull <br>";
   $queryDept="SELECT department_id,department_name from  DEPARTMENT_TBL";
   $runQueryDept=mysqli_query($conn,$queryDept);
   $fetchResultsDept=mysqli_fetch_all($runQueryDept,MYSQLI_ASSOC);
 if($fetchResultsDept){
    echo "<select>";
    foreach($fetchResultsDept as $resultsDept){
        echo "Victor<option>".$resultsDept['department_id']." ".$resultsDept['department_name']."</option>";
    }
    echo "</select>";
 }

}
?>