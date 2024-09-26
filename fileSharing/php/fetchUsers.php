<?php
include "connect.php";
$user_id = '';
include_once  "../../php/signin/sessions.php";

$session_id='';
$user_Id='';
$session_id = $_GET['ses_id']?? null;
if($session_id){
   $user_Id=getUserId($session_id);
}
$sqlGetUsers=
"SELECT 
    USER_DETAILS_TBL.user_id, 
    USER_DETAILS_TBL.l_name, 
    USER_DETAILS_TBL.f_name,
    USER_DETAILS_TBL.email, 
    USER_DETAILS_TBL.regStatus, 
    USER_LOGIN_TBL.department_id 
FROM 
    USER_DETAILS_TBL 
INNER JOIN 
    USER_LOGIN_TBL ON USER_DETAILS_TBL.user_id = USER_LOGIN_TBL.user_id
WHERE USER_DETAILS_TBL.regStatus=1 and USER_DETAILS_TBL.user_id<>'$user_id';
";
$sqlRun=mysqli_query($conn,$sqlGetUsers);
$sqlFetchThem=mysqli_fetch_all($sqlRun,MYSQLI_ASSOC);
echo json_encode($sqlFetchThem);
