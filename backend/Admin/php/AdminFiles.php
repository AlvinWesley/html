<?php
//session_start();
include "connect.php";
$employeeNumber = '';
$dateOfBirth = '';
$gender = '';
$nationalID = '';
$region = '';
$password = '';
$confirmPassword = '';
$firstName = '';
$lastName = '';
$email = '';
$dateOfReg = '';
$phoneNumber = '';
$updatePrompt = array(
    'update' => ''
);
$lgb = true;

// Fetch session details from cookie or session table
if (isset($_COOKIE['session_id']) || isset($_SESSION['session_id'])) {
    $session_id = isset($_COOKIE['session_id']) ? $_COOKIE['session_id'] : $_SESSION['session_id'];

    // Validate session from the USER_SESSIONS_TBL
    $stmt = $conn->prepare("SELECT user_id FROM USER_SESSIONS_TBL WHERE session_id = ? AND expiration_time IS NULL");
    $stmt->bind_param("s", $session_id);
    $stmt->execute();
    $stmt->bind_result($userId);
    
    if ($stmt->fetch()) {
        $_SESSION['userId'] = $userId;
        $stmt->close();

        // Fetch user details based on session user_id
        $sqlGetUserDetails = $conn->prepare("SELECT f_name, l_name, email, employee_number, date_of_birth, date_of_reg, gender, national_id, region, phone_number 
                                             FROM USER_DETAILS_TBL WHERE user_id = ?");
        $sqlGetUserDetails->bind_param("i", $userId);
        $sqlGetUserDetails->execute();
        $result = $sqlGetUserDetails->get_result();
        $fetchResultDetails = $result->fetch_assoc();

        // Populate session variables with user details
        $_SESSION['fName'] = $firstName = $fetchResultDetails['f_name'];
        $_SESSION['lName'] = $lastName = $fetchResultDetails['l_name'];
        $_SESSION['email'] = $email = $fetchResultDetails['email'];
        $_SESSION['employeeNumber'] = $employeeNumber = $fetchResultDetails['employee_number'];
        $_SESSION['dateOfBirth'] = $dateOfBirth = $fetchResultDetails['date_of_birth'];
        $_SESSION['dateOfReg'] = $dateOfReg = $fetchResultDetails['date_of_reg'];
        $_SESSION['gender'] = $gender = $fetchResultDetails['gender'];
        $_SESSION['nationalId'] = $nationalID = $fetchResultDetails['national_id'];
        $_SESSION['region'] = $region = $fetchResultDetails['region'];
        $_SESSION['phoneNumber'] = $phoneNumber = $fetchResultDetails['phone_number'];

        $lgb = false;

        // JSON encoding for the credentials
        $credentials = json_encode(array(
            "f_name" => $firstName,
            "l_name" => $lastName,
            "email" => $email,
            "employee_number" => $employeeNumber,
            "date_of_birth" => $dateOfBirth,
            "date_of_reg" => $dateOfReg,
            "gender" => $gender,
            "national_id" => $nationalID,
            "region" => $region,
            "phone_number" => $phoneNumber,
            "firstNameInit" => $firstName[0],
            "log" => $lgb
        ));
        echo $credentials;

        // Handle form submission to update user details
        if (isset($_POST['submitUserDetails'])) {
            // Collect the updated user inputs
            if (isset($_POST['employeeNumber'])) $employeeNumber = $_POST['employeeNumber'];
            if (isset($_POST['fName'])) $firstName = $_POST['fName'];
            if (isset($_POST['lName'])) $lastName = $_POST['lName'];
            if (isset($_POST['email'])) $email = $_POST['email'];
            if (isset($_POST['dateOfBirth'])) $dateOfBirth = $_POST['dateOfBirth'];
            if (isset($_POST['dateOfReg'])) $dateOfReg = $_POST['dateOfReg'];
            if (isset($_POST['gender'])) $gender = $_POST['gender'];
            if (isset($_POST['nationalId'])) $nationalID = $_POST['nationalId'];
            if (isset($_POST['region'])) $region = $_POST['region'];
            if (isset($_POST['phoneNumber'])) $phoneNumber = $_POST['phoneNumber'];
            if (isset($_POST['password'])) $password = $_POST['password'];

            // Prepare SQL to update user details
            $sqlUpdateUserDetails = $conn->prepare("UPDATE USER_DETAILS_TBL 
                                                    SET f_name = ?, l_name = ?, employee_number = ?, gender = ?, national_id = ?, region = ?, date_of_birth = ?
                                                    WHERE user_id = ?");
            $sqlUpdateUserDetails->bind_param("sssssssi", $firstName, $lastName, $employeeNumber, $gender, $nationalID, $region, $dateOfBirth, $userId);
            $queryUpdateUserDetails = $sqlUpdateUserDetails->execute();

            // Check if the update was successful
            if ($queryUpdateUserDetails) {
                $updatePrompt['update'] = "User Updated Successfully";
            } else {
                $updatePrompt['update'] = "Error occurred while updating user details";
            }
        }
    } else {
        // If session is not valid or expired
        echo json_encode(array('log' => true));
    }
} else {
    echo json_encode(array('log' => true));
}


///////////////////////////////
// session_start();
// include "connect.php";
// $employeeNumber='';
// $dateOfBirth='';
// $gender='';
// $nationalID='';
// $region='';
// $password='';
// $confirmPassword='';
// $firstName='';
// $lastName='';
// $email='';
// $dateOfReg='';
// $phoneNumber='';
// $updatePrompt=array(
//     'update'=>''
// );
// $lgb=true;
// if(isset($_SESSION['userId'])){
    
//     $userId=$_SESSION['userId'];
//     $sqlGetUserDetails="SELECT f_name, l_name,email,
//                                 employee_number,date_of_birth,date_of_reg,gender,
//                                 national_id,region,phone_number 
//                                 from USER_DETAILS_TBL where user_id='$userId'";
//     $queryDetails=mysqli_query($conn,$sqlGetUserDetails);
//     $fetchResultDetails=mysqli_fetch_all($queryDetails,MYSQLI_ASSOC);
//     $firstName=$_SESSION['fName']=$fetchResultDetails[0]['f_name'];
//     $lastName=$_SESSION['lName']=$fetchResultDetails[0]['l_name'];
//     $email=$_SESSION['email']=$fetchResultDetails[0]['email'];
//     $employeeNumber=$_SESSION['employeeNumber']=$fetchResultDetails[0]['employee_number'];
//     $dateOfBirth=$_SESSION['dateOfBirth']=$fetchResultDetails[0]['date_of_birth'];
//     $dateOfReg=$_SESSION['dateOfReg']=$fetchResultDetails[0]['date_of_reg'];
//     $gender=$_SESSION['gender']=$fetchResultDetails[0]['gender'];
//     $nationalID=$_SESSION['nationalId']=$fetchResultDetails[0]['national_id'];
//     $region=$_SESSION['region']=$fetchResultDetails[0]['region'];
//     $phoneNumber=$_SESSION['phoneNumber']=$fetchResultDetails[0]['phone_number'];
//     //SQL TO UPDATE THE USER CREDENTIALS
//     //Stating the items needed to be updated
//     //JSON ENCODING FOR THE CREDENTIALS
//     $lgb=false;
//     $credentials=json_encode(array(
//         "f_name"=>$firstName,
//         "l_name"=>$lastName,
//         "email"=>$email,
//         "employee_number"=>$employeeNumber,
//         "date_of_birth"=>$dateOfBirth,
//         "date_of_reg"=>$dateOfReg,
//         "gender"=>$gender,
//         "national_id"=>$nationalID,
//         "region"=>$region,
//         "phone_number"=>$phoneNumber,
//         "firstNameInit"=>$firstName[0],
//         "log"=>$lgb
//     ));
//     //SQL TO UPDATE THE USER CREDENTIALS
// echo $credentials;
   
    
// if(isset($_POST['submitUserDetails'])){
//     if(isset($_POST['employeeNumber'])){
//         $employeeNumber=$_POST['employeeNumber'];
//     }
//     if(isset($_POST['fName'])){
//             $firstName=$_POST['fName'];
//             }
//     if(isset($_POST['lName'])){
//             $lastName=$_POST['lName'];
//             }
//     if(isset($_POST['email'])){
//             $email=$_POST['email'];
//                 }
//     if(isset($_POST['dateOfBirth'])){
//             $dateOfBirth=$_POST['dateOfBirth'];
//                     }
//     if(isset($_POST['dateOfReg'])){
//             $dateOfReg=$_POST['dateOfReg'];
//                         }
//     if(isset($_POST['gender'])){
//             $gender=$_POST['gender'];
//                             }
//     if(isset($_POST['nationalId'])){
//             $nationalID=$_POST['nationalId'];
//                                 }
//     if(isset($_POST['region'])){
//             $region=$_POST['region'];
//                                     }
//     if(isset($_POST['phoneNumber'])){
//             $phoneNumber=$_POST['phoneNumber'];
//                                         }
//     if(isset($_POST['password'])){
//             $password=$_POST['password'];
//                                         }
//     $sqlUpdateUserDetails=  "UPDATE USER_DETAILS_TBL 
//                                 SET 
//                                 f_name='$firstName',
//                                 l_name='$lastName',
//                                 employee_number='$employeeNumber',
//                                 gender='$gender',
//                                 national_id='$nationalID',
//                                 Region='$region',
//                                 date_of_birth='$dateOfBirth'
//                                 WHERE user_id='$userId'";
    
//     $queryUpdateUserDetails=mysqli_query($conn,$sqlUpdateUserDetails);
//     if($queryUpdateUserDetails){
//        // echo "User Details Updated Successfully";
//        $updatePrompt['update']="User Updated Successfully";
//         }
//         else{
//            // echo "Error Occured while updating User Details";
//            $updatePrompt['update']="User Updated Successfully";
//             }

// }

// }
// else{
//     //$updatePrompt['log']=true;
//      echo json_encode(array(
//         'log'=>$lgb
//     ));
// }
//USER PROFILE EDIT HAPPENS HERE
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

?>