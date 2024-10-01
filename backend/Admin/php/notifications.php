<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Bungo Arch :Files N Folders</title>
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
                <div class="notification-container" style="min-width:100%; flex-wrap:wrap; min-height:max-content">
                        <div class="header">
                            <h2>Notifications</h2>
                            <div class="search-unread">
                                <input type="text" id="search-bar2" class="search-bar" placeholder="Search notifications...">
                                <div class="unread-count">
                                    <span id="unread-count2">New: 0</span>
                                </div>
                                
                            </div>
                        </div>

                        <div id="notifications2" class="notifications" style="min-width:100%; min-height:fit-content">
                        You have Notifications at the moment
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