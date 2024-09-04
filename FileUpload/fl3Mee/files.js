// window.addEventListener("load",()=>{
// console.log("here Comes the Files");
// const fileDisp = document.querySelector(".FilesItemsWrapper");
// let xhrf=new XMLHttpRequest();
// let dispFiles=`Your Files Shall Display Here`;
// xhrf.open("GET", "/BUNGOARCH/html/FileUpload/fl3Mee/handleFiles.php",true);
//  xhrf.onload = function () {
//    if (this.status == 200) {
//      console.log("Hello This loadFiles function has executed");
//      console.log(xhrf.responseText);
//      var resultDataArr2 = JSON.parse(this.responseText);
//      console.log(resultDataArr2);
//      resultDataArr2.forEach(function (files) {
//      dispFiles = `
// <div  class="col-lg-3 col-md-6 col-sm-6">
//                     <div class="card card-block card-stretch card-height">
//                         <div class="card-body image-thumb">
//                             <a href="#" data-title="Terms.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="/BUNGOARCH/html/assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal">
//                                 <div class="mb-4 text-center p-3 rounded iq-thumb">
//                                     <div class="iq-image-overlay"></div>
//                                     <img src="/BUNGOARCH/html/assets/images/layouts/page-1/pdf.png" class="img-fluid" alt="image1">       
//                                 </div>
//                                 <h6>${files.file_name}</h6> 
//                             </a>             
//                         </div>
//                     </div>
//                 </div>

// `;
//        fileDisp.innerHTML += dispFiles;
//      });
//    }else{
//     console.log("Error in Files:"+xhrf.status)
//    }
//  };
//  xhrf.send();

// });
