function formatDate(dateTimeString) {
  // Create a Date object from the input string
  const dateObj = new Date(dateTimeString);
  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Extract the day, month, and year from the Date object
  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  // Format the date as 'DD-MMM-YYYY'
  return `${day}-${month}-${year}`;
}
window.addEventListener("load", fetchFolders);
function fetchFolders() {
  //e.preventDefault();
  const fldrDisp = document.querySelector(".FolderItemsWrapper");
  fldrDisp.innerHTML = "";
  let items = "";
  var xhrr = new XMLHttpRequest();
  xhrr.open(
    "GET",
    "/BUNGOARCH/html/FileUpload/fl3Mee/upload.php?ses_id=" + sessionId,
    true
  );
  xhrr.onload = function () {
    if (this.status == 200) {
      console.log("Hello This loadFolders function has executed");
      console.log(this.responseText);
      var resultDataArr = JSON.parse(this.responseText);
      if (resultDataArr.length === 0) {
        items = `
        <div style="min-height:2cm; 
                                width:100%; 
                                padding:20px;
                                background:#5E8A8B ;
                                color:#fff;
                                font-weight:600;
                                border-radius:10px; 
                                display:flex;
                                flex-direction:column;
                                justify-content:center;
                                align-items:center;">
                                <h4 style="color:#fff">Your Folders Shall Appear Here</h4>
                                <h5 style="color:#fff">You dont have any folders at the moment click
                                 <a class="browser_files" style="color:#3B356E; cursor:pointer;text-decoration:underline">Add Folder(s)</a>
                                   to Upload Files</h5>
                                </div>
        `;
      } else {
        console.log(resultDataArr);
        resultDataArr.forEach(function (folder) {
          items += `
    <div class="col-md-6 col-sm-6 col-lg-3">
                        <div class="card card-block card-stretch card-height themFlders" id="folder-${
                          folder.folder_id
                        }">
                            <div class="card-body">                            
                                    <div class="d-flex justify-content-between">
                                        <a class="folder">
                                            <div class="icon-small rounded mb-4"style="background:${
                                              folder.backgroundColor
                                            }">
                                                <i class="ri-file-copy-line" style="color:white"></i>
                                            </div>
                                        </a>
                                        <div class="card-header-toolbar">
                                            <div class="dropdown">
                                                <span class="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown">
                                                    <i class="ri-more-2-fill"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item" class="folder"><i class="ri-eye-fill mr-2"></i>View</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="folder">
                                        <h5 class="mb-2">${
                                          folder.folderName
                                        }</h5>
                                        <p class="mb-2"><i class="lar la-clock text-danger mr-2 font-size-20"></i> ${formatDate(
                                          folder.dateCreated
                                        )}</p>
                                        <p class="mb-0"><i class="las la-file-alt text-danger mr-2 font-size-20"></i> ${
                                          folder.file_count
                                        } Files</p>
                                    </a>
                            </div>
                        </div>
                    </div>
                    
  `;
       

});
      }
      fldrDisp.innerHTML = items;
    }
  };
  xhrr.send();
}


document.getElementById("addButton").addEventListener("click", function () {
  fetchFolders();
  const folderNameInput = document.getElementById("folderName");
  const folderName = folderNameInput.value.trim();
  const bgColor = document.querySelector("#folderColor").value;
  const messageBox = document.getElementById("message-box");

  // Validation Rules
  // const invalidCharacters = /[^a-zA-Z0-9_-]/;
  const invalidCharacters = /[^a-zA-Z0-9_ -]/;
  const reservedWords = ["con", "nul", "aux", "prn", "com1", "lpt1"]; // Add more if needed
  const maxLength = 50;

  if (folderName === "") {
    displayMessage("Folder name cannot be empty.", "error");
  } else if (invalidCharacters.test(folderName)) {
    displayMessage(
      "Folder name contains invalid characters. Only letters, numbers, underscores, and dashes are allowed.",
      "error"
    );
  } else if (reservedWords.includes(folderName.toLowerCase())) {
    displayMessage(
      "Folder name is a reserved word and cannot be used.",
      "error"
    );
  } else if (folderName.length > maxLength) {
    displayMessage(
      `Folder name is too long. Maximum ${maxLength} characters allowed.`,
      "error"
    );
  } else {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("folderName", folderName);
    formData.append("folder-clr", bgColor);
    formData.append("ses_id",sessionId);
    xhr.open("POST", "/BUNGOARCH/html/FileUpload/fl3Mee/upload.php", true);

    // Handle the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Response: " + xhr.responseText);
        displayMessage("Folder added successfully!", "success");
      } else {
        console.log("Error: " + xhr.status);
        displayMessage("Error adding folder.", "error");
      }
    };

    xhr.send(formData);
    console.log("Folder: " + folderName + " Color: " + bgColor);

    // Handle adding the folder logic here

    console.log("Folder added:", folderName);
    //console.log(this.responseText);
    //console.log(items);
    folderNameInput.value = "";
  }

  fetchFolders();
});

document
  .getElementById("fld-add-cancl-Btn")
  .addEventListener("click", function () {
    document.getElementById("folderName").value = "";
    hideMessage();
    fetchFolders();
  });

function displayMessage(message, type) {
  const messageBox = document.getElementById("message-box");
  fetchFolders();
  messageBox.textContent = message;
  messageBox.className = `show ${type}`;
  messageBox.style.visibility = "visible";

  setTimeout(() => {
    hideMessage();
  }, 3000);
}

function hideMessage() {
  const messageBox = document.getElementById("message-box");
  messageBox.classList.remove("show");

  setTimeout(() => {
    messageBox.style.visibility = "hidden";
    messageBox.className = "";
  }, 3000);
}
// document.addEventListener("click", (e) => {
//   e.target.classList.contains("folder");
//   alert("this Item Selected has an id of ");
//   console.log("THIS IS CLICKED MOFO");
// });
 function getFileActions(fal) {
   if (fal === "1") {
     return `
            <button class="action-btn delete">Delete</button>
            <button class="action-btn download">Download</button>
            <button class="action-btn share">Share</button>
            <button class="action-btn move">Move</button>
            `;
   } else if (fal === "2") {
     return `
            <button class="action-btn delete">Delete</button>
            <button class="action-btn download">Download</button>
            <button class="action-btn move">Move</button>
            `;
   }else{
    return `
            <button class="action-btn move">Move</button>
            `;
   }
 }
function frmatSize(sz) {
  return sz >= 1024 * 1024
    ? (sz / (1024 * 1024)).toFixed(2) + " MB" // Divide by 1024 * 1024 for MB
    : (sz / 1024).toFixed(2) + " KB"; // Divide by 1024 for KB
}

 const shwFlrDiag = document.getElementById("d-mdl-fldV");
 const clsFldrVw = document.getElementById("closeDialog");
 clsFldrVw.addEventListener("click",()=>{
shwFlrDiag.close();
 });
 const getItemsFromFldr = document.querySelector(".file-row-disp");
document.addEventListener("dblclick",
function(event){
  const card = event.target.closest(".themFlders").id;
  shwFlrDiag.showModal();
if (event.target.closest(".folder")) {
  let folderId = card.split("-")[1];
  //alert("folder found :"+folderId);
  let xhrf=new XMLHttpRequest();
  let formData = new FormData();
  formData.append("folder_id", folderId);
  xhrf.open(
    "POST",
    "/BUNGOARCH/html/folders/viewFolders/GetFolders.php",
    true
  );
   xhrf.onload = function () {
     if (xhrf.status === 200) {
       //console.log("Response: " + xhrf.responseText);
       let theSelectedFolder = JSON.parse(xhrf.responseText);
       let dispTheSelected =``;
      
       theSelectedFolder.forEach(fileItem => {
        console.log(fileItem.file_name);
        
        dispTheSelected += `
                             <div class="file-row">
                              <div class="file-icon"><i class="fas fa-file"></i></div>
                              <div class="file-name">${fileItem.file_name}</div>
                              <div class="file-date">${fileItem.date_of_upload}</div>
                              <div class="file-size">${frmatSize(fileItem.file_size)}</div>
                              <div class="file-uploaded-by">${fileItem.uploader_id}</div>
                              <div class="file-actions">
                                  ${getFileActions(fileItem.file_access_level)}
                              </div>
                          </div>
        `;
       });
       getItemsFromFldr.innerHTML=dispTheSelected;
       //displayMessage("Folder items Loaded!", "success");
     } else {
       console.log("Error: " + xhrf.status);
       console.log("error while Sending the data");
       //displayMessage("Error adding folder.", "error");
     }
   };

   xhrf.send(formData);
  
}
// else{
//   alert("not Found");
// }
});
// const UploadFiless = document.querySelector("#sbmt_file");
// UploadFiless.addEventListener("click", fetchFolders);