document.getElementById("closeDialog").addEventListener("click", function () {
  const dialog = document.querySelector(".file-viewer-dialog");
  dialog.style.display = "none"; // Hide the dialog
});

// You can add event listeners for the action buttons as needed
document.querySelectorAll(".action-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const action = this.classList.contains("delete")
      ? "delete"
      : this.classList.contains("download")
      ? "download"
      : this.classList.contains("share")
      ? "share"
      : "move";
    console.log(`Performing action: ${action}`);
    // Add corresponding functionality here
  });
});
