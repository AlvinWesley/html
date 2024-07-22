let g;
function gr() {
   const d = new Date();
   const h = d.getHours();
   g = (h < 12) ? "Good Morning" : (h < 18) ? "Good Afternoon" : "Good Evening";
   document.getElementById("formPrompt").textContent = g;
}

gr(); 
setInterval(gr, 3600*1000); 

document.getElementById("Frm_SignIn").addEventListener("submit",signUpForm);
function signUpForm(e){
   e.preventDefault();
   //I shall declare xml object here
   var xhr=new XMLHttpRequest();
   var userName=document.getElementById('us_n').value;
   var password=document.getElementById("us_p").value;
   var sendData="signIn=Submit"+"&userName="+userName+"&userPassword="+password;
   xhr.open("POST","signin.php",true);
   xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   console.log(this.responseText);
   xhr.onload=function(){
       console.log(this.responseText);
       var promptErrors=JSON.parse(this.responseText);
       console.log(this.responseText);
       document.getElementById("formPrompt").innerText=promptErrors.formPrompt;
       document.getElementById("txt_us_n").innerText=promptErrors.userNamePrompt;
       document.getElementById("txt_us_p").innerText=promptErrors.userPassPrompt;
       console.log(promptErrors.sc);
       if(promptErrors.sc){
         setTimeout(function() {
            window.location.href = '/BungoArch/html/backend/Admin/php/Admin-dashboard.php';
        }, 2000);
       }
   }
   xhr.send(sendData);
}