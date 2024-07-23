<?php
session_start();
include "connect.php";
$employeeNumber='';
$dateOfBirth='';
$gender='';
$nationalID='';
$region='';
$password='';
$confirmPassword='';
$firstName='';
$lastName='';
$email='';
$dateOfReg='';
$phoneNumber='';
$updatePrompt=array(
    'update'=>''
);
$lgb=true;
if(isset($_SESSION['userId'])){
    
    $userId=$_SESSION['userId'];
    $sqlGetUserDetails="SELECT f_name, l_name,email,
                                employee_number,date_of_birth,date_of_reg,gender,
                                national_id,region,phone_number 
                                from USER_DETAILS_TBL where user_id='$userId'";
    $queryDetails=mysqli_query($conn,$sqlGetUserDetails);
    $fetchResultDetails=mysqli_fetch_all($queryDetails,MYSQLI_ASSOC);
    $firstName=$_SESSION['fName']=$fetchResultDetails[0]['f_name'];
    $lastName=$_SESSION['lName']=$fetchResultDetails[0]['l_name'];
    $email=$_SESSION['email']=$fetchResultDetails[0]['email'];
    $employeeNumber=$_SESSION['employeeNumber']=$fetchResultDetails[0]['employee_number'];
    $dateOfBirth=$_SESSION['dateOfBirth']=$fetchResultDetails[0]['date_of_birth'];
    $dateOfReg=$_SESSION['dateOfReg']=$fetchResultDetails[0]['date_of_reg'];
    $gender=$_SESSION['gender']=$fetchResultDetails[0]['gender'];
    $nationalID=$_SESSION['nationalId']=$fetchResultDetails[0]['national_id'];
    $region=$_SESSION['region']=$fetchResultDetails[0]['region'];
    $phoneNumber=$_SESSION['phoneNumber']=$fetchResultDetails[0]['phone_number'];
    //SQL TO UPDATE THE USER CREDENTIALS
    //Stating the items needed to be updated
    //JSON ENCODING FOR THE CREDENTIALS
    $lgb=false;
    $credentials=json_encode(array(
        "f_name"=>$firstName,
        "l_name"=>$lastName,
        "email"=>$email,
        "employee_number"=>$employeeNumber,
        "date_of_birth"=>$dateOfBirth,
        "date_of_reg"=>$dateOfReg,
        "gender"=>$gender,
        "national_id"=>$nationalID,
        "region"=>$region,
        "phone_number"=>$phoneNumber,
        "firstNameInit"=>$firstName[0],
        "log"=>$lgb
    ));
    //SQL TO UPDATE THE USER CREDENTIALS
echo $credentials;
   
    
if(isset($_POST['submitUserDetails'])){
    if(isset($_POST['employeeNumber'])){
        $employeeNumber=$_POST['employeeNumber'];
    }
    if(isset($_POST['fName'])){
            $firstName=$_POST['fName'];
            }
    if(isset($_POST['lName'])){
            $lastName=$_POST['lName'];
            }
    if(isset($_POST['email'])){
            $email=$_POST['email'];
                }
    if(isset($_POST['dateOfBirth'])){
            $dateOfBirth=$_POST['dateOfBirth'];
                    }
    if(isset($_POST['dateOfReg'])){
            $dateOfReg=$_POST['dateOfReg'];
                        }
    if(isset($_POST['gender'])){
            $gender=$_POST['gender'];
                            }
    if(isset($_POST['nationalId'])){
            $nationalID=$_POST['nationalId'];
                                }
    if(isset($_POST['region'])){
            $region=$_POST['region'];
                                    }
    if(isset($_POST['phoneNumber'])){
            $phoneNumber=$_POST['phoneNumber'];
                                        }
    if(isset($_POST['password'])){
            $password=$_POST['password'];
                                        }
    $sqlUpdateUserDetails=  "UPDATE USER_DETAILS_TBL 
                                SET 
                                f_name='$firstName',
                                l_name='$lastName',
                                employee_number='$employeeNumber',
                                gender='$gender',
                                national_id='$nationalID',
                                Region='$region',
                                date_of_birth='$dateOfBirth'
                                WHERE user_id='$userId'";
    
    $queryUpdateUserDetails=mysqli_query($conn,$sqlUpdateUserDetails);
    if($queryUpdateUserDetails){
       // echo "User Details Updated Successfully";
       $updatePrompt['update']="User Updated Successfully";
        }
        else{
           // echo "Error Occured while updating User Details";
           $updatePrompt['update']="User Updated Successfully";
            }

}

}
else{
    //$updatePrompt['log']=true;
     echo json_encode(array(
        'log'=>$lgb
    ));
}
//USER PROFILE EDIT HAPPENS HERE
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

?>