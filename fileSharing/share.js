document.getElementById("shareButton").addEventListener("click", function () {
  const toField = document.getElementById("toField");

  if (toField.value === "") {
    displayMessage("Please select a recipient.", "error");
  } else {
    displayMessage("File shared successfully!", "success");
    // Handle sharing logic here
    console.log("File shared with:", toField.value);
    // Reset fields or close dialog as needed
  }
});

document.getElementById("cancelButton").addEventListener("click", function () {
  // Clear the form or close the dialog
  console.log("Sharing canceled");
  hideMessage();
});

function displayMessage(message, type) {
  const messageBox = document.getElementById("message-box");
  messageBox.textContent = message;
  messageBox.className = `show ${type}`;
  messageBox.style.display = "block";

  setTimeout(() => {
    hideMessage();
  }, 3000);
}

function hideMessage() {
  const messageBox = document.getElementById("message-box");
  messageBox.classList.remove("show");

  setTimeout(() => {
    messageBox.style.display = "none";
    messageBox.className = "";
  }, 3000);
}
