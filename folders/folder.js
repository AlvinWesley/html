document.getElementById("addButton").addEventListener("click", function () {
  const folderNameInput = document.getElementById("folderName");
  const folderName = folderNameInput.value.trim();
  const bgColor = document.querySelector("#folderColor").value;
  const fldrDisp = document.querySelector(".FolderItemsWrapper");
  let items='';
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
  } 
  else {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("folderName", folderName);
    formData.append("folder-clr", bgColor);
    xhr.open("POST", "/BUNGOARCH/html/FileUpload/fl3Mee/upload2.php", true);
    
    // Handle the response
    xhr.onload = function() {
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
    items =  `
   <div class="col-md-6 col-sm-6 col-lg-3">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">                            
                                    <div class="d-flex justify-content-between">
                                        <a href="./page-alexa.html" class="folder">
                                            <div class="icon-small rounded mb-4"style="background:${bgColor}">
                                                <i class="ri-file-copy-line" style="color:white"></i>
                                            </div>
                                        </a>
                                        <div class="card-header-toolbar">
                                            <div class="dropdown">
                                                <span class="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown">
                                                    <i class="ri-more-2-fill"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="./page-alexa.html" class="folder">
                                        <h5 class="mb-2">${folderName}</h5>
                                        <p class="mb-2"><i class="lar la-clock text-danger mr-2 font-size-20"></i> 10 Dec, 2020</p>
                                        <p class="mb-0"><i class="las la-file-alt text-danger mr-2 font-size-20"></i> 08 Files</p>
                                    </a>
                            </div>
                        </div>
                    </div>
  `;
  
    console.log("Folder added:", folderName);
    console.log(this.responseText);
    //console.log(items);
    folderNameInput.value = "";  
  }
fldrDisp.innerHTML += items;

});

document.getElementById("fld-add-cancl-Btn").addEventListener("click", function () {
  document.getElementById("folderName").value = "";
  hideMessage();
});

function displayMessage(message, type) {
  const messageBox = document.getElementById("message-box");
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


