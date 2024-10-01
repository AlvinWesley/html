const fileBrowserButton = document.querySelector(".file-browse-button");
const fileAddBtn = document.querySelector("#add_file");
const fileBrowserInput = document.querySelector(".file-browse-input");
const fileUploadBox = document.querySelector(".file-upload-box");
const fileList=document.querySelector(".file-list")
const fileInstruction = document.querySelector(".file-instruction");
const fileCompletedProg = document.querySelector(".file-completed-status");
const UploadFiles = document.querySelector("#sbmt_file");
const clearFiles = document.querySelector("#clr");
const addFilesBtn = document.querySelector("#addButton");
function trimName(name) {
  if (name.length > 15) {
    return name.substring(0, 15) + "...";
  }
  return name;
}
//let sessionId = sessionStorage.getItem("sessionId");
addFilesBtn.addEventListener("click",()=>{
  loadThemFolders();
});
let totalFiles=0;
let completed=0;
let myFolders = "";
// function getinFolders(selectedFolderId) {
//   let myDept = "";
//   departments.forEach(function (folder) {
//     let isSelected = folder.folder_id == selectedFolderId ? "selected" : "";
//     myDept += `<option value="${folder.folder_id}" ${isSelected}>${folder.FolderName}</option>`;
//   });
//   return myDept;
// }
window.addEventListener("load",()=>{
 loadThemFolders();
 LoadThemFiles();
 loadThemFolders();
});
function loadThemFolders(){
  myFolders="";
  let thisTempFlder="";
var xhrr = new XMLHttpRequest();
xhrr.open("GET", "/BUNGOARCH/html/FileUpload/fl3Mee/upload.php?ses_id="+sessionId, true);
xhrr.onload = function () {
  if (this.status == 200) {
    console.log("Hello This loadFolders for each File function has executed");
    const resultDataArr = JSON.parse(this.responseText);
    resultDataArr.forEach(function (folder) {
      thisTempFlder += `<option value="${folder.folder_id}">${folder.folderName}</option>`;
    });
    myFolders=thisTempFlder;
    console.log(myFolders);
  }
};
xhrr.send();

};
function checkFileAccessLvl(fal){
  let dispActions=``;
  if(fal==='1'){
dispActions = `
                                <a class="dropdown-item download2" style="cursor:pointer" >
                                <i class="fas fa-download mr-2 download2" style="color:rgb(117, 70, 99)"></i> 
                              </a>        
                                <a class="dropdown-item "style="cursor:pointer" >
                                <i class="fas fa-share-alt mr-2"style="color:rgb(41, 101, 124)"></i> 
                              </a> 
`;
  }else{
dispActions = `
                              <a class="dropdown-item download2"style="cursor:pointer">
                                <i class="fas fa-download mr-2 download2" style="color:rgb(117, 70, 99)"></i> 
                              </a>        
`;
  }
  return dispActions;
}
function LoadThemFiles(){
   loadThemFolders();
  console.log("here Comes the Files");
  const fileDisp = document.querySelector(".FilesItemsWrapper");
  let xhrf = new XMLHttpRequest();
  let dispFiles = ``;
  xhrf.open("GET", "/BUNGOARCH/html/FileUpload/fl3Mee/handleFiles.php?ses_id="+sessionId, true);
  xhrf.onload = function () {
    if (this.status == 200) {
      console.log("Hello This loadFiles function has executed");
      console.log(xhrf.responseText);
      var resultDataArr2 = JSON.parse(this.responseText);
      if(resultDataArr2.length===0){
        dispFiles = `<div style="min-height:2cm; 
                                width:100%; 
                                padding:20px;
                                background:#CFCCCCD2 ;
                                color:#fff;
                                font-weight:600;
                                border-radius:10px; 
                                display:flex;
                                flex-direction:column;
                                justify-content:center;
                                align-items:center;">
                                <h4 style="color:#fff">Your Files Shall Appear Here</h4>
                                <h5 style="color:#fff">You dont have any files at the moment click
                                 <a class="browser_files" style="color:#3B356E; cursor:pointer;text-decoration:underline" id="upl_br"> Upload </a>
                                   to Upload Files</h5>
                                </div>`;
      }else{
      console.log(resultDataArr2);
      resultDataArr2.forEach(function (files) {
      var fileExt = "pdf";
      let f_ext = files.file_extension;

      if (f_ext === "docx" || f_ext === "doc") {
        fileExt = "doc.png";
      } else if (f_ext === "xls" || f_ext === "xlsx") {
        fileExt = "xlsx.png";
      } else if (f_ext === "ppt" || f_ext === "pptx") {
        fileExt = "ppt.png";
      } else if (f_ext === "pdf") {
        fileExt = "pdf.png";
      } else if (
        f_ext === "jpg" ||
        f_ext === "jpeg" ||
        f_ext === "png" ||
        f_ext === "gif" ||
        f_ext === "bmp" ||
        f_ext === "tiff"
      ) {
        fileExt = "images.png"; // Image icon for common image formats
      } else if (
        f_ext === "mp4" ||
        f_ext === "avi" ||
        f_ext === "mkv" ||
        f_ext === "mov" ||
        f_ext === "wmv" ||
        f_ext === "flv"
      ) {
        fileExt = "video.png"; // Video icon for common video formats
      } else if (
        f_ext === "mp3" ||
        f_ext === "wav" ||
        f_ext === "flac" ||
        f_ext === "aac"
      ) {
        fileExt = "audio.jpg"; // Audio icon for common audio formats
      } else if (f_ext === "mdb" || f_ext === "accdb") {
        fileExt = "accdb.png"; // Microsoft Access database icon
      } else if (f_ext === "exe" || f_ext === "bat" || f_ext === "sh") {
        fileExt = "exe.png"; // Executable file icon
      } else if (
        f_ext === "zip" ||
        f_ext === "rar" ||
        f_ext === "7z" ||
        f_ext === "tar" ||
        f_ext === "gz"
      ) {
        fileExt = "zip.jpg"; // Archive file icon for compressed formats
      }
      else if(
        f_ext==="txt"
      ){
        fileExt="txt.png";
      } else {
        fileExt = "other.jpg"; // Default for other unknown formats
      }

         dispFiles += `
<div  class="col-lg-3 col-md-6 col-sm-6 file-row"
                    data-filedir="${
                      splitDir(files.file_path_directory) +
                      files.file_pseudo_name
                    }"
                    data-fileName="${files.file_name}">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" data-title="${
                              files.file_name
                            }" data-load-file="file" data-load-target="#resolte-contaniner" data-url="/BUNGOARCH/html/FileUpload/fl3Mee/${
           splitDir(files.file_path_directory) + files.file_pseudo_name
         }" data-toggle="modal" data-target="#exampleModal">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <img src="/BUNGOARCH/html/assets/images/layouts/page-1/${fileExt}" class="img-fluid" alt="image1">       
                                </div>
                                <h6>${trimName(files.file_name)}</h6> 
                                <div class="fileActions" style="display: flex ;color:pink">
                                ${checkFileAccessLvl(files.file_access_level)}
                                </div>
                                  
                        </div>
                    </div>
                </div>

`;
        
      });
     }
     if(fileDisp){
      fileDisp.innerHTML = dispFiles;
     }
    } else {
      console.log("Error in Files:" + xhrf.status);
    }
  };
  xhrf.send();
};
const createFileItemHTML = (file, uniqueId) => {
      //myFolders = "";
      //loadThemFolders();
      const { name, size } = file;
      const extension = name.split(".").pop();
      const theHTML = `
            <li class="file-item" id="file-item-${uniqueId}">
                <div class="file-extension"id="f_ext_${uniqueId}">${extension}</div>
                <div class="file-content-wrapper">
                    <div class="file-content">
                        <div class="file-details">
                            <h5 class="file-name">${trimName(name)}</h5>
                            <div class="file-info">
                                <div class="file-smalls">
                                    <small class="file-size">${formatFSize(
                                      size
                                    )}</small>
                                    <small class="file-divider">.</small>
                                    <small class="file-status">Pending...</small>
                                    <div><button class="cancel-button">❌</button> </div>
                                </div>
                                <div class="file_choose">
                                    <input type="text" name="descr" id="a_descr${uniqueId}" placeholder="Add a description">
                                    <div class="selectGroup">
                                    <label for="folder">Select Folder</label>
                                    <select class="form-control" id="f_folder-${uniqueId}">
                                        ${myFolders}
                                    </select>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="file-progress-bar">
                        <div class="file-progress"></div>
                    </div>
                </div>
            </li>`;

      // Call the callback function with the generated HTML
      //callback(theHTML);
  return theHTML;
 
};
function formatFSize(size) {
  if (size >= 1024 * 1024 * 1024) {
    return (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  } else if (size >= 1024 * 1024) {
    return (size / (1024 * 1024)).toFixed(2) + "MB";
  } else if (size >= 1024) {
    return (size / 1024).toFixed(2) + "KB";
  }
};
const handleFileUploading=(file,uniqueId)=>{
    const xhr =new  XMLHttpRequest();
    const formData =new FormData();
    formData.append("file",file);
    // var deptSelect = userRow.querySelector("select");
    // var selectedOption = deptSelect.options[deptSelect.selectedIndex];
    // var dept_Id = selectedOption.value;
    // var dept_Name = selectedOption.textContent.trim();
    let folder_id= document.querySelector(`#f_folder-${uniqueId}`).value;
    let file_extension = document.querySelector(`#f_ext_${uniqueId}`).textContent;
    let file_description = document.querySelector(`#a_descr${uniqueId}`).value;
    let folder= document.querySelector(`#f_folder-${uniqueId}`);
    let folderName=folder.options[folder.selectedIndex].text;
    //let f_nm=folderName.querySelector("select");
    //let the_flder_name=f_nm.textContent.trim();
    //console.log("the folder Name selected is "+folderName);
    //console.log("the folder id selected is "+folder_id);
    //console.log("the folder Name selected is " + file_description);
    //console.log("the folder Extension selected is " + file_extension);
    formData.append("firstName",folderName);
    formData.append("folder_id",folder_id);
    formData.append("file_description",file_description);
    formData.append("file-extension",file_extension);
    formData.append("ses_id",sessionId);
    xhr.upload.addEventListener("progress",(e)=>{
        const fileProgress=document.querySelector(`#file-item-${uniqueId} .file-progress`);
           const fileSize = document.querySelector(
             `#file-item-${uniqueId} .file-size`
           );
           const fromatedFileSize =
             file.size >= 1024 * 1024
               ? `${(e.loaded / (1024 * 1024)).toFixed(2)} MB/
                 ${(e.total / (1024 * 1024)).toFixed(2)}MB
                `
               : `${(e.loaded / (1024 )).toFixed(2)} KB/
                 ${(e.total / (1024 )).toFixed(2)}KB`;
           const progress=Math.round((e.loaded / e.total)*100);
           fileProgress.style.width=`${progress}%`;
           fileSize.innerText=fromatedFileSize;
           //formData.append("fileSize",fileSize);
    });
    
    xhr.open("POST", "/BUNGOARCH/html/FileUpload/fl3Mee/upload.php", true);
    //console.log(this.responseText);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr.responseText); // Log the response from the server
      } else {
        console.error("Error: " + xhr.status);
      }
    };

    xhr.send(formData);
    
    return xhr;   
}
let filesToUpload = [];
let uploadInitiated = false;

const handleSelectedFiles = ([...files]) => {
  //XHRR
 
  //xhrr.abort();
  if (files.length === 0) return;
  totalFiles += files.length;
  files.forEach((file, index) => {
    const uniqueId = Date.now() + index;
    console.log(myFolders);
    const fileItemHTML = createFileItemHTML(file, uniqueId);
    fileList.insertAdjacentHTML("afterbegin", fileItemHTML);
    const currentFileItem = document.querySelector(`#file-item-${uniqueId}`);
    const cnclFileUploadBtn = currentFileItem.querySelector(".cancel-button");

    // Store file data and its associated elements for later use
    filesToUpload.push({ file, uniqueId, cnclFileUploadBtn, currentFileItem });
  });
};

// Upload files event listener
UploadFiles.addEventListener("click", () => {
  if (uploadInitiated || filesToUpload.length === 0) return;

  uploadInitiated = true;

  filesToUpload.forEach(
    ({ file, uniqueId, cnclFileUploadBtn, currentFileItem }, index) => {
      const xhr = handleFileUploading(file, uniqueId);

      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          completed++;
          cnclFileUploadBtn.remove();
          currentFileItem.querySelector(".file-status").innerText = "completed";
          currentFileItem.querySelector(".file-status").style.color = "#00B125";
          fileCompletedProg.innerText = `${completed} / ${totalFiles} files Completed`;
          LoadThemFiles();
          fetchFolders();
        }
      });

      cnclFileUploadBtn.addEventListener("click", () => {
        xhr.abort();
        currentFileItem.querySelector(".file-status").innerText = "canceled";
        currentFileItem.querySelector(".file-status").style.color = "#D40D0D";
        cnclFileUploadBtn.remove();
      });
      xhr.addEventListener("error", () => {
        alert("Upload Experienced an Error!");
      });
    }
  );

  // Reset for the next upload
  filesToUpload = [];
  uploadInitiated = false; // Allow for adding more files and re-initiating upload
  fileBrowserInput.value = ""; // Clear file input for next batch
});

// Drag and drop and file input event listeners
fileUploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  handleSelectedFiles(Array.from(e.dataTransfer.files));
  fileUploadBox.classList.remove("active");
  fileInstruction.innerHTML = "Drag files here or ";
});

fileUploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileUploadBox.classList.add("active");
  fileInstruction.innerHTML = "Drop file to Upload or ";
});

fileUploadBox.addEventListener("dragleave", (e) => {
  e.preventDefault();
  fileUploadBox.classList.remove("active");
  fileInstruction.innerHTML = "Drag files here or ";
});

fileBrowserInput.addEventListener("change", (e) =>
  handleSelectedFiles(Array.from(e.target.files))
);
fileBrowserButton.addEventListener("click", () => fileBrowserInput.click());
fileAddBtn.addEventListener("click", () => fileBrowserInput.click());

clearFiles.addEventListener("click", () => {
  // Clear the files array
  filesToUpload = [];
  // Clear the file input (so the user can re-select the same files if needed)
  fileBrowserInput.value = "";
  // Remove all file items from the display
  fileList.innerHTML = "";
  // Reset any other related states or UI elements
  totalFiles = 0;
  completed = 0;
  fileCompletedProg.innerText = `${completed} / ${totalFiles} files Completed`;
  // Optionally reset uploadInitiated if needed
  uploadInitiated = false;
});
document.addEventListener("click", (e) => {
  const Upl_Fld4 = e.target.closest("#upl_br"); // Check if the clicked target is #upl_br
  if (Upl_Fld4) {
    // If #upl_br was clicked, trigger the modal
    Fmdl.showModal(); // Assuming Fmdl is a valid reference
  }
});
