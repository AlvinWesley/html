document.getElementById("addButton").addEventListener("click", function () {
  const folderNameInput = document.getElementById("folderName");
  const folderName = folderNameInput.value.trim();
  const messageBox = document.getElementById("message-box");

  // Validation Rules
  const invalidCharacters = /[^a-zA-Z0-9_-]/;
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
    displayMessage("Folder added successfully!", "success");
    // Handle adding the folder logic here
    console.log("Folder added:", folderName);
    folderNameInput.value = "";
  }
});

document.getElementById("cancelButton").addEventListener("click", function () {
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
