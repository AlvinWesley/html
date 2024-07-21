/*const fileList = document.querySelector(".file-list"),
    rt = document.querySelector('.uploader-title'),
    bm = document.querySelector('.cn-xdpe'),
    vc = document.querySelector('.img-area'),
    allImg = vc.querySelectorAll('img'),
    cxe = (e) => { if (e) { e.forEach(item => item.remove()); } },
    fileBrowseButton = document.querySelector(".file-browse-button"),
    fileBrowseInput = document.querySelector(".file-browse-input"),
    fileUploadBox = document.querySelector(".file-upload-box"),
    fileCompletedStatus = document.querySelector(".file-completed-status");

rt.textContent = 'Browse to Upload';
let totalFiles = 0,
    completedFiles = 0;

const createFileItemHTML = (file, uniqueIdentifier) => {
        const { name, size } = file,
        extension = name.split(".").pop(),
            formattedFileSize = size >= 1024 * 1024 ? `${(size / (1024 * 1024)).toFixed(2)} MB` : `${(size / 1024).toFixed(2)} KB`;
        return `<li class="file-item" id="file-item-${uniqueIdentifier}"><div class="file-extension">${extension}</div><div class="file-content-wrapper"><div class="file-content"><div class="file-details"><h5 class="file-name">${name}</h5><div class="file-info"><small class="file-size">0 MB / ${formattedFileSize}</small><small class="file-divider">•</small><small class="file-status">Uploading...</small></div></div><button class="cancel-button"><i class="fas fa-times"></i></button></div><div class="file-progress-bar"><div class="file-progress"></div></div></div></li>`;
    },

    handleFileUploading = (file, uniqueIdentifier) => {
        const xhr = new XMLHttpRequest(),
            formData = new FormData();
        formData.append("file", file);
        xhr.upload.addEventListener("progress", (e) => {
            const fileProgress = document.querySelector(`#file-item-${uniqueIdentifier} .file-progress`),
                fileSize = document.querySelector(`#file-item-${uniqueIdentifier} .file-size`),
                formattedFileSize = file.size >= 1024 * 1024 ? `${(e.loaded / (1024 * 1024)).toFixed(2)} MB / ${(e.total / (1024 * 1024)).toFixed(2)} MB` : `${(e.loaded / 1024).toFixed(2)} KB / ${(e.total / 1024).toFixed(2)} KB`;
            progress = Math.round((e.loaded / e.total) * 100),
                fileProgress.style.width = `${progress}%`;
            fileSize.innerText = formattedFileSize;
        });
        xhr.open("POST", "api.php", true);
        xhr.send(formData);
        return xhr;
    },

    handleSelectedFiles = ([...files]) => {
        if (files.length === 0) return;
        totalFiles += files.length;
        files.forEach((file, index) => {
            const uniqueIdentifier = Date.now() + index,
                fileItemHTML = createFileItemHTML(file, uniqueIdentifier);
            fileList.insertAdjacentHTML("afterbegin", fileItemHTML);
            const currentFileItem = document.querySelector(`#file-item-${uniqueIdentifier}`),
                cancelFileUploadButton = currentFileItem.querySelector(".cancel-button"),
                xhr = handleFileUploading(file, uniqueIdentifier);
            updateFileStatus = (status, color) => {
                currentFileItem.querySelector(".file-status").innerText = status;
                currentFileItem.querySelector(".file-status").style.color = color;
            }
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    completedFiles++;
                    cancelFileUploadButton.remove();
                    updateFileStatus("Completed", "#00B125");
                    fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
                }
            });
            cancelFileUploadButton.addEventListener("click", () => {
                xhr.abort();
                updateFileStatus("Cancelled", "#E3413F");
                cancelFileUploadButton.remove();
            });
            xhr.addEventListener("error", () => {
                updateFileStatus("Error", "#E3413F");
                alert("An error occurred during the file upload!");
            });
        });
        fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
    },

    ldpr = (r) => {
        if (mg.size < 5000000) {
            rt.textContent = 'Image Preview';
            bm.style.display = 'block';
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
            frt("Image size is greater than 5MB");
            return;
        }
    },

    xq = (e) => {
        let ex = e.split('.').pop().toLowerCase();
        return ex;
    };


fileUploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    let g = xq(e.dataTransfer.files);
    if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
        loadpr(e.dataTransfer.files);
    } else {
        handleSelectedFiles(e.dataTransfer.files);
        fileUploadBox.classList.remove("active");
        fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
    }
});


fileUploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    let g = xq(e.dataTransfer.files);
    if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
        loadpr(e.dataTransfer.files);
    } else {
        handleSelectedFiles(e.dataTransfer.files);
        fileUploadBox.classList.remove("active");
        fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
    }
    fileUploadBox.classList.add("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Release to upload or";
});


fileUploadBox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    let g = xq(e.dataTransfer.files);
    if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
        loadpr(e.dataTransfer.files);
    } else {
        handleSelectedFiles(e.dataTransfer.files);
        fileUploadBox.classList.remove("active");
        fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
    }
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});

fileBrowseInput.addEventListener("change", (e) => {
    let g = xq(e.target.files);
    if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
        loadpr(e.target.files);
    } else {
        handleSelectedFiles(e.target.files)
    }
});

fileBrowseButton.addEventListener("click", () => fileBrowseInput.click());
*/

const fileList = document.querySelector(".file-list"),
    rt = document.querySelector('.uploader-title'),
    bm = document.querySelector('.cn-xdpe'),
    vc = document.querySelector('.img-area'),
    allImg = vc.querySelectorAll('img'),
    as = document.querySelector('bnt pe-x'),qa = document.querySelector('bnt ce-x'),
    cxe = (e) => { if (e) { e.forEach(item => item.remove()); } },
    fileBrowseButton = document.querySelector(".file-browse-button"),
    fileBrowseInput = document.querySelector(".file-browse-input"),
    fileUploadBox = document.querySelector(".file-upload-box"),
    fileCompletedStatus = document.querySelector(".file-completed-status");

rt.textContent = 'Browse to Upload';
let totalFiles = 0,
    completedFiles = 0;

const createFileItemHTML = (file, uniqueIdentifier) => {
        const { name, size } = file,
        extension = name.split(".").pop(),
            formattedFileSize = size >= 1024 * 1024 ? `${(size / (1024 * 1024)).toFixed(2)} MB` : `${(size / 1024).toFixed(2)} KB`;
        return `<li class="file-item" id="file-item-${uniqueIdentifier}"><div class="file-extension">${extension}</div><div class="file-content-wrapper"><div class="file-content"><div class="file-details"><h5 class="file-name">${name}</h5><div class="file-info"><small class="file-size">0 MB / ${formattedFileSize}</small><small class="file-divider">•</small><small class="file-status">Uploading...</small></div></div><button class="cancel-button"><i class="fas fa-times"></i></button></div><div class="file-progress-bar"><div class="file-progress"></div></div></div></li>`;
    },

    handleFileUploading = (file, uniqueIdentifier) => {
        const xhr = new XMLHttpRequest(),
            formData = new FormData();
        formData.append("file", file);
        xhr.upload.addEventListener("progress", (e) => {
            const fileProgress = document.querySelector(`#file-item-${uniqueIdentifier} .file-progress`),
                fileSize = document.querySelector(`#file-item-${uniqueIdentifier} .file-size`),
                formattedFileSize = file.size >= 1024 * 1024 ? `${(e.loaded / (1024 * 1024)).toFixed(2)} MB / ${(e.total / (1024 * 1024)).toFixed(2)} MB` : `${(e.loaded / 1024).toFixed(2)} KB / ${(e.total / 1024).toFixed(2)} KB`;
            progress = Math.round((e.loaded / e.total) * 100),
                fileProgress.style.width = `${progress}%`;
            fileSize.innerText = formattedFileSize;
        });
        xhr.open("POST", "api.php", true);
        xhr.send(formData);
        return xhr;
    },

    handleSelectedFiles = ([...files]) => {
        if (files.length === 0) return;
        totalFiles += files.length;
        files.forEach((file, index) => {
            const uniqueIdentifier = Date.now() + index,
                fileItemHTML = createFileItemHTML(file, uniqueIdentifier);
            fileList.insertAdjacentHTML("afterbegin", fileItemHTML);
            const currentFileItem = document.querySelector(`#file-item-${uniqueIdentifier}`),
                cancelFileUploadButton = currentFileItem.querySelector(".cancel-button"),
                xhr = handleFileUploading(file, uniqueIdentifier);
            updateFileStatus = (status, color) => {
                currentFileItem.querySelector(".file-status").innerText = status;
                currentFileItem.querySelector(".file-status").style.color = color;
            }
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    completedFiles++;
                    cancelFileUploadButton.remove();
                    updateFileStatus("Completed", "#00B125");
                    fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
                }
            });
            cancelFileUploadButton.addEventListener("click", () => {
                xhr.abort();
                updateFileStatus("Cancelled", "#E3413F");
                cancelFileUploadButton.remove();
            });
            xhr.addEventListener("error", () => {
                updateFileStatus("Error", "#E3413F");
                alert("An error occurred during the file upload!");
            });
        });
        fileCompletedStatus.innerText = `${completedFiles} / ${totalFiles} files completed`;
    },
    
    ldpr = (file) => {
        rt.textContent = 'Image Preview';
        bm.style.display = 'block';
        vc.classList.add('nb-3rse7');
        const reader = new FileReader();
        reader.onload = () => {
            cxe(allImg);
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            pr.appendChild(img);
            pr.classList.add('active');
            pr.dataset.img = file.name;
        }
        reader.readAsDataURL(file);
    };
    
    let xq = (file) => {
        let ex = file.name.split('.').pop().toLowerCase();
        return ex;
    };
    
    fileUploadBox.addEventListener("drop", (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        let g = xq(files[0]);
        if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
            ldpr(files[0]); // Pass the first file to ldpr
        } else {
            handleSelectedFiles(files);
            fileUploadBox.classList.remove("active");
            fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
        }
    });

    /*ldpr = (r) => {
        rt.textContent = 'Image Preview';
        bm.style.display = 'block';
        vc.classList.add('nb-3rse7');
        const reader = new FileReader();
        reader.onload = () => {
            cxe(allImg);
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            pr.appendChild(img);
            pr.classList.add('active');
            pr.dataset.img = r.name;
        }
        reader.readAsDataURL(r);
    },

    xq = (file) => {
        let ex = file.name.split('.').pop().toLowerCase();
        return ex;
    };


fileUploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    let g = xq(files[0]);
    if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
        ldpr(files);
    } else {
        handleSelectedFiles(files);
        fileUploadBox.classList.remove("active");
        fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
    }
});*/


fileUploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileUploadBox.classList.add("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Release to upload or";
});


fileUploadBox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});

fileBrowseInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    let g = xq(files[0]);
    if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(g)) {
        ldpr(files);
    } else {
        handleSelectedFiles(files)
    }
});



fileBrowseButton.addEventListener("click", () => fileBrowseInput.click());