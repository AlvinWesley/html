console.log("HEllo checking JS Wald");
//document.getElementById("U_Details_update").addEventListener("load",ItemsForm);
window.onload=ItemsForm();
function ItemsForm(){

   console.log("HEllo Wald");
   //I shall declare xml object here
   var xhr=new XMLHttpRequest();
   xhr.open("POST","AdminFiles.php",true);
   //console.log(this.responseText);
   xhr.onload=function(){
       console.log(this.responseText);
       var items=JSON.parse(this.responseText);
       console.log(items.log);
       if(items.log){
        console.log("this Function excectued");
        setTimeout(function() {
           window.location.href = '/BungoArch/html/backend/php/signin/auth-sign-in.php';
       }, 3000);
      }else{
        function formatDate(dateString) {
            const [datePart, timePart] = dateString.split(' ');
            const [year, month, day] = datePart.split('-');
            return `${year}-${month}-${day}`;
          }
        console.log("this Function did not excecute");
        console.log(items.log);
       document.getElementById("fname").innerHTML="Welcome "+items.f_name;
    //    document.getElementById("lname").value=items.l_name;
    //    document.getElementById("uname").value=items.email;
    //    document.getElementById("cname").value=items.national_id;
    //    document.getElementById("uEmail").value=items.email;
    //    document.getElementById("Empno").value=items.employee_number;
    //    document.getElementById("email").value=items.email;
    //    document.getElementById("cno").value=items.phone_number;
       document.getElementById("profile_name_init").textContent=items.firstNameInit;
       document.getElementById("profile_name_init1").textContent=items.firstNameInit;
       document.getElementById("profile_name").textContent=items.f_name +" "+ items.l_name;
       document.getElementById("profile_email").textContent=items.email;
        //document.getElementById("dob").value=formatDate(items.date_of_birth);
    }
       
    }
   xhr.send();
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
