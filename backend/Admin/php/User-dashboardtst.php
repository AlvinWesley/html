<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Bungo Arch</title>
      <link rel="stylesheet" href="/BUNGOARCH/html/fileSharing/shareFiles.css"> 
      <link rel="stylesheet" href="/BUNGOARCH/html/notifications/notification.css"> 
      <link rel="stylesheet" href="/BUNGOARCH/html/Folders/addFolderStyle.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/FileUpload/fl3Mee/Uploadstyle.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/Folders/viewFolders/viewFolder.css">
      <link rel="shortcut icon" href="/BUNGOARCH/html/assets/images/favicon.ico" />
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/css/backend-plugin.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/iziToast.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/introjs.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/sweetalert2.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/toastr.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/css/backend.css?v=1.0.0">    
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/remixicon/fonts/remixicon.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/pdf/pdf.viewer.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/css/pptxjs.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/css/nv.d3.min.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/verySimpleImageViewer/css/jquery.verySimpleImageViewer.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.css">
        
      </head>
  <body class="  ">
    <id id="loading">
          <div id="loading-center">
          </div>
    </id>
    <div class="wrapper" id="po-tedax">     
      <?php
      include "test/userLayout/sidenav.php";
      include "test/userLayout/header.php";
      ?>
             
      
      <div class="content-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card-transparent card-block card-stretch card-height mb-3">
                        <div class="d-flex justify-content-between">                             
                            <div class="select-dropdown input-prepend input-append">
                                <div class="btn-group">
                                    <div data-toggle="dropdown">
                                        <!-- onclick="myFunction()" -->
                                    <div class="dropdown-toggle search-query" >USER<i class="las la-angle-down ml-3"></i></div><span class="search-replace"></span>
                                    <span class="caret"><!--icon--></span>
                                    </div>
                                    <ul class="dropdown-menu">
                                        <li><div class="item" id="new_flr_2"><i class="ri-folder-add-line pr-3 new_flr_2" ></i>New Folder</div></li>
                                        <li><div class="item" id="upl_fl_2" ><i class="ri-file-upload-line pr-3 upl_fl_2"></i>Upload Files</div></li>
                                        <li><div class="item" id="shr_fl_2"><i class="ri-folder-upload-line pr-3 shr_fl_3"></i>Share Files</div></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="dashboard1-dropdown d-flex align-items-center">
                                <div class="dashboard1-info">
                                    <a href="#calander" class="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i class="ri-arrow-down-s-line"></i>
                                    </a>
                                    <ul id="calander" class="iq-dropdown collapse list-inline m-0 p-0 mt-2">
                                        <li class="mb-2">
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Calander"><i
                                                    class="las la-calendar iq-arrow-left"></i></a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Keep"><i
                                                    class="las la-lightbulb iq-arrow-left"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="Tasks"><i
                                                    class="las la-tasks iq-arrow-left"></i></a>
                                        </li>                                        
                                    </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="navhm" class="col-lg-8">
                    <div class="card card-block card-stretch card-height iq-welcome" style="background: url(/BUNGOARCH/html/assets/images/layouts/mydrive/background.png) no-repeat scroll right center; background-color: #ffffff; background-size: contain;">
                        <div class="card-body property2-content">
                            <div class="d-flex flex-wrap align-items-center">
                                <div class="col-lg-6 col-sm-6 p-0">
                                    <h3 class="mb-3" id="fname"></h3>
                                    <p class="mb-5">You can view Your Files and Folders in one Place or share and Upload Files</p>
                                    <a href="#">Try Now<i class="las la-arrow-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Sbar" class="col-lg-4">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Quick Access</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-inline p-0 mb-0 row align-items-center">
                                <li class="col-lg-6 col-sm-6 mb-3 mb-sm-0" id="shr_fl_3"> 
                                    <div style="cursor: pointer;" class="p-2 text-center border rounded ">
                                        <div class="">
                                            <img src="/BUNGOARCH/html/assets/images/layouts/mydrive/folder-1.png" class="img-fluid mb-1" alt="image1">
                                        </div>
                                        <p class="mb-0 " >Share Files</p>
                                    </div>
                                </li>
                                <li class="col-lg-6 col-sm-6" id="upl_fl_3"> 
                                    <div  style="cursor: pointer;" class="p-2 text-center border rounded">
                                        <div class="upl_fl_2">
                                            <img src="/BUNGOARCH/html/assets/images/layouts/mydrive/folder-2.png" class="img-fluid mb-1" alt="image2">
                                        </div>
                                        <p class="mb-0">Upload Files </p>
                                    </div>
             
                                </li>
                                 <li class="col-lg-6 col-sm-6" id="nw_fldr_3"> 
                                    <div  style="cursor: pointer;" class="p-2 text-center border rounded">
                                        <div class="upl_fl_2">
                                            <img src="/BUNGOARCH/html/assets/images/layouts/mydrive/folder-2.png" class="img-fluid mb-1" alt="image2">
                                        </div>
                                        <p class="mb-0">New Folder</p>
                                    </div>
             
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                             
                <div id="CountryL" class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent ">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title">
                                <h4 class="card-title">Documents</h4>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                 <button style="margin: 2px; border:none; padding:5px; border-radius:5px; background:#C2C3CCFF" href="#" class=" view-more" id="upload_fl_ease">Upload New Files</button>
                                <a href="foldersNFiles.php" class=" view-more">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="FilesItemsWrapper">
                </div>
                <!-- <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb doc-text">
                            <a href="#" data-title="IOS-content.pptx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="/BUNGOARCH/html/assets/vendor/doc-viewer/files/demo.pptx" data-toggle="modal" data-target="#exampleModal">
                            <div class="mb-4 text-center p-3 rounded iq-thumb">
                                <div class="iq-image-overlay"></div>
                                <img src="/BUNGOARCH/html/assets/images/layouts/page-1/ppt.png" class="img-fluid" alt="image1">      
                            </div>
                            <h6>IOS-content.pptx</h6>   
                            </a>       
                        </div>
                    </div>
                </div> -->
                <div id="Ae3r" class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title">
                                <h4 class="card-title">Folders</h4>
                            </div>
                            <div class="addNewFlder">
                                <button style="padding:10px; border:none; border-radius:5px; outline :none">
                                    Add New Folder
                                </button>
                                
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg btn bg-white" id="dropdownMenuButton1"
                                        data-toggle="dropdown">
                                        Name<i class="ri-arrow-down-s-line ml-1"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right shadow-none"
                                        aria-labelledby="dropdownMenuButton1">
                                        <a class="dropdown-item" href="#">Last modified</a>
                                        <a class="dropdown-item" href="#">Last modifiedby me</a>
                                        <a class="dropdown-item" href="#">Last opened by me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="FolderItemsWrapper">
                    <!-- <div class="col-md-6 col-sm-6 col-lg-3 ">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">                            
                                    <div class="d-flex justify-content-between">
                                        <a href="./page-alexa.html" class="folder">
                                            <div class="icon-small rounded mb-4"style="background:green">
                                                <i class="ri-file-copy-line" style="color:red"></i>
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
                                        <h5 class="mb-2">Alexa Workshop</h5>
                                        <p class="mb-2"><i class="lar la-clock text-danger mr-2 font-size-20"></i> 10 Dec, 2020</p>
                                        <p class="mb-0"><i class="las la-file-alt text-danger mr-2 font-size-20"></i> 08 Files</p>
                                    </a>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- Deactivated UserReQuests -->
                <!-- <div id="Ae3e" class="col-lg-12 col-xl-12"> 
                    <div class="card card-block card-stretch card-height files-table">                   
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">User Requests</h4>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <a href="./page-files.html" class=" view-more">View All</a>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="table-responsive">
                                <table class="table mb-0 table-borderless tbl-server-info">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col"></th>
                                         <th scope="col">User id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">Date requested</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">User Type</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"><i class="ri-pencil-fill mr-2"></i></th>
                                    </tr>
                                </thead>
                                <tbody id="U_R_list">
                                   
                                     <tr class="active">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="icon-small bg-danger rounded mr-3">
                                                    <i class="ri-file-excel-line"></i>
                                                </div>
                                                 <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="/BUNGOARCH/html/assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="Weekly-report.pdf" style="cursor: pointer;">Weekly-report.pdf</div>  
                                            </div>
                                        </td>
                                        <td>001</td>
                                        <td>Alvin </td>
                                        <td>Wesley </td>
                                        <td>12/12/2004</td>
                                        <td>ICT</td>
                                        <td>online</td>
                                        <td>
                                            <div id="po-tedax" class="dropdown">
                                                <span class="dropdown-toggle" id="dropdownMenuButton7" data-toggle="dropdown">
                                                    <i class="ri-more-fill"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton7">
                                                    <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-4">
                    <div class="card card-block card-stretch card-height ">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title" id="Statistic">Statistic</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="layout-1-chart" style="min-height: 220px;"></div>
                            <div class="row mt-4">
                                <div class="col-lg-6 col-md-6 col-6">
                                    <div class="media align-items-center">
                                        <div class="icon iq-icon-box bg-primary rounded icon-statistic">
                                            <i class="las la-long-arrow-alt-down"></i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <p class="mb-0">Downloads</p>
                                            <h5>12,594</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-6">
                                    <div class="media align-items-center">
                                        <div class="icon iq-icon-box bg-light rounded icon-statistic">
                                            <i class="las la-long-arrow-alt-up"></i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <p class="mb-0">Uploads</p>
                                            <h5>1,458</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-4">
                    <div class="card card-block card-stretch card-height  plan-bg">
                        <div class="card-body">
                            <h4 class="mb-3 text-white">Unlock Your plan</h4>    
                            <p>Expanded Storage, Access To<br> More Features On CloudBOX</p>   
                            <div class="row align-items-center justify-content-between">
                               <div class="col-6 go-white ">
                                <a href="#" class="btn d-inline-block mt-5">Go Premium</a>
                               </div>
                                <div class="col-6">
                                    <img src="../../assets/images/layouts/mydrive/lock-bg.png" class="img-fluid" alt="image1">
                                </div>
                            </div>                     
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-8">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title">
                                <h4 class="card-title">Statistics</h4>
                            </div>

                            <div class="card-header-toolbar d-flex align-items-center">
                                <div class="dropdown">
                                    <span class="dropdown-toggle btn  dropdown-bg border border-primary text-primary rounded" id="dropdownMenuButton11"
                                        data-toggle="dropdown">
                                        Monthly<i class="ri-arrow-down-s-line ml-1"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right shadow-none"
                                        aria-labelledby="dropdownMenuButton11">
                                        <a class="dropdown-item" href="#">Monthly</a>
                                        <a class="dropdown-item" href="#">Weekly</a>
                                        <a class="dropdown-item" href="#">Yearly</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        


                        <div class="card-body pt-0">
                            <div id="layout-1-chart2"></div>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <footer class="iq-footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="/BUNGOARCH/html/backend/privacy-policy.html">Privacy Policy</a></li>
                        <li class="list-inline-item"><a href="/BUNGOARCH/html/backend/terms-of-service.html">Terms of Use</a></li>
                    </ul>
                </div>
                <div class="col-lg-6 text-right">
                    <span class="mr-1"><script>document.write(new Date().getFullYear())</script>©</span> <a href="#" class="">Bungo Arch</a>.
                </div>
            </div>
        </div>
    </footer>
    <script src="/BUNGOARCH/html/assets/vendor/ui/js/introjs.min.js"></script>
     <script src="/BUNGOARCH/html/assets/vendor/ui/js/toastr.min.js"></script>
     <script src="/BUNGOARCH/html/assets/vendor/ui/js/iziToast.min.js"></script>
     <script src="/BUNGOARCH/html/assets/vendor/ui/js/sweetalert2.min.js"></script>
     <script src="/BUNGOARCH/html/assets/vendor/ui/js/intro.min.js"></script>
     <script src="/BUNGOARCH/html/assets/js/files.js"></script>
    <script src="/BUNGOARCH/html/assets/js/guide.js"></script>
    <script src="/BUNGOARCH/html/assets/js/Admin.js"></script>
    <script src="/BUNGOARCH/html/assets/js/backend-bundle.min.js"></script>
    <script src="/BUNGOARCH/html/assets/js/customizer.js" defer></script>
    <script src="/BUNGOARCH/html/assets/js/chart-custom.js" defer></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/pdf/pdf.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/docx/jszip-utils.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/docx/mammoth.browser.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/filereader.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/d3.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/nv.d3.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/pptxjs.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/divs2slides.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/xlsx.full.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/verySimpleImageViewer/js/jquery.verySimpleImageViewer.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.js"></script>
    <script src="/BUNGOARCH/html/assets/js/app.js" defer></script>
    <script src="/BUNGOARCH/html/assets/js/doc-viewer.js" defer></script>
        <script src="/BUNGOARCH/html/assets/js/Functions/index.js"></script>
    <script src="/BUNGOARCH/html/assets/js/Functions/handler.js"></script>
    <script src="AdminDash.js"></script>
     <script src="/BUNGOARCH/html/FileUpload/fl3Mee/Uploadscript.js" ></script>
       <script src="/BUNGOARCH/html/FileUpload/fl3Mee/files.js" ></script>
     <script src="/BUNGOARCH/html/folders/folder.js" ></script>
    <script src="/BUNGOARCH/html/folders/viewFolders/viewFolder.js" ></script>
     <script src="/BUNGOARCH/html/fileSharing/share.js" ></script>
     <script src="/BUNGOARCH/html/notifications/notification.js" ></script>
     <script>
iziToast.error({
    title: 'Error',
    message: 'An error occurred!',
    position: 'topRight',
    timeout: 5000,
});

    </script>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Title</h4>
                    <div>
                        <a class="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="resolte-contaniner" style="height: 500px;" class="overflow-auto">
                        File not found
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</html>