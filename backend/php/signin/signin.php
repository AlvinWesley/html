<?php
// Includes
include 'connect.php';
session_start();
$formPrompt = array(
    'form' => ''
);
$sc=false;
$inputError = array(
    'userName' => '',
    'password' => '',
);
$userName = '';
$userNameAuth = '';
$userId = '';
$userPassword = '';
$userPasswordAuth = '';
$sql = "SELECT user_id, user_name, user_password FROM USER_lOGIN_TBL";
$query = mysqli_query($conn, $sql);
$fetchResult = mysqli_fetch_all($query, MYSQLI_ASSOC);

function auth($userName) {
    global $fetchResult;
    foreach ($fetchResult as $user) {
        if ($userName == $user['user_name']) {
            global $userNameAuth, $userPasswordAuth, $userId;
            $userNameAuth = $user['user_name'];
            $userPasswordAuth = $user['user_password'];
            $userId = $user['user_id'];
            return true;
        }
    }
    return false;
}

if (isset($_POST['signIn'])) {
    if (empty($_POST['userName'])) {
        $inputError['userName'] = "The Username field cannot be empty";
    } else {
        $userName = $_POST['userName'];
        if (auth($userName)) {
            if (empty($_POST['userPassword'])) {
                $inputError['password'] = "The Password field cannot be empty";
                $formPrompt['form'] = "There is an Empty Field";
            } else {
                $userPassword = $_POST['userPassword'];
                if ($userPassword == $userPasswordAuth) {
                    $_SESSION['user'] = $userName;
                    $_SESSION['userId'] = $userId;
                    $formPrompt['form'] = "Login Success";
                    $sc=true;
                    $sqlGetUserDetails="SELECT f_name, l_name,email from USER_DETAILS_TBL where user_id='$userId'";
                    $queryDetails=mysqli_query($conn,$sqlGetUserDetails);
                    $fetchResultDetails=mysqli_fetch_all($queryDetails,MYSQLI_ASSOC);
                    $_SESSION['fName']=$fetchResultDetails[0]['f_name'];
                    $_SESSION['lName']=$fetchResultDetails[0]['l_name'];
                    $_SESSION['email']=$fetchResultDetails[0]['email'];
                } else {
                    $formPrompt['form'] = "The Username or Password is Incorrect";
                    $formPrompt['form'] = "There is an Empty Field";
                }
            }
        } else {
            $formPrompt['form'] = "The Username or Password is Incorrect";
        }
    }

    echo json_encode(array(
        "formPrompt" => $formPrompt['form'],
        "userNamePrompt" => $inputError['userName'],
        "userPassPrompt" => $inputError['password'],
        "sc"=>$sc,
        "S_FN"=>$_SESSION['fName']
    ));
    exit;
}
?>
