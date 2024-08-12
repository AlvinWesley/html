const form = document.querySelector("form"),
    fileInput = document.querySelector(".file-input"),
    progressArea = document.querySelector(".progress-area"),
    uploadedArea = document.querySelector(".uploaded-area");
const pr = document.querySelector('.img-area'),
    df = document.querySelector('#hd-e1t3'),
    allImg = pr.querySelectorAll('img'),
    vc = document.querySelector('.wrapper > header');
df.textContent = 'Browse File to Upload';


const cxe = (e) => {
    if (e) {
        e.forEach(item => item.remove());
    }
};

form.addEventListener("click", () => {
    fileInput.click();
});

fileInput.onchange = ({ target }) => {
    let fl = target.files[0];
    if (fl) {
        let fileName = fl.name,
            ex = fileName.split('.').pop().toLowerCase();
        if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(ex)) {
            loadpr(fl);
        }
        if (fileName.length >= 12) {
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        uploadFile(fileName);
    } else {
        if (fileName.length >= 12) {
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        uploadFile(fileName);
    }
    //alert('File uploaded successfully');
};

function loadpr(mg) {
    if (mg.size < 2000000) {
        df.textContent = 'Image Preview';
        pr.style.display = 'flex';
        vc.classList.add('nb-3rse7');
        const reader = new FileReader();
        reader.onload = () => {
            cxe(allImg);
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            pr.appendChild(img);
            pr.classList.add('active');
            pr.dataset.img = mg.name;
        }
        reader.readAsDataURL(mg);
    } else {
        frt("Image size is greater than 2MB");
        return;
    }
    
}




// file upload function
function uploadFile(name) {
    let xhr = new XMLHttpRequest(); //creating new xhr object (AJAX)
    xhr.open("POST", "php/upload.php"); //sending post request to the specified URL
    xhr.upload.addEventListener("progress", ({ loaded, total }) => { //file uploading progress event
        let fileLoaded = Math.floor((loaded / total) * 100); //getting percentage of loaded file size
        let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
        let fileSize;
        // if file size is less than 1024 then add only KB else convert this KB into MB
        (fileTotal < 1024) ? fileSize = fileTotal + " KB": fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
        let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
        // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
        uploadedArea.classList.add("onprogress");
        progressArea.innerHTML = progressHTML;
        if (loaded == total) {
            progressArea.innerHTML = "";
            let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
            uploadedArea.classList.remove("onprogress");
            // uploadedArea.innerHTML = uploadedHTML; //uncomment this line if you don't want to show upload history
            uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //remove this line if you don't want to show upload history
        }
    });
    let data = new FormData(form); //FormData is an object to easily send form data
    xhr.send(data); //sending form data
}