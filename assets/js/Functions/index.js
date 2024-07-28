class Svx {
  constructor() {}

  Uploader() {}

  Intro(toured = false) {}
  Intro(toured = false) {}
  fr(t) {
    return document.createElement(t);
  }
  dn() {
    const date = new Date(),
      months = [
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
      ],
      day = date.getDate(),
      month = months[date.getMonth()],
      year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  Elements(type, name) {
    let fq = this.fr("div");
    let ns = (elem) => document.querySelector(elem);
    if (type.toLowerCase() === "folder") {
      fq.classList.add("col-md-6", "col-sm-6", "col-lg-3");
      let h = ` <div class="card card-block card-stretch card-height"><div class="card-body"><div class="d-flex justify-content-between"><a href="./page-android.html" class="folder"><div class="icon-small bg-primary rounded mb-4"><i class="ri-file-copy-line"></i></div>  </a>  <div class="card-header-toolbar">  <div class="dropdown"> <span class="dropdown-toggle" id="dropdownMenuButton3" data-toggle="dropdown"><i class="ri-more-2-fill"></i></span><div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2"><a class="dropdown-item" data-action="share" href="#"><i  class="ri-share-fill mr-2"></i>Share</a><a class="dropdown-item" data-action="Delete" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a><a class="dropdown-item" data-action="Edit"  href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a><a class="dropdown-item" data-action="Edit" href="#"><i class="ri-printer-fill mr-2"></i>Print</a><a class="dropdown-item" data-action="Download" href="#"><i  class="ri-file-download-fill mr-2"></i>Download</a></div></div></div></div><a href="./page-android.html" class="folder"><h5 class="mb-2">${name}</h5> <p class="mb-2"><i class="lar la-clock text-primary mr-2 font-size-20"></i>${this.dn()}</p><p class="mb-0"><i class="las la-file-alt text-primary mr-2 font-size-20"></i> 0 Files</p></a></div></div>
      `;
      fq.innerHTML = h;
      let fv = ns("#ga-bcdef");
      if (fv) {
        fv.parentNode.insertBefore(fq, fv);
        console.log("created", fv);
      }
    } else if (type.toLowerCase() === "file" && name != "") {
      fq.classList.add("col-lg-3", "col-md-6", "col-sm-6");
      let cx = `<div class="card card-block card-stretch card-height"><div class="card-body image-thumb"><a href="#" data-title="Terms.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal"><div class="mb-4 text-center p-3 rounded iq-thumb"><div class="iq-image-overlay"></div><img src="../../assets/images/layouts/page-1/pdf.png" class="img-fluid" alt="image1"></div><h6>${name}.pdf</h6> </a></div></div>`;
      fq.innerHTML = cx;
      let fv = ns("#dc-frwq");
      if (fv) {
        fv.parentNode.insertBefore(fq, fv.nextSibling);
        console.log("created", fv);
      } else {
        console.error("Failed to create element");
      }
    }
  }
  static Alerts = class {
    Info(m) {
      iziToast.success({
        title: "Success",
        message: m,
        position: "topRight",
        timeout: 5000,
      });
    };
    Errr(t) {
      iziToast.success({
        title: "Error",
        message: t,
        position: "topRight",
        timeout: 5000,
      });
    };

    Succ(e) {
      iziToast.success({
        title: "Success",
        message: e,
        position: "topRight",
        timeout: 5000,
      });
    };

    Warn(r) {
      iziToast.success({
        title: "Warning",
        message: r,
        position: "topRight",
        timeout: 5000,
      });
    };
  }

  static Storage = class {
    store(e, t) {
      let f = localStorage.setItem(e, t);
      return f;
    }
    restore(t) {
      let x = localStorage.getItem(t);
      return x;
    }
    empty() {
      return localStorage.clear();
    }
  };
}

class Admin extends Svx {
  constructor() {}
  AdminUI() {
    super.Elements();
  }
}

class Supervisors extends Svx {
  constructor() {}

  SupervisorsUI() {
    super.Elements();
  }
}

class Users extends Svx {
  constructor() {}
  SupervisorsUI() {
    super.Elements();
  }
}


/*
iziToast.show({
    title: 'Hello',
    message: 'This is a basic toast notification.',
    position: 'topRight', // topRight, topLeft, topCenter, bottomRight, bottomLeft, bottomCenter
    timeout: 5000, // Auto-dismiss after 5 seconds
});


// Success Toast
iziToast.success({
    title: 'Success',
    message: 'Operation completed successfully!',
    position: 'topRight',
    timeout: 5000,
});

// Info Toast
iziToast.info({
    title: 'Information',
    message: 'Here is some important information.',
    position: 'topRight',
    timeout: 5000,
});

// Warning Toast
iziToast.warning({
    title: 'Warning',
    message: 'Be cautious about this action!',
    position: 'topRight',
    timeout: 5000,
});

// Error Toast
iziToast.error({
    title: 'Error',
    message: 'An error occurred!',
    position: 'topRight',
    timeout: 5000,
});


iziToast.show({
    title: 'Custom Toast',
    message: 'This toast has custom styles.',
    icon: 'fa fa-user', // Font Awesome icon
    backgroundColor: '#3498db',
    progressBarColor: 'rgb(0, 255, 184)',
    position: 'bottomLeft',
    timeout: 7000,
    theme: 'dark', // Dark theme
});







iziToast.show({
    title: 'Interactive Toast',
    message: 'Click a button below to take action.',
    position: 'center',
    timeout: 0, // Disable auto-dismiss
    buttons: [
        ['<button>Confirm</button>', function(instance, toast) {
            console.log('Confirmed!');
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
        }],
        ['<button>Cancel</button>', function(instance, toast) {
            console.log('Cancelled');
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
        }]
    ],
    onOpening: function(instance, toast) {
        console.log('Toast is opening...');
    },
    onClosing: function(instance, toast, closedBy) {
        console.log('Toast is closing due to: ' + closedBy);
    }
});


iziToast.show({
    title: 'Custom Content',
    message: '<strong>This is a bold text</strong> with <a href="#">a link</a>.',
    position: 'bottomRight',
    timeout: 5000,
    layout: 2 
});



//Intro js
const intro = introJs();
intro.setOptions({
    steps: [
        {
            intro: "Welcome to the guided tour!"
    },
        {
            element: document.querySelector('#step1'),
            intro: "This is the first step."
    },
        {
            element: document.querySelector('#step2'),
            intro: "This is the second step."
    },
        {
            element: document.querySelector('#step3'),
            intro: "This is the third step."
    }
  ]
});
intro.start();






intro.oncomplete(function() {
    console.log('Tour completed!');
}).onexit(function() {
    console.log('Tour exited.');
}).onchange(function(element) {
    console.log('Currently on step:', this._currentStep);
});






//Toastr
toastr.info('This is an info message');
toastr.success('Success!', 'Operation completed successfully.');
toastr.warning('Warning!', 'There might be some issues.');
toastr.error('Error!', 'An error occurred.');



toastr.options = {
    closeButton: true, // Show close button
    debug: false, // Enable debug mode
    newestOnTop: true, // Show newest toast on top
    progressBar: true, // Show a progress bar
    positionClass: 'toast-top-right', // Position: top-right, top-left, top-center, bottom-right, bottom-left, bottom-center
    preventDuplicates: true, // Prevent duplicate notifications
    onclick: null, // Callback when toast is clicked
    showDuration: 300, // Duration of the toast animation (in milliseconds)
    hideDuration: 1000, // Duration of the toast hide animation (in milliseconds)
    timeOut: 5000, // How long the toast will display without user interaction (in milliseconds)
    extendedTimeOut: 1000, // How long the toast will display after a user hovers over it (in milliseconds)
    showEasing: 'swing', // Show easing animation
    hideEasing: 'linear', // Hide easing animation
    showMethod: 'fadeIn', // Show method (fadeIn, slideDown, and show are built into jQuery)
    hideMethod: 'fadeOut' // Hide method
};




toastr.success('This toast has a close button and progress bar', 'Title', {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
    timeOut: 10000
});



toastr.options = {
    onclick: function() { console.log('Toast clicked!'); },
    onShown: function() { console.log('Toast displayed!'); },
    onHidden: function() { console.log('Toast hidden!'); },
    onCloseClick: function() { console.log('Close button clicked!'); }
};

toastr.info('Click me or close me to see callbacks in action!');





/*
.toast - top - right {
        top: 12 px;
        right: 12 px;
    }

    .toast - success {
        background - color: #51a351;
}

.toast-error {
  background-color: # bd362f;
    }*
toastr.info('This is a custom-styled toast.', 'Custom Style', {
    className: 'custom-toast'
});




toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-center',
    timeOut: 5000,
    extendedTimeOut: 2000,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'slideDown',
    hideMethod: 'slideUp',
    onShown: function() { console.log('The toast is shown.'); },
    onHidden: function() { console.log('The toast is hidden.'); },
    onClick: function() { console.log('The toast was clicked.'); }
};

toastr.success('Successfully completed the operation.', 'Success');
*/