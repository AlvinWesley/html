document
  .getElementById("fileInput")
  .addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
  const files = event.target.files;
  const fileList = document.getElementById("fileList");

  for (let i = 0; i < files.length; i++) {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";

    const fileName = document.createElement("span");
    fileName.textContent = files[i].name;

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const progressBarFill = document.createElement("div");
    progressBarFill.className = "progress-bar-fill";

    progressBar.appendChild(progressBarFill);

    const actions = document.createElement("div");
    actions.className = "file-item-actions";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "&#9998;"; // Edit icon

    const viewBtn = document.createElement("button");
    viewBtn.innerHTML = "&#128065;"; // View icon

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#10006;"; // Delete icon

    actions.appendChild(editBtn);
    actions.appendChild(viewBtn);
    actions.appendChild(deleteBtn);

    fileItem.appendChild(fileName);
    fileItem.appendChild(progressBar);
    fileItem.appendChild(actions);

    fileList.appendChild(fileItem);

    // Simulate upload progress
    simulateUploadProgress(progressBarFill);
  }
}

function simulateUploadProgress(progressBarFill) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBarFill.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 300);
}
