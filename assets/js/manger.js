class Mng_Ui {
    constructor() {};

    static Custom = class {
        dx(f) { return document.createElement(f);}
        xd(f) { let c = document.querySelector(f);}
        static Hfile = class {
            
            folderop(s) {
                const prnt = xd(s);
            }

            filec(e) {}

            upload() {//Todo add realtime file upload progress bar (fetch || Ajax + backend)
                const gf = xd('#bn-2aw');
                const fg = xd('#bn-1wa');
                const selectImage = xd('.select-image');
                const inputFile = xd('#file');
                const imgArea = xd('.img-area');
                let isFilePreviewedFlag = false;
        
                selectImage.addEventListener('click', function() {
                    inputFile.click();
                    selectImage.style.display = 'none';
                    fg.style.display = 'block';
                    fg.style.display = 'block';
                });
        
                inputFile.addEventListener('change', function() {
                    fg.style.display = 'block';
                    fg.style.display = 'block';
                    isFilePreviewedFlag = true;
                    const file = this.files[0];
                    if (file.size < 5000000) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const allElements = imgArea.querySelectorAll('img, iframe, div, canvas');
                            allElements.forEach(item => item.remove());
                            const fileUrl = reader.result;
                            const fileType = file.type;
                            if (fileType.startsWith('image/')) {
                                const img = document.createElement('img');
                                img.src = fileUrl;
                                imgArea.appendChild(img);
                            } else if (fileType === 'application/pdf') {
                                renderPDF(fileUrl);
                            } else if (fileType === 'text/plain') {
                                const iframe = document.createElement('iframe');
                                iframe.style.width = '100%';
                                iframe.style.height = '100%';
                                iframe.src = 'data:text/html,' + encodeURIComponent('<pre>' + reader.result + '</pre>');
                                imgArea.appendChild(iframe);
                            } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                                renderDOCX(fileUrl);
                            } else if (fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
                                renderPPTX(file);
                            } else {
                                alert('File type not supported for preview.');
                            }     
                            imgArea.classList.add('active');
                            imgArea.dataset.img = file.name;
                        };
                        reader.readAsDataURL(file);
                    } else {
                        fg.style.display = 'none';
                        gf.style.display = 'none';
                        selectImage.style.display = 'block';
                        alert("File size more than 2MB");
                    }
                    gf.addEventListener('click', ()=> {
                        fg.style.display = 'none';
                        gf.style.display = 'none';
                        selectImage.style.display = 'block';
                    })
                });
        
        
                function clearPreview() {
                    const allElements = imgArea.querySelectorAll('img, iframe, div, canvas');
                    allElements.forEach(item => item.remove());
                    isFilePreviewedFlag = false;
                }
        
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
        
                function renderPDF(fileUrl) {
                    const loadingTask = pdfjsLib.getDocument(fileUrl);
                    loadingTask.promise.then(pdf => {
                        pdf.getPage(1).then(page => {
                            const viewport = page.getViewport({ scale: 1 });
                            const canvas = document.createElement('canvas');
                            const context = canvas.getContext('2d');
                            canvas.style.width = '100%';
                            canvas.style.height = '100%';
                            const scale = Math.min(
                                imgArea.clientWidth / viewport.width,
                                imgArea.clientHeight / viewport.height
                            );
                            const scaledViewport = page.getViewport({ scale });    
                            canvas.height = scaledViewport.height;
                            canvas.width = scaledViewport.width;     
                            const renderContext = {
                                canvasContext: context,
                                viewport: scaledViewport
                            };
                            page.render(renderContext).promise.then(() => {
                                imgArea.appendChild(canvas);
                            });
                        });
                    });
                }
        
                function renderDOCX(fileUrl) {
                    fetch(fileUrl)
                        .then(response => response.arrayBuffer())
                        .then(buffer => mammoth.convertToHtml({ arrayBuffer: buffer }))
                        .then(result => {
                            const div = document.createElement('div');
                            div.style.width = '100%';
                            div.style.height = '100%';
                            div.style.overflow = 'auto';
                            div.innerHTML = result.value;
                            imgArea.appendChild(div);
                        })
                        .catch(console.error);
                }
        
                function renderPPTX(file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const arrayBuffer = event.target.result;
                        PptxGenJS.load(arrayBuffer, function(pptx) {
                            const slide = pptx.slides[0];
                            slide.getThumbnail({ type: 'base64', mime: 'image/png' }, function(thumbnail) {
                                const img = document.createElement('img');
                                img.src = 'data:image/png;base64,' + thumbnail;
                                img.style.width = '100%';
                                img.style.height = '100%';
                                imgArea.appendChild(img);
                            });
                        });
                    };
                    reader.readAsArrayBuffer(file);
                }
        
                function isFilePreviewed() {
                    return isFilePreviewedFlag;
                }
            }
        }
    }

    static Alerts = class {
        static Swal2 = class {
            constructor() {
                this.v = ["error","info","success","question"];
            }
            Err(t,e,x) {
                Swal.fire({
                    icon: t || this.v[0],
                    title: e,
                    text: x,
                });
            }
            Suc(r,h,j) {
                Swal.fire({
                    icon: r || this.v[2],
                    title: h,
                    text: j,
                })
            }
            Inf(v,c,m) {
                Swal.fire({
                    icon: v || this.v[1],
                    title: c,
                    text: m, 
                })
            }

            Pop(mg) {
                return Swal.fire(mg);
            }

            Cst(a,b,e) {
                
            }

            Lnk(a,e,t,n,q,b = true) {
                (b === false) ? Swal.fire({icon: a,title: e,text: t,}) : Swal.fire({icon: a,title: e,text: t,footer: `<a href=${n}>${q}</a>`,});
            }
        }
        static Izit = class {
            constructor() {

            };
            
            Err() {}
            Suc() {}
            Inf() {}
            Tst() {}
        }
    }

    static Notification = class {
        El() {}
        Handle() {}
        Custom() {};
        FireBase() {};
    };

    static Bot_M = class {
        constructor() {}
        static Intro = class {}
    };
    static Files_M = class {};
}

export {
    Mng_Ui
};