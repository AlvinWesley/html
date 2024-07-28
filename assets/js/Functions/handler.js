let svxn = new Svx(),sq = new Svx.Storage(),
  flpz = document.querySelectorAll(".nfd-ct"),
  flpx = document.querySelectorAll(".nfl-ct"),
  ftx = document.querySelectorAll(".upload-file-upf");

ftx.forEach((ft) => {
  ft.addEventListener("click", () => {
    alert(`${ft} clicked..`);
  });
});

flpx.forEach((fl) => {
  fl.addEventListener("click", () => {
    Swal.fire({
      title: "New File",
      input: "text",
      allowOutsideClick: false,
      inputPlaceholder: "Name your file",
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage("Please name your file");
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        svxn.Elements("file", result.value);
      }
    });
  });
});

flpz.forEach((fz) => {
  fz.addEventListener("click", () => {
    Swal.fire({
      title: "New Folder",
      input: "text",
      allowOutsideClick: false,
      inputPlaceholder: "Name your folder",
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage("Please name your folder");
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        svxn.Elements("folder", result.value);
      }
    });
  });
});

document.addEventListener("click", function (event) {
  const action = event.target
    .closest(".dropdown-item")
    ?.getAttribute("data-action");
  if (!action) return;

  switch (action.toLowerCase()) {
    case "view":
      alert("View action triggered");
      break;
    case "delete":
      alert("Delete action triggered");
      break;
    case "edit":
      alert("Edit action triggered");
      break;
    case "print":
      alert("Print action triggered");
      break;
    case "share":
      Tshare();
      break;
    case "download":
      alert("Download action triggered");
      break;
    default:
      console.warn("No action found for:", action);
  }
});

function Tshare() {
  const al = document.querySelector('a[href="#mydrive"]'),
    se = al.querySelector("span"),
    spanText = se.innerText || se.textContent;
  if (spanText.toLocaleLowerCase() === "admin") {
    Swal.fire({
      title: "Share to ",
      confirmButton: true,
      confirmButtonText: "Share",
      input: "radio",
      inputOptions: { Admin: "Admin", Supervisor: "Supervisor", User: "User" },
      inputValidator: (value) => {
        if (!value) {
          Swal.showValidationMessage("Please specify a recepient..");
          return;
        }
      },
      preConfirm: (value) => {
        return value;
      },
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User selected:", result.value);
      }
    });
  } else if (spanText.toLocaleLowerCase() === "supervisor") {
    Swal.fire({
      title: "Share to ",
      confirmButton: true,
      confirmButtonText: "Share",
      input: "radio",
      inputOptions: {
        Administrator: "Administrator",
        Supervisor: "Supervisor",
      },
      inputValidator: (value) => {
        if (!value) {
          Swal.showValidationMessage("Please specify a recepient..");
        }
      },
      preConfirm: (value) => {
        return value;
      },
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User selected:", result.value);
      }
    });
  } else if (spanText.toLocaleLowerCase() === "user") {
    Swal.fire({
      title: "File share",
      confirmButton: true,
      confirmButtonText: "Share",
      input: "radio",
      inputOptions: {
        Administrator: "Administrator",
        Supervisor: "Supervisor",
      },
      inputValidator: (value) => {
        if (!value) {
          Swal.showValidationMessage("Please specify a recepient..");
          return;
        }
      },
      preConfirm: (value) => {
        return value;
      },
      confirmButtonText: "Share",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User selected:", result.value);
      }
    });
  }
}


