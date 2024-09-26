<?php
include_once "connect.php";
$userId='';
include_once  "../../php/signin/sessions.php";
$session_id = $_GET['ses_id'] ?? null;
if($session_id){
    $userId=getUserId($session_id);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo "THis REQUEST IS FROM THE SERVER ".$_POST['submitUserEdits'];
    
    if(isset($_POST['submitUserEdits'])){
            if($_POST['submitUserEdits']==='submit'){
                        if (isset($_POST['userId']) && isset($_POST['userStatus'])) {
                        $userId = $_POST['userId'];
                        $userStatus = $_POST['userStatus'];
                        //echo $_POST['submitUserEdits'];
                        $query2 = "UPDATE USER_DETAILS_TBL SET regStatus='$userStatus' WHERE user_id='$userId'";
                        $exe = mysqli_query($conn, $query2);
                        
                        if ($exe) {
                            echo "User status updated successfully";
                        } else {
                            echo "Error updating user status: " . mysqli_error($conn);
                        }
                    }
                
            }
            else if($_POST['submitUserEdits']==='click'){ 
                if(isset($_POST['deptID'])&&isset($_POST['userId'])){
                    $deptID = $_POST['deptID'];
                    $userId= $_POST['userId'];
                    $query22 = " UPDATE USER_LOGIN_TBL 
                                SET  department_id='$deptID'
                                WHERE user_id='$userId'";
                    $exe22 = mysqli_query($conn, $query22);
                    
                    if ($exe22) {
                        echo "User Department updated successfully";
                    } else {
                        echo "Error updating user status: " . mysqli_error($conn);
                    }
                }
            }
            else if($_POST['submitUserEdits']==='delete'){ 
                if(isset($_POST['userId'])){
                     $userId= $_POST['userId'];
                    $query22 = " DELETE FROM USER_LOGIN_TBL 
                                WHERE user_id='$userId'";
                    $exe22 = mysqli_query($conn, $query22);
                    
                    if ($exe22) {
                        echo "User has been Deleted successfully";
                    } else {
                        echo "Error deleting user: " . mysqli_error($conn);
                    }
                }
            }
            else if($_POST['submitUserEdits']==='deactivate'){
                        if (isset($_POST['userId']) && isset($_POST['userStatus'])) {
                        $userId = $_POST['userId'];
                        $userStatus = $_POST['userStatus'];
                        echo $_POST['submitUserEdits'];
                        $query2 = "UPDATE USER_DETAILS_TBL SET regStatus='$userStatus' WHERE user_id='$userId'";
                        $exe = mysqli_query($conn, $query2);
                        
                        if ($exe) {
                            echo "User Deactivated successfully";
                        } else {
                            echo "Error Deactivating user : " . mysqli_error($conn);
                        }
                    }
                
            }
    }
}
else {
    $queryDept="SELECT department_id,department_name from  DEPARTMENT_TBL";
    $runQueryDept=mysqli_query($conn,$queryDept);
    $fetchResultsDept=mysqli_fetch_all($runQueryDept,MYSQLI_ASSOC);
    $query = "SELECT 
    USER_DETAILS_TBL.user_id, 
    USER_DETAILS_TBL.l_name, 
    USER_DETAILS_TBL.f_name,
    USER_DETAILS_TBL.email, 
    USER_DETAILS_TBL.regStatus, 
    USER_DETAILS_TBL.phone_number, 
    USER_DETAILS_TBL.date_of_reg, 
    USER_LOGIN_TBL.department_id, 
    DEPARTMENT_TBL.department_name
FROM 
    USER_DETAILS_TBL 
INNER JOIN 
    USER_LOGIN_TBL ON USER_DETAILS_TBL.user_id = USER_LOGIN_TBL.user_id
INNER JOIN 
    DEPARTMENT_TBL ON USER_LOGIN_TBL.department_id = DEPARTMENT_TBL.department_id
ORDER BY 
    USER_DETAILS_TBL.user_id ASC
 ";
    $run = mysqli_query($conn, $query);
    $results = mysqli_fetch_all($run, MYSQLI_ASSOC);
    $myResults=array("results"=>$results,"departments"=>$fetchResultsDept);
    echo json_encode($myResults);
}

$conn->close();


   
