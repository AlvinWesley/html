<?php
include "connect.php";
$sc = false;
$formPrompt = array(
    'form' => 'Hello There'
);
$inputError = array(
    'firstName' => '',
    'lastName' => '',
    'phone' => '',
    'email' => '',
    'password' => '',
    'confirmPassword' => '',
    'agreement' => ''
);
$firstName = '';
$lastName = '';
$email = '';
$phone = '';
$password = '';
$confirmPassword = '';
$userId = '';
$termsOfAgreement = '';

$sql = "SELECT email FROM USER_DETAILS_TBL";
$results = mysqli_query($conn, $sql);
$systUsersEmail = mysqli_fetch_all($results, MYSQLI_ASSOC);

function checkUniqueEmail($name) {
    global $systUsersEmail;
    foreach ($systUsersEmail as $emp) {
        if ($name == $emp['email']) {
            return true;
        }
    }
}

$sql = "SELECT phone_number FROM USER_DETAILS_TBL";
$results = mysqli_query($conn, $sql);
$systUsersPhone = mysqli_fetch_all($results, MYSQLI_ASSOC);

function checkUniquePhone($name) {
    global $systUsersPhone;
    foreach ($systUsersPhone as $emp) {
        if ($name == $emp['phone_number']) {
            return true;
        }
    }
}

if (isset($_POST['submit'])) {
    if (empty($_POST['firstName'])) {
        $inputError['firstName'] = "The FirstName field Cannot be Empty";
    } else {
        $firstName = $_POST['firstName'];
    }

    if (empty($_POST["email"])) {
        $inputError['email'] = "Email is Empty";
    } else {
        if (checkUniqueEmail($_POST["email"])) {
            $inputError['email'] = "Email Already Exists";
        } else {
            $email = $_POST['email'];
        }
    }

    if (empty($_POST['lastName'])) {
        $inputError['lastName'] = "Last Name is Empty";
    } else {
        $lastName = $_POST['lastName'];
    }

    if (empty($_POST['phone'])) {
        $inputError['phone'] = "Phone Number is Empty";
    } else {
        if (checkUniquePhone($_POST['phone'])) {
            $inputError['phone'] = "Phone Number Already Exists";
        } else {
            $phone = $_POST['phone'];
        }
    }

    if (empty($_POST["password"])) {
        $inputError['password'] = "Password is Empty";
    } else {
        $password = $_POST['password'];
    }

    if (empty($_POST['confirmPassword'])) {
        $inputError['confirmPassword'] = "Confirm Password is Empty";
    } else {
        $confirmPassword = $_POST['confirmPassword'];
        if ($confirmPassword != $password) {
            $inputError['confirmPassword'] = "Input Does Not Match";
        }
    }

    if (empty($_POST['termsOfAgreement'])) {
        $inputError['agreement'] = "Please Confirm the agreement before you proceed";
    }

    $formPrompt['form'] = "Welcome to sign Up";

    // Check if no errors
    if (!array_filter($inputError)) {
        $formPrompt['form'] = "Good To Go";

        // Prepared statement to insert into USER_DETAILS_TBL
        $stmt = $conn->prepare("INSERT INTO USER_DETAILS_TBL (f_name, l_name, email, phone_number) 
                                        VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $firstName, $lastName, $email, $phone);

        if ($stmt->execute()) {
            // Get the last inserted user_id
            $userId = mysqli_insert_id($conn);

            // Now insert into USER_LOGIN_TBL using the newly inserted user_id
            $stmtLogin = $conn->prepare("INSERT INTO USER_LOGIN_TBL (user_id, department_id, user_name, user_password) 
                                                VALUES (?, ?, ?, ?)");
            $departmentId = 1; // Assuming department ID is 1
            $stmtLogin->bind_param("iiss", $userId, $departmentId, $email, $password);

            if ($stmtLogin->execute()) {
                $formPrompt['form'] = "User Has Been Registered with userName $email";
                $sc = true;

                // Making the directory for the user
                $uploadDir = __DIR__ . '/../../../FileUpload/fl3Mee/uploads/';
                $folder = $uploadDir . $userId . '/'; // Path to the directory for the user's folder
                
                // Check if the "uploads" directory exists, create it if not
                if (!file_exists($uploadDir)) {
                    mkdir($uploadDir, 0777, true);
                }
                
                // Check if the user's folder exists, create it if not
                if (!file_exists($folder)) {
                    mkdir($folder, 0777, true);
                }
            } else {
                $formPrompt['form'] = "Error in Registering Login Details";
            }

            $stmtLogin->close();
        } else {
            $formPrompt['form'] = "Error in Registering User Details";
        }

        $stmt->close();
    } else {
        $formPrompt['form'] = "There's an error somewhere";
    }

    echo json_encode(array(
        "formPrompt" => $formPrompt['form'],
        "firstNamePrompt" => $inputError['firstName'],
        "lastNamePrompt" => $inputError['lastName'],
        "phonePrompt" => $inputError['phone'],
        "emailPrompt" => $inputError['email'],
        "passwordPrompt" => $inputError['password'],
        "confirmPasswordPrompt" => $inputError['confirmPassword'],
        "agreementPrompt" => $inputError['agreement'],
        "sc" => $sc
    ));

    exit;
}
?>
