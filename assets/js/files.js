const  store = (ky,vl,s=false,g=false,r=false) => {
  let x,k,p;
  if (s === true && j === false && ky && vl !== null) {
    Object.prototype.toString.call(vl) === "[object Array]"
    ? x = localStorage.setItem(ky,JSON.stringify(vl))
    : typeof(vl) === "object" && Object.prototype.isPrototypeOf(vl)
    ? x = localStorage.setItem(ky,JSON.stringify(vl))
    : x = localStorage.setItem(ky,vl);
  } else if (s === false && g === true && ky && vl !== null) {} else {}
},
tracker = (folder,file) => {
  if (folder) { 
    let g = [];
    g.push(folder);
  } else if (file) {
    let s = [],w = [], q = [];
  } else {
    console.log("Error: Unsupported item type");
  }
},
u = (...a) => {
    if (a.length === 0) {
      return null;
    }
    var fc = a.map((b) => `.${b}`).join("");
    return document.querySelectorAll(fc)?.length
      ? document.querySelectorAll(fc)
      :[];
  },
  e = (cn) => document.querySelector(`${cn}`),
  h = (z,d) => {!z ? (()=> {return})():(()=> {return z.removeAttribute(d)})()},
  b = (cn, y) => {
    let e = document.querySelector(`${cn}`);
    if (e) {
      let f = e.parentNode;
      f.insertBefore(y, e);
    }
  },
  g = (e) => document.createElement(e);

function addFileOrFolder(type, name, category) {
  const cx = e("#fd-f5d3n"),
    xc = e("#fl-l5efq"),
    n = g("div"),
    tf = g("div"),
    ft = g("div");
    let btx = () => {
      let w = new Date(),
      m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
      ,d = w.getDate(),h = m[w.getMonth()],r = w.getFullYear(),v = `${d} ${h} ${r}`;
      return v;   
    },ol = btx();
  if (type === "folder" && !category) {
    n.classList.add("col-md-6", "col-sm-6", "col-lg-3");
    tf.classList.add("card", "card-block", "card-stretch", "card-height");
    n.appendChild(tf); 
    tf.innerHTML = `
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <a href="./page-alexa.html" class="folder">
                                    <div class="icon-small bg-danger rounded mb-4">
                                        <i class="ri-file-copy-line"></i>
                                    </div>
                                </a>
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown">
                                            <i class="ri-more-2-fill"></i>
                                        </span>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                            <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                            <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                            <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                            <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                            <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="./page-alexa.html" class="folder">
                                <h5 class="mb-2">${name}</h5>
                                <p class="mb-2"><i class="lar la-clock text-danger mr-2 font-size-20"></i>${ol}</p>
                                <p class="mb-0"><i class="las la-file-alt text-danger mr-2 font-size-20"></i> 0 Files</p>
                            </a>
                        </div>
                    </div>
    `;
    let z = cx.parentNode.insertBefore(n, cx);
    return z;
  } else if (type === "file") {
    ft.classList.add("col-lg-3","col-md-6", "col-sm-6");
    category === "pdf"
      ? (ft.innerHTML = `<div class="card card-block card-stretch card-height"><div class="card-body image-thumb"> <a href="#"id="pdf-container"  data-title="Terms.pdf"  data-load-file="file" data-load-target="#resolte-contaniner"  data-url="../../assets/vendor/doc-viewer/files/demo.pdf"  data-toggle="modal" data-target="#exampleModal" ><div class="mb-4 text-center p-3 rounded iq-thumb"><div class="iq-image-overlay"></div> <img src="../../assets/images/layouts/page-1/pdf.png"class="img-fluid" alt="pdf"/></div><h6>${name}</h6></a></div> </div>`)
      : category == "docx"
      ? (ft.innerHTML = `<div class="card card-block card-stretch card-height"><div class="card-body image-thumb"> <a href="#"id="docx-container"data-title="New-one.docx"data-load-file="file"data-load-target="#resolte-contaniner"data-url="../../assets/vendor/doc-viewer/files/demo.docx"data-toggle="modal" data-target="#exampleModal"><div class="mb-4 text-center p-3 rounded iq-thumb"><div class="iq-image-overlay"></div><img src="../../assets/images/layouts/page-1/doc.png"class="img-fluid"alt="image1"/></div> <h6>${name}</h6></a> </div></div>`)
      : category == "xlsx"
      ? (ft.innerHTML = `<div class="card card-block card-stretch card-height"><div class="card-body image-thumb"><a href="#"id="xlsx-container"data-title="Woo-box.xlsx"data-load-file="file"data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.xlsx"data-toggle="modal"data-target="#exampleModal"><div class="mb-4 text-center p-3 rounded iq-thumb"><div class="iq-image-overlay"></div><img src="../../assets/images/layouts/page-1/xlsx.png"class="img-fluid"alt="image1"/> </div><h6>${name}</h6></a></div></div>`)
      : category == "ppt"
      ? (ft.innerHTML = `<div class="card card-block card-stretch card-height"><div class="card-body image-thumb doc-text"><a href="#"id="pptx-container"data-title="IOS-content.pptx"data-load-file="file"data-load-target="#resolte-contaniner"data-url="../../assets/vendor/doc-viewer/files/demo.pptx"data-toggle="modal"data-target="#exampleModal"><div class="mb-4 text-center p-3 rounded iq-thumb"><div class="iq-image-overlay"></div><img src="../../assets/images/layouts/page-1/ppt.png"class="img-fluid"alt="image1"/></div><h6>${name}</h6></a></div></div>`)
      : (()=>{h(ft,"class");console.log("Error: An error occurred");return;})();
    let v = xc.parentNode.insertBefore(ft, xc);
    return v;
  } else {
    console.log("Invalid-param: Unable to create folder")
    return;
  }
}

