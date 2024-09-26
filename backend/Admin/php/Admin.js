console.log("HEllo checking JS Wald");
let sessionId = sessionStorage.getItem("sessionId");
//document.getElementById("U_Details_update").addEventListener("load",ItemsForm);
window.onload=ItemsForm();
function ItemsForm(){

   console.log("HEllo Wald");
   //I shall declare xml object here
   var xhr=new XMLHttpRequest();
   xhr.open("POST","AdminFiles.php",true);
   let formData= new FormData();
   formData.append("ses_id",sessionId);
   //console.log(this.responseText);
   xhr.onload=function(){
       console.log(this.responseText);
       var items=JSON.parse(this.responseText);
       console.log(items.log);
       if(items.log){
        console.log("this Function excectued");
    //     setTimeout(function() {
    //        window.location.href = '/BungoArch/html/backend/php/signin/auth-sign-in.php';
    //    }, 3000);
      }else{
        function formatDate(dateString) {
            const [datePart, timePart] = dateString.split(' ');
            const [year, month, day] = datePart.split('-');
            return `${year}-${month}-${day}`;
          }
        console.log("this Function did not excecute");
        console.log(items.log);
        //Hell
        console.log(items.l_name);
       document.getElementById("fname").value=items.f_name;
       console.log(items.l_name);
       //document.getElementById("lname").value=items.l_name;
       //console.log(items.l_name);
       document.getElementById("uname").value=items.email;
       document.getElementById("cname").value=items.national_id;
       document.getElementById("uEmail").value=items.email;
       document.getElementById("Empno").value=items.employee_number;
       document.getElementById("email").value=items.email;
       document.getElementById("lname").value=items.l_name;
       console.log(items.l_name);
       document.getElementById("cno").value=items.phone_number;
       document.getElementById("profile_name_init").textContent=items.firstNameInit;
       document.getElementById("profile_name_init1").textContent=items.firstNameInit;
       document.getElementById("profile_name").textContent=items.f_name +" "+ items.l_name;
       document.getElementById("profile_email").textContent=items.email;
        document.getElementById("dob").value=formatDate(items.date_of_birth);
   console.log("THIS HERE ERROR CHECK AA:PASS");
    }
       
    }
   xhr.send(formData);
}
document.getElementById("U_Details_update").addEventListener("submit",updateItems);
function updateItems(e){
    e.preventDefault();
    console.log("HEllo Wald updates");
    var xhr=new XMLHttpRequest();
    var firstName=document.getElementById("fname").value;
    var lastName=document.getElementById("lname").value;
    var phoneNo=document.getElementById("uname").value;
    var email=document.getElementById('uEmail').value;
    var employeeNumber=document.getElementById("Empno").value;
    var nationalId=document.getElementById("cname").value;
    //var confirmPassword=document.getElementById("confirmPassword").value;
    var dateOfBirth=document.getElementById("dob").value;
    //var toa= document.getElementById("customCheck1").checked? document.getElementById("customCheck1").value:"";
    var sendData="submitUserDetails=Submit"+
                 "&fName="+firstName+
                 "&lName="+lastName+
                 "&dateOfBirth="+dateOfBirth+
                 "&employeeNumber="+employeeNumber+
                 "&nationalId="+nationalId+
                 "&dateOfBirth="+dateOfBirth+
                 "&ses_id="+sessionId
                 ;
    xhr.open("POST","AdminFiles.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(this.responseText);
    xhr.onload=function(){
        console.log(this.responseText);
        //var promptErrors=JSON.parse(this.responseText);
        //console.log(this.responseText);
        console.log("Updates were Successfull");
        ItemsForm()
       // document.getElementById("formPrompt").innerText=promptErrors.formPrompt;
       
    }
    xhr.send(sendData);
}
document.getElementById("profile_name_init1").addEventListener("click", loadUsersLog);

function loadUsersLog(e) {
    console.log("Hello This loadusers has been clicked ");
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "usersList.php", true);
    xhr.onload = function() {
        if (this.status == 200) {
            console.log("Hello This loadusers function has executed");
            var users = JSON.parse(this.responseText);
            var output = '';
            for (var i = 0; i < users.length && i < 3; i++) {
                output += '<div class="media align-items-center mb-3">' +
                          '<div class="rounded-circle iq-card-icon-small bg-primary">' +
                          'A' +
                          '</div>' +
                          '<div class="media-body ml-3">' +
                          '<div class="media justify-content-between">' +
                          '<h6 class="mb-0">' +
                          users[i].f_name + " " + users[i].l_name +
                          '</h6>' +
                          '<p class="mb-0 font-size-12"><i> </i></p>' +
                          '</div>' +
                          '<p class="mb-0 font-size-12">' + users[i].email + '</p>' +
                          '</div>' +                                                 
                          '</div>';
            }
            document.getElementById("thisUsers").innerHTML = output;
            console.log(output);
        } else {
            console.log("Hello This loadusers function has not executed");
        }
    }
    xhr.send();
}
