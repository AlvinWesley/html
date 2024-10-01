//let sessionId = sessionStorage.getItem("sessionId");
function frmtDate(dateTimeString) {
  // Create a Date object from the input string
  const dateObj = new Date(dateTimeString);
  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the day, month, and year from the Date object
  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const time = dateObj.getHours();
  const mins = dateObj.getMinutes();
  const secs = dateObj.getSeconds();

  // Format the date as 'DD-MMM-YYYY'
  return `${day}-${month}-${year} : ${time}-${mins}-${secs}`;
}
let previousNotifications = []; // To store the previous notifications

// Fetch notifications from the server and update the UI if needed
function fetchNotifications() {
  const notificationsContent = document.getElementById("notifications");
  const notificationsContentMain = document.getElementById("notifications2");
  let notificationsSyst = ``;
  let xhrn = new XMLHttpRequest();
  xhrn.open(
    "get",
    "/BungoArch/html/notifications/fetchNotifications.php?ses_id="+sessionId,
    true
  );
  xhrn.onload = function () {
    if (xhrn.status === 200) {
      console.log(this.responseText);
      let loadedNotifications = JSON.parse(xhrn.responseText);

      // Compare the current notifications with the previous set
      if (hasNotificationsChanged(loadedNotifications, previousNotifications)) {
        previousNotifications = loadedNotifications; // Update previous notifications

        notificationsSyst = ""; // Clear old notifications

        // Rebuild notifications UI

        loadedNotifications.forEach((notification) => {
          if (notification.n_type === "file_share_info") {
            notificationsSyst += `
              <div class="notification file-share" 
              data-type="${notification.n_type}" 
              data-read="${notification.n_status_read}"
              data-tagId="${notification.n_id_tags}">
                  <div class="icon">&#128194;</div>
                  <div class="content">
                      <h3>${notification.n_name}</h3>
                      <p>${notification.n_message}</p>
                      <input type="text" class="acknowledge-input" placeholder="Add a comment to acknowledge...">
                      <button class="acknowledge-btn">Acknowledge</button>
                  </div>
                  <span class="time">${frmtDate(
                    notification.n_time_sent
                  )}</span>
              </div>
            `;
          } else {
            notificationsSyst += `
              <div class="notification system-info" 
              data-type="${notification.n_type}" 
              data-read="${notification.n_status_read}">
                  <div class="icon">&#9888;</div>
                  <div class="content">
                      <h3>${notification.n_name}</h3>
                      <p>${notification.n_message}</p>
                  </div>
                  <span class="time">${frmtDate(
                    notification.n_time_sent
                  )}</span>
              </div>
            `;
          }
        });

        notificationsContent.innerHTML = notificationsSyst;
        notificationsContentMain.innerHTML=notificationsSyst;

        // Bind the acknowledgment buttons
        bindAcknowledgmentButtons();

        // Update unread count
        updateUnreadCount();
      }
    } else {
      console.log("Error: " + xhrn.status);
    }
  };
  xhrn.send();
}

// Function to check if the notifications have changed
function hasNotificationsChanged(newNotifications, oldNotifications) {
  // Check if the array lengths are different
  if (newNotifications.length !== oldNotifications.length) {
    return true;
  }

  // Compare individual notifications by ID and other fields (message, read status)
  for (let i = 0; i < newNotifications.length; i++) {
    const newNotif = newNotifications[i];
    const oldNotif = oldNotifications[i];

    // Check for differences in ID, message, or status
    if (
      newNotif.n_id !== oldNotif.n_id ||
      newNotif.n_message !== oldNotif.n_message ||
      newNotif.n_status_read !== oldNotif.n_status_read ||
      newNotif.n_time_sent !== oldNotif.n_time_sent
    ) {
      return true; // If any difference is found, return true
    }
  }
  return false; // No differences found
}

// Function to bind the acknowledgment button click event
function bindAcknowledgmentButtons() {
  document.querySelectorAll(".acknowledge-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const inputField = e.target.previousElementSibling;
      let comment = inputField.value.trim();
      if (comment) {
        const notification = e.target.closest(".notification");
        notification.setAttribute("data-read", "1");
        notification.querySelector(".acknowledge-input").disabled = true;
        e.target.disabled = true;
        e.target.textContent = "Acknowledged";

        // Send acknowledgment via AJAX
        acknowledgeNotification(notification.dataset.tagid, comment);

        updateUnreadCount();
      } else {
        comment = `file has been acknowledged`;
        const notification = e.target.closest(".notification");
        acknowledgeNotification(notification.dataset.tagid, comment);
        notification.setAttribute("data-read", "1");
        notification.querySelector(".acknowledge-input").disabled = true;
        e.target.disabled = true;
        e.target.textContent = "Acknowledged";
        //alert("Please enter a comment before acknowledging.");
      }
    });
  });
}

// Function to send acknowledgment to the server
function acknowledgeNotification(tagId, comment) {
  let formData = new FormData();
  formData.append("sharing_id", tagId);
  formData.append("receiverComments", comment);
  formData.append("ses_id", sessionId);
  let xhrn = new XMLHttpRequest();
  xhrn.open(
    "POST",
    "/BungoArch/html/notifications/fetchNotifications.php",
    true
  );
  xhrn.onload = function () {
    if (xhrn.status === 200) {
      console.log("Acknowledgment submitted");
    } else {
      console.log("Error: " + xhrn.status);
    }
  };
  xhrn.send(formData);
}

// Function to update unread notification count
function updateUnreadCount() {
  const notifications = document.getElementById("notifications").children;
  const unreadCountElement = document.getElementById("unread-count");
  const unreadCountElement2 = document.getElementById("unread-count2");
  let unreadCount = 0;
  for (let notification of notifications) {
    if (notification.getAttribute("data-read") === "0") {
      unreadCount++;
    }
  }
  unreadCountElement.textContent = `New: ${unreadCount}`;
  if(unreadCountElement2){
    unreadCountElement2.textContent = `New: ${unreadCount}`;
  }
  
}

// Function to search and highlight notifications
function searchNotifications() {
  const searchBar = document.getElementById("search-bar");
  const searchBar2 = document.getElementById("search-bar2");
  const notifications = document.getElementById("notifications").children;
  const notifications2 = document.getElementById("notifications2").children;
  searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.toLowerCase();
    for (let notification of notifications) {
      const title = notification.querySelector("h3").textContent.toLowerCase();
      const message = notification.querySelector("p").textContent.toLowerCase();
      const regex = new RegExp(`(${searchQuery})`, "gi");

      // Check if search query matches the title or message
      if (title.includes(searchQuery) || message.includes(searchQuery)) {
        notification.style.display = "flex";
        // Highlight the search query
        // notification.querySelector("h3").innerHTML = title.replace(
        //   regex,
        //   `<mark>$1</mark>`
        // );
        // notification.querySelector("p").innerHTML = message.replace(
        //   regex,
        //   `<mark>$1</mark>`
        // );
      } else {
        notification.style.display = "none";
      }
    }
  });
  if (searchBar2) {
    searchBar2.addEventListener("input", () => {
      const searchQuery2 = searchBar2.value.toLowerCase();
      for (let notification2 of notifications2) {
        const titleElement2 = notification2.querySelector("h3");
        const messageElement2 = notification2.querySelector("p");
        const title2 = titleElement2.textContent.toLowerCase();
        const message2 = messageElement2.textContent.toLowerCase();

        // Check if search query matches the title or message
        if (title2.includes(searchQuery2) || message2.includes(searchQuery2)) {
          notification2.style.display = "flex";

          // Highlight the search query in title
          titleElement2.innerHTML = highlightText(
            titleElement2.textContent,
            searchQuery2
          );

          // Highlight the search query in message
          messageElement2.innerHTML = highlightText(
            messageElement2.textContent,
            searchQuery2
          );
        } else {
          notification2.style.display = "none";
        }
      }
    });
  }

  // Function to safely highlight the text
  function highlightText(text, searchQuery2) {
    if (!searchQuery2) return text; // If no search query, return original text
    const regex = new RegExp(`(${searchQuery2})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  }

}

// Initialize on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchNotifications();
  searchNotifications();

  // Check for new notifications every 3 seconds
  setInterval(fetchNotifications, 3000);
});
