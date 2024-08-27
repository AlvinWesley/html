const fileBrowserButton = document.querySelector(".file-browse-button");
const fileAddBtn = document.querySelector("#add_file");
const fileBrowserInput = document.querySelector(".file-browse-input");
const fileUploadBox = document.querySelector(".file-upload-box");
const fileList=document.querySelector(".file-list")
const fileInstruction = document.querySelector(".file-instruction");
const fileCompletedProg = document.querySelector(".file-completed-status");
const UploadFiles = document.querySelector("#sbmt_file");
const clearFiles = document.querySelector("#clr");
let totalFiles=0;
let completed=0;
const createFileItemHTML=(file,uniqueId)=>{
    console.log(file);
    const{name,size}=file;
    const extension = name.split(".").pop();
    return `
     <li class="file-item" id="file-item-${uniqueId}">
                <div class="file-extension">${extension}</div>
                <div class="file-content-wrapper">
                    <div class="file-content">
                        <div class="file-details">
                            <h5 class="file-name">${name}</h5>
                            <div class="file-info">
                                <small class="file-size">4Mb/${size}</small>
                                <small class="file-divider">.</small>
                                <small class="file-status">Pending...</small>
                                <input type="text" name="descr" id="a_descr${uniqueId}" placeholder="add A description">
                            </div>
                        </div>
                        <button class="cancel-button">❌</button>
                    </div>
                    <div class="file-progress-bar">
                        <div class="file-progress"></div>
                    </div>
                </div>
            </li>
          
    `;
}
const handleFileUploading=(file,uniqueId)=>{
    const xhr =new  XMLHttpRequest();
    const formData =new FormData();
    formData.append("file",file);
    formData.append("firstName","Erick Ekea");

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
    });
    xhr.open("POST","upload.php",true);
    xhr.send(formData);
    return xhr;   
}
let filesToUpload = [];
let uploadInitiated = false;

const handleSelectedFiles = ([...files]) => {
  if (files.length === 0) return;
  totalFiles += files.length;
  files.forEach((file, index) => {
    const uniqueId = Date.now() + index;
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

// const handleSelectedFiles=([...files])=>{
//     if(files.length===0) return;
//     totalFiles+=files.length;
//     files.forEach((file,index)=>{
//         const uniqueId=Date.now()+index;
//        const fileItemHTML= createFileItemHTML(file,uniqueId);
//        fileList.insertAdjacentHTML("afterbegin",fileItemHTML);
//        const currentFileItem = document.querySelector(`#file-item-${uniqueId}`);
//        const cnclFileUploadBtn= document.querySelector(".cancel-button");
//        UploadFiles.addEventListener("click",()=>{
//         console.log(file);
//          const xhr = handleFileUploading(file, uniqueId);
//         xhr.addEventListener("readystatechange", () => {
//           if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             completed++;
//             cnclFileUploadBtn.remove();
//             currentFileItem.querySelector(".file-status").innerText =
//               "completed";
//             currentFileItem.querySelector(".file-status").style.color =
//               "#00B125";
//             fileCompletedProg.innerText = `${completed} /${totalFiles} files Completed`;
//           }
//         });
//         cnclFileUploadBtn.addEventListener("click", () => {
//             xhr.abort();
//             currentFileItem.querySelector(".file-status").innerText = "canceled";
//             currentFileItem.querySelector(".file-status").style.color = "#D40D0D";
//             cnclFileUploadBtn.remove();
//         });
//         xhr.addEventListener("error", () => {
//             alert("Upload Experienced and Error!");
//         });
//     //UploadFiles.addEventListener("click", () => {
//         files.length=0;
//        // alert("contents Cleared");
//     //});
//         });    
//     });
// }

// fileUploadBox.addEventListener("drop", (e) => {
//   e.preventDefault();
//   handleSelectedFiles(e.dataTransfer.files);
//   fileUploadBox.classList.remove("active");
//   fileInstruction.innerHTML = "Drag files here or ";
// });
// fileUploadBox.addEventListener("dragover",(e)=>{
// e.preventDefault();
// //console.log("DRAGGED");
// fileUploadBox.classList.add("active");
// fileInstruction.innerHTML="Drop file to Upload or ";
// });
// fileUploadBox.addEventListener("dragleave",(e)=>{
// e.preventDefault();
// //console.log("Drag Dropped Left");
// fileUploadBox.classList.remove("active");
// fileInstruction.innerHTML = "Drag files here or ";
// });
// fileBrowserInput.addEventListener("change",(e)=>handleSelectedFiles(e.target.files));
// fileBrowserButton.addEventListener("click",()=>fileBrowserInput.click());
// fileAddBtn.addEventListener("click", () => fileBrowserInput.click());
///
////
////
///
////
///
////

// const fileBrowserButton = document.querySelector(".file-browse-button");
// const fileAddBtn = document.querySelector("#add_file");
// const fileBrowserInput = document.querySelector(".file-browse-input");
// const fileUploadBox = document.querySelector(".file-upload-box");
// const fileList = document.querySelector(".file-list");
// const fileInstruction = document.querySelector(".file-instruction");
// const fileCompletedProg = document.querySelector(".file-completed-status");
// const UploadFiles = document.querySelector("#sbmt_file");
// let totalFiles = 0;
// let completed = 0;
// let selectedFiles = []; // Store selected files here

// const createFileItemHTML = (file, uniqueId) => {
//   const { name, size } = file;
//   const extension = name.split(".").pop();
//   return `
//      <li class="file-item" id="file-item-${uniqueId}">
//         <div class="file-extension">${extension}</div>
//         <div class="file-content-wrapper">
//             <div class="file-content">
//                 <div class="file-details">
//                     <h5 class="file-name">${name}</h5>
//                     <div class="file-info">
//                         <small class="file-size">4Mb/${size}</small>
//                         <small class="file-divider">.</small>
//                         <small class="file-status">Uploading...</small>
//                     </div>
//                 </div>
//                 <button class="cancel-button">❌</button>
//             </div>
//             <div class="file-progress-bar">
//                 <div class="file-progress"></div>
//             </div>
//         </div>
//     </li>`;
// };

// const handleFileUploading = (file, uniqueId) => {
//   const xhr = new XMLHttpRequest();
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("firstName", "Erick Ekea");

//   xhr.upload.addEventListener("progress", (e) => {
//     const fileProgress = document.querySelector(`#file-item-${uniqueId} .file-progress`);
//     const fileSize = document.querySelector(`#file-item-${uniqueId} .file-size`);
//     const formattedFileSize = file.size >= 1024 * 1024
//       ? `${(e.loaded / (1024 * 1024)).toFixed(2)} MB / ${(e.total / (1024 * 1024)).toFixed(2)} MB`
//       : `${(e.loaded / 1024).toFixed(2)} KB / ${(e.total / 1024).toFixed(2)} KB`;
//     const progress = Math.round((e.loaded / e.total) * 100);
//     fileProgress.style.width = `${progress}%`;
//     fileSize.innerText = formattedFileSize;
//   });

//   xhr.open("POST", "upload.php", true);
//   xhr.send(formData);
//   return xhr;
// };

// const handleSelectedFiles = (files) => {
//   if (files.length === 0) return;
//   totalFiles += files.length;
//   selectedFiles = [...selectedFiles, ...files]; // Add selected files to the array

//   files.forEach((file, index) => {
//     const uniqueId = Date.now() + index;
//     const fileItemHTML = createFileItemHTML(file, uniqueId);
//     fileList.insertAdjacentHTML("afterbegin", fileItemHTML);
//     const currentFileItem = document.querySelector(`#file-item-${uniqueId}`);
//     const cnclFileUploadBtn = document.querySelector(".cancel-button");

//     const xhr = handleFileUploading(file, uniqueId);
//     xhr.addEventListener("readystatechange", () => {
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         completed++;
//         cnclFileUploadBtn.remove();
//         currentFileItem.querySelector(".file-status").innerText = "Completed";
//         currentFileItem.querySelector(".file-status").style.color = "#00B125";
//         fileCompletedProg.innerText = `${completed} / ${totalFiles} files Completed`;
//       }
//     });

//     cnclFileUploadBtn.addEventListener("click", () => {
//       xhr.abort();
//       currentFileItem.querySelector(".file-status").innerText = "Canceled";
//       currentFileItem.querySelector(".file-status").style.color = "#D40D0D";
//       cnclFileUploadBtn.remove();
//     });

//     xhr.addEventListener("error", () => {
//       alert("Upload Experienced an Error!");
//     });
//   });
// };

// Clear files when the "Upload Files" button is clicked
// UploadFiles.addEventListener("click", () => {
//   selectedFiles = []; // Clear the file array
//   fileList.innerHTML = ''; // Clear the displayed list
//   totalFiles = 0;
//   completed = 0;
//   fileCompletedProg.innerText = '0 / 0 files Completed';
//   alert("Files cleared");
// });

// fileUploadBox.addEventListener("drop", (e) => {
//   e.preventDefault();
//   handleSelectedFiles([...e.dataTransfer.files]);
//   fileUploadBox.classList.remove("active");
//   fileInstruction.innerHTML = "Drag files here or ";
// });

// fileUploadBox.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   fileUploadBox.classList.add("active");
//   fileInstruction.innerHTML = "Drop file to Upload or ";
// });

// fileUploadBox.addEventListener("dragleave", (e) => {
//   e.preventDefault();
//   fileUploadBox.classList.remove("active");
//   fileInstruction.innerHTML = "Drag files here or ";
// });

// fileBrowserInput.addEventListener("change", (e) => handleSelectedFiles([...e.target.files]));
// fileBrowserButton.addEventListener("click", () => fileBrowserInput.click());
// fileAddBtn.addEventListener("click", () => fileBrowserInput.click());
