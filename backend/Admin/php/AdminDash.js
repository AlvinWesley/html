console.log("HEllo checking JS Wald");
let sessionId = sessionStorage.getItem("sessionId");
var clickLoadStatus = false;

// window.onload = function () {
//   ItemsForm();
//   UserItems();
// };
window.addEventListener("load",()=>{
  ItemsForm();
  UserItems();
});
function UserItems() {
  console.log("Hello This loadusersRequest has been clicked");
  //let formData= new FormData();
  //formData.append("ses_id",sessionId);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "usersList.php?ses_id=" + sessionId, true);

  xhr.onload = function () {
    if (this.status == 200) {
      console.log("Hello This loadusers function has executed");
      console.log(this.responseText);
      var resultData = JSON.parse(this.responseText);
      var users=resultData["results"];
      var departments=resultData[ "departments"];
     function getinDeparts(selectedDeptId) {
       let myDept = "";
       departments.forEach(function (dept) {
         let isSelected = dept.department_id == selectedDeptId ? "selected" : "";
         myDept += `<option value="${dept.department_id}" ${isSelected}>${dept.department_name}</option>`;
       });
       return myDept;
      }
       function getAccessLevelOptions(selectedLevel) {
         let options = `
            <option value="#us_01#" ${
              selectedLevel == "#us_01#" ? "selected" : ""
            }>User</option>
            <option value="#sp_01#" ${
              selectedLevel == "#sp_01#" ? "selected" : ""
            }>Supervisor</option>
            <option value="#Adm_01#" ${
              selectedLevel == "#Adm_01#" ? "selected" : ""
            }>Administrator</option>
        `;
         return options;
       }
      var output = "";
      function regStatusDisp(status) {
        if (status == 1) {
          return '<p class="user-status" style="color:#77F877">Approved</p>';
        } else {
          return '<p class="user-status" style="color:orange">Pending</p>';
        }
      }
      var a = 0;
      users.forEach(function (user) {
        a++;
        output += `
          <tr>
            <td>${a}</td>
            <td>
              <div class="d-flex align-items-center">
                <div class="icon-small bg-danger rounded mr-3">
                  <i class="ri-file-excel-line"></i>
                </div>
              </div>
            </td>
            <td class="user-id">${user.user_id}</td>
            <td style="width:30px">${user.f_name + " " + user.l_name}</td>
            <td style="max-width:150px">${user.email}</td>
            <td style="max-width:50px">${formatDate(user.date_of_reg)}</td>
            <td>
              <form id="userDeptTbl">
              <select class="form-control control_dept" id="exampleFormControlSelect4">
                                           ${getinDeparts(user.department_id)}
                                       </select>
              </form>
              
            </td>
            <td>
             <form id="userAccessLvl">
              <select class="form-control control_lvl" id="exampleFormControlSelect5">
                                         ${getAccessLevelOptions(user.user_type)}
                                       </select>
              </form>
            </td>
            <td>${regStatusDisp(user.regStatus)}</td>
            <td>
              <div class="dropdown">
                <span class="dropdown-toggle" id="dropdownMenuButton6" data-toggle="dropdown">
                  <i class="ri-more-fill"></i>
                </span>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                  <form class="frm" >
                    <button class="dropdown-item prof u_Stats" type="button" name="submitUserEdits" ><i class="ri-eye-fill mr-2"></i>Approve</button>
                    <button class="dropdown-item u_del"  type="button"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</button>
                    <button class="dropdown-item u_updt" type="button"><i class="ri-pencil-fill mr-2 "></i>Update</button>
                    <button class="dropdown-item d_actv" type="button" ><i class="ri-printer-fill mr-2"></i>Deactivate</button>
                    </form>
                </div>
              </div>
            </td>
          </tr>`;
      });

      if (a > 0) {
        clickLoadStatus = true;
      }
      let URLIST = (document.getElementById("U_R_list"));
      if(URLIST){
      URLIST.innerHTML = output;  
      }
      
    } else {
      console.log("Hello This loadRequest function has not executed");
    }
  };

  xhr.send();
}

// document.addEventListener("click", function (event) {
//  if (event.target.classList.contains("u_updt")){
//   alert("the Update btn Clicked");
//  }else{
//     alert("NGO");
//  }
 
// });
// document.addEventListener("click",
// function(event){
// if(event.target.classList.contains("frm")){
//   alert("function updtdd found ");
// }
// });
document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("u_updt") ||
    event.target.classList.contains("u_Stats") ||
    event.target.classList.contains("d_actv") ||
    event.target.classList.contains("u_del")
  ) {
    u_Updates(
      event,
      event.target.classList.contains("u_updt")
        ? "click"
        : event.target.classList.contains("u_Stats")
        ? "submit"
        : event.target.classList.contains("d_actv")
        ? "deactivate"
        : event.target.classList.contains("u_del")
        ? "delete"
        : "err"
    );
  }
});
function u_Updates(event,input) {
  event.preventDefault(); // Prevent the default form submission
   // alert("This is the users Client side saySs: " + input);
   // var frm= event.target.classList.contains("frm") ;
    var userRow = event.target.closest("tr");
    //alert("This is the 2'nd users Client side says: " + input);
    var userId = userRow.querySelector(".user-id").textContent.trim();
    //alert("This is the 2'nd users Client side says: " + userId);
    var deptSelect = userRow.querySelector(".control_dept");
    var selectedOption = deptSelect.options[deptSelect.selectedIndex];
    var UserLevelSelect = userRow.querySelector(".control_lvl");
    var selectedLevelOption = UserLevelSelect.options[UserLevelSelect.selectedIndex];
    var level_type=selectedLevelOption.value;
    var dept_Id = selectedOption.value;
    var dept_Name = selectedOption.textContent.trim();
    var userStat = userRow.querySelector(".user-status").textContent.trim();
    var userStats;
    var newStats;
    //alert("This is the users Client side saySSSs: "+ input);
   if (userStat != "Approved" && input == "submit") {
     userStats = 0;
     newStats = 1; // Change from Pending to Approved
   } else 
   if (userStat == "Approved" && input == "submit") {
     alert("User is already approved, click deactivate to deactivate");
     return; // Exit the function if the user is already approved
   }
   else if (userStat == "Approved" && input == "deactivate"){
      userStats = 1;
      newStats = 0;
   }else if (userStat != "Approved" && input == "deactivate") {
     alert("User is already innactive, click activate to activate");
     return; // Exit the function if the user is already approved
   }else if (input === "click"||input==="delete") {
    //alert("update or delete in progress");
   } else {
     alert("OOPS WE ran into an ERROR");
     return;
   }
     var sendData =
       "submitUserEdits=" +
       input +
       "&userId=" +
       userId +
       "&userStatus=" +
       newStats +
       "&deptID=" +
       dept_Id+
       "&accessLvl="
       +level_type;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "usersList.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (this.status == 200) {
      console.log("Updates for user were successful");
      alert(this.responseText);
      // Reload the user list to reflect changes
      UserItems();
    } else {
      console.error("Failed to update user status");
    }
  };

    xhr.send(sendData);
  
  
}

function ItemsForm() {
  console.log("HEllo Wald");
  let formData= new FormData();
  formData.append("ses_id", sessionId);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "AdminFiles.php", true);
  xhr.onload = function () {
    console.log(this.responseText);
    var items = JSON.parse(this.responseText);
    console.log(items.log);
    if (items.log) {
      console.log("this Function executed");
      // setTimeout(function () {
      //   window.location.href =
      //     "/BungoArch/html/backend/php/signin/auth-sign-in.php";
      // }, 3000);
    } else {
      function formatDate(dateString) {
        const [datePart, timePart] = dateString.split(" ");
        const [year, month, day] = datePart.split("-");
        return `${year}-${month}-${day}`;
      }
      console.log("this Function did not execute");
      console.log(items.log);
      const welcomeGreetings = document.getElementById("fname");
      if(welcomeGreetings){
        welcomeGreetings.innerHTML = "Welcome " + items.f_name;
      }
      document.getElementById("profile_name_init").textContent =
        items.firstNameInit;
      document.getElementById("profile_name_init1").textContent =
        items.firstNameInit;
      document.getElementById("profile_name").textContent =
        items.f_name + " " + items.l_name;
      document.getElementById("profile_email").textContent = items.email;
    }
  };
  xhr.send(formData);
}

document
  .getElementById("profile_name_init1").addEventListener("click", loadUsersLog);

function loadUsersLog(e) {
  console.log("Hello This loadusers has been clicked ");
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "usersList.php", true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log("Hello This loadusers function has executed");
      console.log(this.responseText);
      var users = JSON.parse(this.responseText);
       var users = users["results"];
      console.log(users);
      var output = "";
      for (var i = 0; i < users.length && i < 3; i++) {
        output +=
          '<div class="media align-items-center mb-3">' +
          '<div class="rounded-circle iq-card-icon-small bg-primary">A</div>' +
          '<div class="media-body ml-3">' +
          '<div class="media justify-content-between">' +
          '<h6 class="mb-0">' +
          users[i].f_name +
          " " +
          users[i].l_name +
          "</h6>" +
          '<p class="mb-0 font-size-12"><i> </i></p>' +
          "</div>" +
          '<p class="mb-0 font-size-12">' +
          users[i].email +
          "</p>" +
          "</div>" +
          "</div>";
      }
      document.getElementById("thisUsers").innerHTML = output;
      //console.log(output);
    } else {
      console.log("Hello This loadusers function has not executed");
    }
  };
  xhr.send();
}
// const 
const Nwfldr = document.querySelector("#nfd-ct");
const  Fmdl = document.querySelector("#d-mdl-fu");
const Fldmdl = document.querySelector("#d-mdl-flda");
const FlShrmdl = document.getElementById("d-mdl-flShr");
const ShrFl = document.querySelector("#nfl-ct");
const UplFl = document.querySelector("#upload-file-upf");
const flderBtnCancel = document.querySelector("#fld-add-cancl-Btn");
const Ext = document.querySelector("#cancel");
const Upl_Fld4 = document.getElementById("upload_fl_ease");
const new_flr_4 = document.querySelector("#newFolder_e");
// d = "new_flr_2";
// id = "upl_fl_2";
// id = "shr_fl_2";
const newFldr2 = document.querySelector("#new_flr_2");
if(newFldr2){
newFldr2.addEventListener("click", () => {
  Fldmdl.showModal();
  console.log("the second newFolder2");
});
}
if(new_flr_4){
new_flr_4.addEventListener("click", () => {
  Fldmdl.showModal();
  console.log("the second newFolder2");
});
}

const newFldr3 = document.querySelector("#nw_fldr_3");
if(newFldr3){
 newFldr3.addEventListener("click", () => {
   Fldmdl.showModal();
   console.log("the third newFolder3");
 });
}
 
const Upl_Fld3 = document.querySelector("#upl_fl_3");
if(Upl_Fld3){
  Upl_Fld3.addEventListener("click", () => {
    //alert("here we go");
    Fmdl.showModal();
    loadThemFolders();
  });
}
if(Upl_Fld4){
Upl_Fld4.addEventListener("click", () => {
  //alert("here we go");
  Fmdl.showModal();
  loadThemFolders();
});
}

const Upl_Fldr2 = document.querySelector("#upl_fl_2");
if(Upl_Fldr2){
Upl_Fldr2.addEventListener("click", () => {
  //alert("here we go");
  console.log("swaeaeaw");
  Fmdl.showModal();
});
}

const Shr_Fl2=document.querySelector("#shr_fl_2");
if(Shr_Fl2){
  Shr_Fl2.addEventListener("click", () => {
  FlShrmdl.showModal();
});
}
const Shr_Fl3 = document.querySelector("#shr_fl_3");
if(Shr_Fl3){
Shr_Fl3.addEventListener("click", () => {
  FlShrmdl.showModal();
  console.log("tell me why");
});
}


ShrFl.addEventListener("click",()=>{
FlShrmdl.showModal();
 });
Nwfldr.addEventListener("click", () => {
  //alert("here we go");
  Fldmdl.showModal();
  console.log("the first newFolder1");
});
UplFl.addEventListener("click",()=>{
  //alert("here we go");
  Fmdl.showModal();
});

Ext.addEventListener("click",()=>{
Fmdl.close();
});
flderBtnCancel.addEventListener("click", () => {
  Fldmdl.close();
  fetchFolders();
});


