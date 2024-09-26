const fileShareDialog = document.querySelector(".flShrDiag");
const addFiles = document.getElementById("add_file_btn");
const addUsers = document.getElementById("add_user_btn");
const userSelectDialog = document.querySelector(".userDialog");
const fileSelectDialog = document.querySelector(".fileDialog");
const closeFileDialog = document.getElementById("cls_fl_dg");
const closeUserDialog = document.getElementById("cls_usr_dg");
const chooseFiles = document.getElementById("files_chosen");
const chooseUsers = document.getElementById("users_chosen");
const userItem = document.querySelector(".users_box");
const fileItem=document.querySelector(".file_box");
const confirmShare=document.querySelector(".shr_files");
const clearSelection= document.querySelector(".clr_selection");
const closeShrDialog= document.querySelector(".cls_shr_diag");
const shrtxtBx = document.querySelector(".text_Box");
const containersThem = document.querySelector(".filesSharedPromt");
let sessionId = sessionStorage.getItem("sessionId");
var theUsers=``;
var theFiles=``;
let filesSelect = []; // Array to store selected files
let usersSelect = []; // Array to store selected users
closeShrDialog.addEventListener("click",()=>{
//console.log("closing the Dialog now");
fileShareDialog.close();
});

function updateNoOfFiles(){
  var noOfFiles = filesSelect.length;
  document.getElementById("fl_cnt").innerHTML=`Files Selected(${noOfFiles})`;
}
function updateNoOfUsers() {
  var noOfUsers = usersSelect.length;
  document.getElementById("usr_cnt").innerHTML = ` Recipients (${noOfUsers})`;
}
shrtxtBx.innerHTML = `<h3 id="shr_prmt">Send Files to other Users</h3>`;
fileItem.innerHTML = `<p style="color:grey">There are no selected files. Click add to Add Files</p>`;
userItem.innerHTML=`<p style="color:grey">There are no selected recipients. Click add users to add users</p>`;

//The three buttons Actions are here not down there dont bother looking too much tho😂
clearSelection.addEventListener("click",clearTheArrays);
function clearTheArrays(){
const userCheckboxes = userList.getElementsByClassName("userCheckbox");
const fileCheckboxes = document.querySelectorAll(".fileCheckbox");
filesSelect = [];
fileItem.innerHTML = `<p style="color:grey">There are no selected files. Click add to Add Files</p>`;
userItem.innerHTML = `<p style="color:grey">There are no selected recipients. Click add users to add users</p>`;
usersSelect = ``;
//console.log(filesSelect);
usersSelect = [];
Array.from(userCheckboxes).forEach((checkbox) => (checkbox.checked = false));
updateSelectedCount();
fileCheckboxes.forEach((checkbox) => (checkbox.checked = false));
updateFileSummary();
updateNoOfFiles();
updateNoOfUsers();
}
chooseFiles.addEventListener("click", listTheItems);
 function listTheItems() {
   theFiles = ``;
   filesSelect.forEach((element) => {
     //console.log(element);
     theFiles += `
    <div class="file_item" id="${element.FileId}">
                    ${element.FileName}
                </div>
    `;
   });
   fileItem.innerHTML = theFiles;
   if (filesSelect.length === 0) {
     fileItem.innerHTML = `<p style="color:grey">There are no selected files. Click add to Add Files</p>`;
   }
   fileSelectDialog.close();
   updateNoOfFiles();
 }
addEventListener("dblclick",function(event){
  if(event.target.classList.contains("file_item")){
  const t_f_clck = event.target.closest(".file_item").id;
  let index=filesSelect.findIndex(file=>file.FileId===t_f_clck);//getting the index here ,,nothing fishy about that😁
  filesSelect.splice(index, 1);
  listTheItems();
  updateNoOfFiles();
  console.log(filesSelect);
  console.log(t_f_clck);
}
}
);
addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("file_item")) {
  shrtxtBx.innerHTML = `<h3 id="shr_prmt" style="color:cyan">Double click to remove item</h3>`;
  }
});
addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("file_item")) {
  shrtxtBx.innerHTML = `<h3 id="shr_prmt">Send Files to other Users</h3>`;
  }
});

chooseUsers.addEventListener("click", listTheUsers);
  //console.log("Selected Users:");
  function listTheUsers(){
      theUsers=``;
  usersSelect.forEach((element) => {
    console.log(element);
     theUsers += `
    <div class="user_item" id="${element.UserID}">
                    <div class="user_avator">
                        ${element.UserInits}
                    </div>
                    <div class="user_Name">
                       ${element.UserName}
                    </div>
                </div> 
    `;
  });
  userItem.innerHTML = theUsers;
   if (usersSelect.length === 0) {
     userItem.innerHTML = `<p style="color:grey">There are no selected recipients. Click add users to add users</p>`;
   }
  userSelectDialog.close();
  updateNoOfUsers();
  }
addEventListener("dblclick", function (event) {
  if (event.target.closest(".user_item")) {
    const t_f_clck = event.target.closest(".user_item").id;
    console.log(t_f_clck);
    let index = usersSelect.findIndex((file) => file.UserID === t_f_clck); //getting the index here ,,nothing fishy about that😁
    usersSelect.splice(index, 1);
    listTheUsers();
    updateNoOfUsers();
    console.log(usersSelect);
    
  }
});
addEventListener("mouseover", function (event) {
  if (event.target.closest(".user_item")) {
    shrtxtBx.innerHTML = `<h3 id="shr_prmt" style="color:cyan">Double click to remove user</h3>`;
  }
});
addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("user_item")) {
    shrtxtBx.innerHTML = `<h3 id="shr_prmt">Send Files to other Users</h3>`;
  }
});


closeFileDialog.addEventListener("click", () => {
  fileSelectDialog.close();
});

closeUserDialog.addEventListener("click", () => {
  userSelectDialog.close();
});

// Assuming addUsers and usersSelect are already declared earlier in the code
// let addUsers = document.getElementById("addUsers");
// let usersSelect = []; // Already declared initially

const searchInput1 = document.getElementById("userSearch");
const userList = document.getElementById("userList");
const userNotFound = document.getElementById("userNotFound");
const selectedCount = document.getElementById("selectedCount");

// Function to fetch and display users
function fetchAndDisplayUsers() {
  let theListOfUsers = ``;
  let xhrfs = new XMLHttpRequest();
  xhrfs.open("GET", "/BUNGOARCH/html/fileSharing/php/fetchUsers.php?ses_id=" + sessionId, true);
  xhrfs.onload = function () {
    if (xhrfs.status === 200) {
      let accumulatedUsers = JSON.parse(this.responseText);
      accumulatedUsers.forEach((UsersEl) => {
        theListOfUsers += `
         <div class="userBox" 
                data-Username="${UsersEl.f_name + " " + UsersEl.l_name}"
                data-Initials="${UsersEl.f_name[0]+UsersEl.l_name[0]}"
                data-UserId="${UsersEl.user_id}"
                data-UserEmail="${UsersEl.email}"
                data-UserAccessLevel="1">
                    <input type="checkbox" class="userCheckbox">
                    <div class="userAvatar">👤</div>
                    <div class="userDetails">
                        <p class="userName">${UsersEl.f_name + " " + UsersEl.l_name}</p>
                        <p class="userEmail">${UsersEl.email}</p>
                    </div>
                </div>
        `;
      });
      userList.innerHTML = theListOfUsers;
      addCheckboxListeners(); // Add event listeners after users are displayed
    }
  };
  xhrfs.send();
}

// Debounce function to limit search trigger rate
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// Highlight matched text
function highlightMatch(text, query) {
  const regExp = new RegExp(`(${query})`, "gi");
  return text.replace(regExp, '<span class="highlight">$1</span>');
}

// Search users and highlight matched text
function searchUsers() {
  const filter = searchInput1.value.toLowerCase();
  let foundAny = false;
  const userBoxes = userList.getElementsByClassName("userBox");

  // Loop through all userBox items
  Array.from(userBoxes).forEach((userBox) => {
    const userNameElement = userBox.querySelector(".userName");
    const userEmailElement = userBox.querySelector(".userEmail");
    const userName = userNameElement.textContent.toLowerCase();
    const userEmail = userEmailElement.textContent.toLowerCase();

    if (userName.includes(filter) || userEmail.includes(filter)) {
      userBox.style.display = "";
      foundAny = true;
      userNameElement.innerHTML = highlightMatch(
        userNameElement.textContent,
        filter
      );
      userEmailElement.innerHTML = highlightMatch(
        userEmailElement.textContent,
        filter
      );
    } else {
      userBox.style.display = "none";
    }
  });

  userNotFound.style.display = foundAny ? "none" : "block";
}

// Debounce the search function
const debouncedSearch = debounce(searchUsers, 300);
searchInput1.addEventListener("input", debouncedSearch);

// Update selected user count
function updateSelectedCount() {
  const userCheckboxes = userList.getElementsByClassName("userCheckbox");

  usersSelect = []; // Reset the array each time we recalculate
  Array.from(userCheckboxes).forEach((checkbox) => {
    const userBox = checkbox.closest(".userBox");
    const userName = userBox.getAttribute("data-Username");
     const userInits = userBox.getAttribute("data-Initials");
    const userId = userBox.getAttribute("data-UserId");
    const userEmail = userBox.getAttribute("data-UserEmail");
    const userAccessLevel = userBox.getAttribute("data-UserAccessLevel");

    if (checkbox.checked) {
      // Check if the user is already in the array
      if (
        !usersSelect.some(
          (user) =>
            user.UserName === userName &&
            user.UserID === userId &&
            user.UserEmail === userEmail &&
            user.UserAccessLevel === userAccessLevel &&
            user.UserInits === userInits
        )
      ) {
        usersSelect.push({
          UserName: userName,
          UserID: userId,
          UserEmail: userEmail,
          UserAccessLevel: userAccessLevel,
          UserInits: userInits
        });
      }
    }
  });

  selectedCount.textContent = `${usersSelect.length} users selected`;
}

// Add change event listeners to dynamically added checkboxes
function addCheckboxListeners() {
  const userCheckboxes = userList.getElementsByClassName("userCheckbox");

  Array.from(userCheckboxes).forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelectedCount);
  });
}

// Select all users
document.querySelector(".selectAllBtn").addEventListener("click", () => {
  const userCheckboxes = userList.getElementsByClassName("userCheckbox");
  Array.from(userCheckboxes).forEach((checkbox) => (checkbox.checked = true));
  updateSelectedCount();
});

// Clear all selected users
document.querySelector(".clearBtn").addEventListener("click", () => {
  const userCheckboxes = userList.getElementsByClassName("userCheckbox");
  Array.from(userCheckboxes).forEach((checkbox) => (checkbox.checked = false));
  userItem.innerHTML = `<p style="color:grey">There are no selected recipients. Click add users to add users</p>`;
  usersSelect = []; // Clear selected users array
  //console.log(usersSelect);
  updateSelectedCount();
});

// Trigger fetching users when the addUsers button is clicked
addUsers.addEventListener("click", () => {
  fetchAndDisplayUsers();
  userSelectDialog.showModal();
});

// File Sharing Section
const searchInput = document.getElementById("searchInput");
const fl_lst = document.getElementById("fl_lst");
const sortSelect = document.getElementById("sort");
const selectAllBtn = document.getElementById("selectAllBtn");
const clearBtn = document.getElementById("clearBtn");
const fileCount = document.getElementById("fileCount");
const fileSize = document.getElementById("fileSize");
// Format file size to a readable format (e.g., MB, GB)
function formatFileSize(sizeInBytes) {
  if (sizeInBytes >= 1e9) return (sizeInBytes / 1e9).toFixed(2) + ' GB';
  if (sizeInBytes >= 1e6) return (sizeInBytes / 1e6).toFixed(2) + ' MB';
  if (sizeInBytes >= 1e3) return (sizeInBytes / 1e3).toFixed(2) + ' KB';
  return sizeInBytes + ' Bytes';
}

// Get files available for the user from the database
addFiles.addEventListener("click", () => {
  fileSelectDialog.showModal();

  let xhrfs = new XMLHttpRequest();
  xhrfs.open("GET", "/BUNGOARCH/html/fileSharing/php/fetchFiles.php?ses_id=" + sessionId, true);

  xhrfs.onload = function () {
    if (this.status == 200) {
      //console.log("The files loaded");
      let resultFilesLoad = JSON.parse(this.responseText);
      let fileLoadText = ``;

      // Loop through the files and build the file list
      resultFilesLoad.forEach((fileEl) => {
        const isChecked = filesSelect.some(file => file.FileName === fileEl.file_name && file.Size === fileEl.file_size);
        fileLoadText += `
          <div class="fileBox" data-name="${fileEl.file_name}"
                        data-size="${fileEl.file_size}" 
                        data-date="${fileEl.date_of_upload}"
                        data-fileId="${fileEl.file_id}"
                        data-filedir="${fileEl.file_path_directory}"
                        data-pseudoName="${fileEl.file_pseudo_name}"
                        data-filetype="${fileEl.file_type}"
                        data-fileExt="${fileEl.file_extension}"
                        data-uploaderId="${fileEl.uploader_id}"
                        >
              <input type="checkbox" class="fileCheckbox" ${
                isChecked ? "checked" : ""
              }>
              <div class="fileIcon">📁</div>
              <div class="fileDetails">
                  <p class="fileName">${fileEl.file_name}</p>
                  <p class="fileSize">${formatFileSize(fileEl.file_size)}</p>
              </div>
          </div>
        `;
      });
      //console.log(fileLoadText);
      fl_lst.innerHTML = fileLoadText;

      // Re-query the checkboxes after loading files
      updateFileCheckboxListeners();
      updateFileSummary();
    } else {
      //console.log("Error fetching files");
    }
  };

  xhrfs.send();
});

// Re-query checkboxes and add event listeners after files are loaded
function updateFileCheckboxListeners() {
  const fileCheckboxes = document.querySelectorAll(".fileCheckbox");

  fileCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateFileSummary);
  });
}

// Update the number of files selected and their total size
function updateFileSummary() {
  const fileCheckboxes = document.querySelectorAll(".fileCheckbox"); // Re-query checkboxes dynamically
  let totalSize = 0;
  filesSelect = [];
  fileCheckboxes.forEach((checkbox) => {
    const fileBox = checkbox.closest(".fileBox");
    const fileName = fileBox.getAttribute("data-name");
    const fileIdd = fileBox.getAttribute("data-fileId");
    const filePath = fileBox.getAttribute("data-filedir");
    const size = parseFloat(fileBox.getAttribute("data-size"));
    const file_pseudo_name = fileBox.getAttribute("data-pseudoName");
    const file_type=fileBox.getAttribute("data-filetype");
    const fileExtension=fileBox.getAttribute("data-fileExt");
    const uploader_id=fileBox.getAttribute("data-uploaderId");

    if (checkbox.checked) {
      // Add the file if it isn't already included
      if (!filesSelect.some((file) => file.FileName === fileName && 
                                      file.Size === size &&
                                      file.FileDir=== filePath && 
                                      file.FileId===fileIdd&&
                                      file.PseudoName===file_pseudo_name &&
                                      file.FileType===file_type &&
                                      file.FileExt===fileExtension &&
                                      file.UploaderId===uploader_id
                                      ))
        {
        filesSelect.push({FileName: fileName,//
                          Size: size,//
                          FileDir:filePath,//
                          FileId:fileIdd ,//Not Neededd
                          PseudoName:file_pseudo_name,//
                          FileType:file_type,//
                          FileExt:fileExtension,//
                          UploaderId:uploader_id
                        });
        }
       totalSize+=size; 
      }
      
  });

  fileCount.textContent = `${filesSelect.length} Files Selected`;
  fileSize.textContent = `Total Size: ${formatFileSize(totalSize)}`;
  //console.log(filesSelect);
  //fileSize.textContent = `Total Size: ${totalSize}`;
}

// Search and highlight files
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const fileBoxes = document.querySelectorAll(".fileBox");

  fileBoxes.forEach((fileBox) => {
    const fileName = fileBox.getAttribute("data-name").toLowerCase();
    const fileNameElement = fileBox.querySelector(".fileName");

    if (fileName.includes(query)) {
      fileBox.style.display = "flex";
      const regex = new RegExp(`(${query})`, "gi");
      fileNameElement.innerHTML = fileNameElement.innerText.replace(regex, '<span class="highlight">$1</span>');
    } else {
      fileBox.style.display = "none";
    }
  });
});

// Sort files
sortSelect.addEventListener("change", () => {
  const option = sortSelect.value;
  const fileBoxes = Array.from(document.querySelectorAll(".fileBox"));

  let sortedFiles;
  if (option === "A-Z") {
    sortedFiles = fileBoxes.sort((a, b) => a.getAttribute("data-name").localeCompare(b.getAttribute("data-name")));
  } else if (option === "Z-A") {
    sortedFiles = fileBoxes.sort((a, b) => b.getAttribute("data-name").localeCompare(a.getAttribute("data-name")));
  } else if (option === "size") {
    sortedFiles = fileBoxes.sort((a, b) => parseFloat(a.getAttribute("data-size")) - parseFloat(b.getAttribute("data-size")));
  } else if (option === "date") {
    sortedFiles = fileBoxes.sort((a, b) => new Date(a.getAttribute("data-date")) - new Date(b.getAttribute("data-date")));
  }

  fl_lst.innerHTML = "";
  sortedFiles.forEach((fileBox) => fl_lst.appendChild(fileBox));
});

// Select all files
selectAllBtn.addEventListener("click", () => {
  const fileCheckboxes = document.querySelectorAll(".fileCheckbox"); // Re-query checkboxes dynamically
  fileCheckboxes.forEach((checkbox) => (checkbox.checked = true));
  updateFileSummary();
});

// Clear all files
clearBtn.addEventListener("click", () => {
  const fileCheckboxes = document.querySelectorAll(".fileCheckbox"); // Re-query checkboxes dynamically
  fileCheckboxes.forEach((checkbox) => (checkbox.checked = false));
  filesSelect = [];
  fileCount.textContent = "0 Files Selected";
  fileSize.textContent = "Total Size: 0 GB";
});

//Nop were not yet done with everything were can now send the selected filed to users frome here now 
//first check if the arrays have something before you continue ok
function splitDir(dir){
 let firstSlashIndex = dir.indexOf("/");
 let result = dir.substring(firstSlashIndex);
  return result
}
function formatUserName(userName){
  return userName.replace(/\s+/g, "").toUpperCase();
}
confirmShare.addEventListener("click", () => {
  //console.log(filesSelect.length);
  //console.log(usersSelect.length);
 ItemsForm();
 UserItems();
  // If both filesSelect and usersSelect have at least one item, run the else block
  if (filesSelect.length === 0 || usersSelect.length === 0) {
    shrtxtBx.innerHTML = `<h3 id="shr_prmt" style="color:orange">You've got to send at least one file to one user</h3>`;
   
    //console.log(filesSelect);
    //console.log(usersSelect);
  } else {
    shrtxtBx.innerHTML = `<h3 id="shr_prmt" style="color:white">Sharing Files Please Wait ....</h3>`;
    let formData = new FormData();

    // Append all users and their files to formData in a structured manner
    usersSelect.forEach((user, userIndex) => {
      filesSelect.forEach((file, fileIndex) => {
        // Group user and file data in a structured way
        formData.append(`users[${userIndex}][recipient_id]`, user.UserID);
        formData.append(`users[${userIndex}][recipient_Inits]`, user.UserInits);
        formData.append(
          `users[${userIndex}][receiver]`,
          formatUserName(user.UserName)
        );
        formData.append(
          `users[${userIndex}][files][${fileIndex}][filePseudoName]`,
          file.PseudoName
        );
        formData.append(
          `users[${userIndex}][files][${fileIndex}][fileName]`,
          file.FileName
        );
         formData.append(
           `users[${userIndex}][files][${fileIndex}][fileSize]`,
           file.Size
         );
         formData.append(
           `users[${userIndex}][files][${fileIndex}][fileType]`,
           file.FileType
         );
         formData.append(
           `users[${userIndex}][files][${fileIndex}][fileExtension]`,
           file.FileExt
         );
         formData.append(
           `users[${userIndex}][files][${fileIndex}][uploaderId]`,
           file.UploaderId
         );
        formData.append(
          `users[${userIndex}][files][${fileIndex}][dir]`,
          splitDir(file.FileDir)
        );
        // For debugging/logging purposes
        console.log(
          `Sending file ${file.FileName} (Pseudo: ${file.PseudoName}) to user ${user.UserName} (${user.UserID})`
        );
      });
    });
    let comments =document.getElementById("fl_shr_desc").value;
    formData.append("senderComments",comments);
    formData.append("ses_id",sessionId);
    // Create and send the XMLHttpRequest
    let xhrfs = new XMLHttpRequest();
    xhrfs.open("POST", "/BUNGOARCH/html/fileSharing/php/shareFiles.php", true);

    // Handle the response
    xhrfs.onload = function () {
      if (xhrfs.status === 200) {
       // console.log("Transfer successful");
        ItemsForm();
        UserItems();
        containersThem.showModal();
        containersThem.innerHTML = `<p style="color:white; font-size: 14px;">${xhrfs.responseText}</p>`;
         setTimeout(() => {
           containersThem.close();
           shrtxtBx.innerHTML = `<h3 id="shr_prmt">Files Sent Succesfully...</h3>`;
           clearTheArrays();
         }, 3000);
        console.log(xhrfs.responseText); // Success response from PHP
      } else {
        console.error("Error: " + xhrfs.responseText); // Error response
      }
    };

    // Send formData
    xhrfs.send(formData);

  }
});

