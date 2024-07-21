<?php
session_start();
//echo "<br> Hell";
include "connect.php";
$formPrompt=array(
    'form'=>'Hello There'
);
$inputError=array(
    'firstName'=>'',
    'lastName'=>'',
    'phone'=>'',
    'email'=>'',
    'password'=>'',
    'confirmPassword'=>'',
    'agreement'=>''
);
$firstName='';
$lastName='';
$email='';
$phone='';
$password='';
$confirmPassword='';
$userId='';
$userName='';
$termsOfAgreement='';
$sql="SELECT email FROM USER_DETAILS_TBL ";
$results=mysqli_query($conn,$sql);
$systUsersEmail=mysqli_fetch_all($results,MYSQLI_ASSOC);

function checkUniqueEmail($name){
    global $systUsersEmail;
    foreach($systUsersEmail as $emp){
    if($name==$emp['email']){
    // echo"<br> Found Match <br>";
        return true;
    }
    }
}
$sql="SELECT phone_number FROM USER_DETAILS_TBL ";
$results=mysqli_query($conn,$sql);
$systUsersPhone=mysqli_fetch_all($results,MYSQLI_ASSOC);
function checkUniquePhone($name){
    global $systUsersPhone;
    foreach($systUsersPhone as $emp){
    if($name==$emp['phone_number']){
    // echo"<br> Found Match <br>";
        return true;
    }
    }
}
if(isset($_POST['submit'])){
        if(empty($_POST['firstName'])){
            $inputError['firstName']="The FirstName field Cannot be Empty";
           // echo "<br>Empty Field FN<br> ";
        }else{
            $firstName=$_POST['firstName'];
        }
        if(empty($_POST["email"])){
            $inputError['email']="Email is Empty";
           // echo "<br>Empty Field email<br>";
        }else{
            if(checkUniqueEmail($_POST["email"])){
                $inputError['email']="Email Already Exists";
            }else{
                $email=$_POST['email'];
            }
            
        }
        
        if(empty($_POST['lastName'])){
            $inputError['lastName']="Last Name is Empty";
            //echo "<br>Empty Field Password<br>";
        }else{
            $lastName=$_POST['lastName'];
        }
        if(empty($_POST['phone'])){
            $inputError['phone']="Phone Number is Empty";

            //echo "<br>Empty Field Password<br>";
        }else{
            if(checkUniquePhone($_POST['phone'])){
                $inputError['phone']="Phone Number Already Exists";
            }else{
                $phone=$_POST['phone'];
            }
           
        }
    
       
            if(empty($_POST["password"])){
                $inputError['password']="Password is Empty";
                //echo "<br>Empty Field Password<br>";
            }else{
                $password=$_POST['password'];
            }
        if(empty($_POST['confirmPassword'])){
            $inputError['confirmPassword']="Confirm Password is Empty";
            //echo "<br>Empty Field LN<br>";
        }else{
            $confirmPassword=$_POST['confirmPassword'];
            if($confirmPassword!=$password){
                $inputError['confirmPassword']="Input Does Not Match";
               // echo "<br>Unequall Field FN<br>";
            }
        }
        if(empty($_POST['termsOfAgreement'])){
            $inputError['agreement']="Please Confirm to agreement before you proceed";
        }
        $formPrompt['form']="Welcome to sign Up";
   if(!array_filter($inputError)){
    $formPrompt['form']="Good To Go";
    $_SESSION['email']=$email;
    $sql="INSERT INTO USER_DETAILS_TBL (f_name,l_name,email,phone_number) 
    VALUES ('$firstName','$lastName','$email','$phone')";
    $query=mysqli_query($conn,$sql);
    //echo "<br> Normal".$email;
    if($query){
        $email=$_SESSION['email'];
        //echo"<br> Session Email: ".$email;
        //echo"<br> Run Successfully Q1";
        $sqlGetUserId="SELECT user_id FROM USER_DETAILS_TBL where email= '$email'";
        $sqlRun=mysqli_query($conn,$sqlGetUserId);
        $fetchResult=mysqli_fetch_assoc($sqlRun);
        if($sqlRun){
            //echo"<br> Run Q2 P1";
            $userId=$fetchResult['user_id'];
            $_SESSION['userId']=$userId;
            //$newUserName=$username
            $sqlFinishUp="INSERT INTO USER_lOGIN_TBL (user_id,department_id,user_name,user_password)
                                 VALUES ('$userId','1','$email','$password')";
            $queryFinishUp=mysqli_query($conn,$sqlFinishUp);
            if($queryFinishUp){
                $formPrompt['form']="User Has Been Registered with userName $email";
            }
        }else{
            $formPrompt['form']="Error in Registering LoginDetails";
        }
    }else{
        $formPrompt['form']="Error in Registering UserDetails";
    }
   }
   else{
    $formPrompt['form']="There's an error somewhere";
    //echo "<br>Empty Field Last Last<br>";
   }
}
    echo json_encode(array(
        "formPrompt"=>$formPrompt['form'],
        "firstNamePrompt"=>$inputError['firstName'],
        "lastNamePrompt"=>$inputError['lastName'],
        "phonePrompt"=>$inputError['phone'],
        "emailPrompt"=>$inputError['email'],
        "passwordPrompt"=>$inputError['password'],
        "confirmPasswordPrompt"=>$inputError['confirmPassword'],
        "agreementPrompt"=>$inputError['agreement']
        
    ));
    // echo json_encode(array(
    //     'formPrompt' => $formPrompt['form'],
    //     'inputErrorFirstName' => $inputError['firstName'],
    //     'inputErrorEmail' => $inputError['email'],
    //     'inputErrorPassword' => $inputError['password'],
    //     'inputErrorConfirmPassword' => $inputError['confirmPassword']
    // ));
   
?>