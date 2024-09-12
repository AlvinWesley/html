// Select Recipients Section
const searchInput1 = document.getElementById("userSearch");
const userList = document.getElementById("userList");
const userBoxes = userList.getElementsByClassName("userBox");
const userNotFound = document.getElementById("userNotFound");
const selectedCount = document.getElementById("selectedCount");
const userCheckboxes = document.getElementsByClassName("userCheckbox");

// Debounce function to limit search trigger rate
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// Highlight matched text
function highlightMatch(text, query) {
  const regExp = new RegExp(`(${query})`, "gi");
  return text.replace(regExp, '<span class="highlight">$1</span>');
}

// Search users and highlight matched text
function searchUsers() {
  const filter = searchInput1.value.toLowerCase();
  let foundAny = false;

  // Loop through all userBox items
  Array.from(userBoxes).forEach((userBox) => {
    const userNameElement = userBox.querySelector(".userName");
    const userEmailElement = userBox.querySelector(".userEmail");
    const userName = userNameElement.textContent.toLowerCase();
    const userEmail = userEmailElement.textContent.toLowerCase();

    if (userName.includes(filter) || userEmail.includes(filter)) {
      userBox.style.display = "";
      foundAny = true;
      userNameElement.innerHTML = highlightMatch(
        userNameElement.textContent,
        filter
      );
      userEmailElement.innerHTML = highlightMatch(
        userEmailElement.textContent,
        filter
      );
    } else {
      userBox.style.display = "none";
    }
  });

  userNotFound.style.display = foundAny ? "none" : "block";
}

// Debounce the search function
const debouncedSearch = debounce(searchUsers, 300);
searchInput1.addEventListener("input", debouncedSearch);

// Update selected user count
function updateSelectedCount() {
  const count = Array.from(userCheckboxes).filter(
    (checkbox) => checkbox.checked
  ).length;
  selectedCount.textContent = `${count} users selected`;
}

// Add change event listener to checkboxes
Array.from(userCheckboxes).forEach((checkbox) => {
  checkbox.addEventListener("change", updateSelectedCount);
});

// Select all users
document.querySelector(".selectAllBtn").addEventListener("click", () => {
  Array.from(userCheckboxes).forEach((checkbox) => (checkbox.checked = true));
  updateSelectedCount();
});

// Clear all selected users
document.querySelector(".clearBtn").addEventListener("click", () => {
  Array.from(userCheckboxes).forEach((checkbox) => (checkbox.checked = false));
  updateSelectedCount();
});

// File Sharing Section
const searchInput = document.getElementById("searchInput");
const fileList = document.getElementById("fileList");
const sortSelect = document.getElementById("sort");
const selectAllBtn = document.getElementById("selectAllBtn");
const clearBtn = document.getElementById("clearBtn");
const fileCheckboxes = document.querySelectorAll(".fileCheckbox");
const fileCount = document.getElementById("fileCount");
const fileSize = document.getElementById("fileSize");

// Update the number of files selected and their total size
function updateFileSummary() {
  let selectedCount = 0;
  let totalSize = 0;

  fileCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const fileBox = checkbox.closest(".fileBox");
      const size = parseFloat(fileBox.getAttribute("data-size"));
      selectedCount++;
      totalSize += size;
    }
  });

  fileCount.textContent = `${selectedCount} Files Selected`;
  fileSize.textContent = `Total Size: ${totalSize}GB`;
}

// Search and highlight files
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const fileBoxes = document.querySelectorAll(".fileBox");

  fileBoxes.forEach((fileBox) => {
    const fileName = fileBox.getAttribute("data-name").toLowerCase();
    const fileNameElement = fileBox.querySelector(".fileName");

    if (fileName.includes(query)) {
      fileBox.style.display = "flex";
      const regex = new RegExp(`(${query})`, "gi");
      fileNameElement.innerHTML = fileNameElement.innerText.replace(
        regex,
        '<span class="highlight">$1</span>'
      );
    } else {
      fileBox.style.display = "none";
    }
  });
});

// Sort files
sortSelect.addEventListener("change", () => {
  const option = sortSelect.value;
  const fileBoxes = Array.from(document.querySelectorAll(".fileBox"));

  let sortedFiles;
  if (option === "A-Z") {
    sortedFiles = fileBoxes.sort((a, b) =>
      a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"))
    );
  } else if (option === "Z-A") {
    sortedFiles = fileBoxes.sort((a, b) =>
      b.getAttribute("data-name").localeCompare(a.getAttribute("data-name"))
    );
  } else if (option === "size") {
    sortedFiles = fileBoxes.sort(
      (a, b) =>
        parseFloat(a.getAttribute("data-size")) -
        parseFloat(b.getAttribute("data-size"))
    );
  } else if (option === "date") {
    sortedFiles = fileBoxes.sort(
      (a, b) =>
        new Date(a.getAttribute("data-date")) -
        new Date(b.getAttribute("data-date"))
    );
  }

  fileList.innerHTML = "";
  sortedFiles.forEach((fileBox) => fileList.appendChild(fileBox));
});

// Select all files
selectAllBtn.addEventListener("click", () => {
  fileCheckboxes.forEach((checkbox) => (checkbox.checked = true));
  updateFileSummary();
});

// Clear all files
clearBtn.addEventListener("click", () => {
  fileCheckboxes.forEach((checkbox) => (checkbox.checked = false));
  updateFileSummary();
});

// Update file summary when a checkbox changes
fileCheckboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", updateFileSummary)
);
