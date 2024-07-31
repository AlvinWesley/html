console.log("HEllo checking JS Wald");
var clickLoadStatus = false;

window.onload = function () {
  ItemsForm();
  UserItems();
};

function UserItems() {
  console.log("Hello This loadusersRequest has been clicked");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "usersList.php", true);

  xhr.onload = function () {
    if (this.status == 200) {
      console.log("Hello This loadusers function has executed");

      var users = JSON.parse(this.responseText);
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
            <td>${user.f_name + " " + user.l_name}</td>
            <td>${user.email}</td>
            <td>${user.date_of_reg}</td>
            <td>
              <form id="userDeptTbl">
                <input type="text" class="form-control" id="deptNameTbl" name="deptNameTbl" value="ICT" style="border:none; background-color:none; outline:none;">
              </form>
            </td>
            <td>${regStatusDisp(user.regStatus)}</td>
            <td>
              <div class="dropdown">
                <span class="dropdown-toggle" id="dropdownMenuButton6" data-toggle="dropdown">
                  <i class="ri-more-fill"></i>
                </span>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                  <form class="frm">
                    <button class="dropdown-item prof" type="submit" name="submitUserEdits"><i class="ri-eye-fill mr-2"></i>Approve</button>
                    <button class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</button>
                    <button class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Update</button>
                    <button class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Deactivate</button>
                  </form>
                </div>
              </div>
            </td>
          </tr>`;
      });

      if (a > 0) {
        clickLoadStatus = true;
      }
      document.getElementById("U_R_list").innerHTML = output;
    } else {
      console.log("Hello This loadRequest function has not executed");
    }
  };

  xhr.send();
}

document.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  if (event.target.classList.contains("frm")) {
    var userRow = event.target.closest("tr");
    var userId = userRow.querySelector(".user-id").textContent.trim();
    var userStat = userRow.querySelector(".user-status").textContent.trim();
    var userStats;
    var newStats;

    if (userStat === "Approved") {
      userStats = 1;
      newStats = 0; // Change from Approved to Pending
    } else {
      userStats = 0;
      newStats = 1; // Change from Pending to Approved
    }

    // alert(
    //   `The Button Has been clicked for user_id: ${userId} and status of the user is: ${userStats}. The New Status will be ${newStats}`
    // );

    var sendData = "submitUserEdits=Submit"+"&userId=" + userId + "&userStatus=" + newStats;
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
});


function ItemsForm() {
  console.log("HEllo Wald");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "AdminFiles.php", true);
  xhr.onload = function () {
    console.log(this.responseText);
    var items = JSON.parse(this.responseText);
    console.log(items.log);
    if (items.log) {
      console.log("this Function executed");
      setTimeout(function () {
        window.location.href =
          "/BungoArch/html/backend/php/signin/auth-sign-in.php";
      }, 3000);
    } else {
      function formatDate(dateString) {
        const [datePart, timePart] = dateString.split(" ");
        const [year, month, day] = datePart.split("-");
        return `${year}-${month}-${day}`;
      }
      console.log("this Function did not execute");
      console.log(items.log);
      document.getElementById("fname").innerHTML = "Welcome " + items.f_name;
      document.getElementById("profile_name_init").textContent =
        items.firstNameInit;
      document.getElementById("profile_name_init1").textContent =
        items.firstNameInit;
      document.getElementById("profile_name").textContent =
        items.f_name + " " + items.l_name;
      document.getElementById("profile_email").textContent = items.email;
    }
  };
  xhr.send();
}

document
  .getElementById("profile_name_init1")
  .addEventListener("click", loadUsersLog);

function loadUsersLog(e) {
  console.log("Hello This loadusers has been clicked ");
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "usersList.php", true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log("Hello This loadusers function has executed");
      var users = JSON.parse(this.responseText);
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
