let g;
function gr() {
   const d = new Date();
   const h = d.getHours();
   g = (h < 12) ? "Good Morning" : (h < 18) ? "Good Afternoon" : "Good Evening";
   document.getElementById("formPrompt").textContent = g;
}

gr(); 
setInterval(gr, 3600*1000); 

document.getElementById("signUpForm").addEventListener("submit",signUpForm);
function signUpForm(e){
    e.preventDefault();
    //I shall declare xml object here
    var xhr=new XMLHttpRequest();
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var phoneNo=document.getElementById("phone").value;
    var email=document.getElementById('email').value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
   
    var toa= document.getElementById("customCheck1").checked? document.getElementById("customCheck1").value:"";
    console.log(toa);
    var sendData="submit=Submit"+"&firstName="+firstName+"&lastName="+lastName+"&email="+email+"&password="+password+"&confirmPassword="+confirmPassword+"&phone="+phoneNo+"&termsOfAgreement="+toa;
    xhr.open("POST","signup.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(this.responseText);
    xhr.onload=function(){
        console.log(this.responseText);
        var promptErrors=JSON.parse(this.responseText);
        console.log(this.responseText);
        console.log("Hello Wald");
        document.getElementById("formPrompt").innerText=promptErrors.formPrompt;
        document.getElementById("txtFirstName").innerText=promptErrors.firstNamePrompt;
        document.getElementById("txtLastName").innerText=promptErrors.lastNamePrompt;
        document.getElementById("txtPhone").innerText=promptErrors.phonePrompt;
        document.getElementById("txtEmail").innerText=promptErrors.emailPrompt;
        document.getElementById("txtPassword").innerText=promptErrors.passwordPrompt;
        document.getElementById("txtConfirmPassword").innerText=promptErrors.confirmPasswordPrompt;
        document.getElementById("txtCustomCheck1").innerText=promptErrors.agreementPrompt;
        console.log(promptErrors.sc);
       if(promptErrors.sc){
         setTimeout(function() {
            window.location.href = '/BungoArch/html/backend/php/signin/auth-sign-in.php';
        }, 3000);
       }
    }
    xhr.send(sendData);
}