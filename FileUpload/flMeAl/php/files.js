document.getElementById("fileInput").addEventListener("change", function (e) {
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = ""; // Clear any existing items

  for (const file of e.target.files) {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";

    const fileInfo = document.createElement("div");
    fileInfo.className = "file-info";

    const fileName = document.createElement("span");
    fileName.textContent = `${file.name}`;

    const fileSize = document.createElement("span");
    fileSize.className = "file-size";
    fileSize.textContent = `${(file.size / 1024 / 1024).toFixed(2)} MB`;

    const fileDelete = document.createElement("span");
    fileDelete.className = "file-delete";
    fileDelete.textContent = "✖";
    fileDelete.addEventListener("click", function () {
      fileItem.remove();
    });

    fileInfo.appendChild(fileName);
    fileInfo.appendChild(fileSize);
    fileInfo.appendChild(fileDelete);

    const fileDescription = document.createElement("div");
    fileDescription.className = "file-description";
    const fileDescInput = document.createElement("input");
    fileDescInput.type = "text";
    fileDescInput.placeholder = "Add a description...";

    fileDescription.appendChild(fileDescInput);

    fileItem.appendChild(fileInfo);
    fileItem.appendChild(fileDescription);

    fileList.appendChild(fileItem);
  }
});
