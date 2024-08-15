document.getElementById("fileInput").addEventListener("change", function (e) {
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = ""; // Clear any existing items

  Array.from(e.target.files).forEach((file, index) => {
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

    // Add double-click event listener for file preview
    fileItem.addEventListener("dblclick", function () {
      previewFile(file);
    });
  });
});

function previewFile(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const previewWindow = window.open("", "_blank");

    // Check the file type and display accordingly
    if (file.type.startsWith("image/")) {
      previewWindow.document.write(
        `<img src="${e.target.result}" style="max-width:100%; max-height:100%;"/>`
      );
    } else if (file.type.startsWith("video/")) {
      previewWindow.document.write(
        `<video controls style="max-width:100%; max-height:100%;"><source src="${e.target.result}" type="${file.type}"></video>`
      );
    } else if (file.type.startsWith("audio/")) {
      previewWindow.document.write(
        `<audio controls style="width:100%;"><source src="${e.target.result}" type="${file.type}"></audio>`
      );
    } else if (file.type === "application/pdf") {
      previewWindow.document.write(
        `<iframe src="${e.target.result}" style="width:100%; height:100%;"></iframe>`
      );
    } else {
      previewWindow.document.write(
        `<p>Preview not available for this file type.</p>`
      );
    }
  };

  reader.readAsDataURL(file);
}

document.getElementById("uploadBtn").addEventListener("click", function () {
  const files = document.getElementById("fileInput").files;
  if (files.length === 0) {
    alert("Please select files to upload.");
    return;
  }

  const progressBar = document.getElementById("progressBar");
  const progressContainer = document.getElementById("progressContainer");
  const progressText = document.getElementById("progressText");
  progressContainer.style.display = "block";

  const formData = new FormData();

  // Append files and descriptions to form data
  Array.from(files).forEach((file, index) => {
    formData.append("files[]", file);
    const description = document.querySelectorAll(".file-description input")[
      index
    ].value;
    formData.append(`descriptions[]`, description);
  });

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
      const percentComplete = (e.loaded / e.total) * 100;
      progressBar.style.width = `${percentComplete}%`;
      progressText.textContent = `${Math.round(percentComplete)}%`;
    }
  });

  xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
      alert("Files uploaded successfully!");
    } else {
      alert("An error occurred while uploading the files.");
    }
    progressContainer.style.display = "none";
    progressBar.style.width = "0%";
    progressText.textContent = "";
  });

  xhr.addEventListener("error", function () {
    alert("An error occurred while uploading the files.");
    progressContainer.style.display = "none";
    progressBar.style.width = "0%";
    progressText.textContent = "";
  });

  xhr.open("POST", "your-upload-endpoint.php");
  xhr.send(formData);
});
