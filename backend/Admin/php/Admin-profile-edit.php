

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Bungo Arch</title>
      
      <!-- Favicon -->
      <link rel="shortcut icon" href="/BUNGOARCH/html/assets/images/favicon.ico" />
      
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/css/backend-plugin.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/css/backend.css?v=1.0.0">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/iziToast.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/sweetalert2.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/ui/css/toastr.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/remixicon/fonts/remixicon.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/pdf/pdf.viewer.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/css/pptxjs.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/css/nv.d3.min.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/verySimpleImageViewer/css/jquery.verySimpleImageViewer.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.css">  </head>
  <body class="  ">
    <div id="loading">
          <div id="loading-center">
          </div>
    </div>
    <div class="wrapper">   
       <?php
      include "test/userLayout/sidenav.php";
      include "test/userLayout/header.php";
  ?>
      <div class="content-page">
      <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card">
                  <div class="card-body p-0">
                     <div class="iq-edit-list usr-edit">
                        <ul class="iq-edit-profile d-flex nav nav-pills">
                           <li class="col-md-3 p-0">
                              <a class="nav-link active" data-toggle="pill" href="#personal-information">
                              Personal Information
                              </a>
                           </li>
                           <li class="col-md-3 p-0">
                              <a class="nav-link" data-toggle="pill" href="#chang-pwd">
                              Change Password
                              </a>
                           </li>
                           <li class="col-md-3 p-0">
                              <a class="nav-link" data-toggle="pill" href="#emailandsms">
                              Email and SMS
                              </a>
                           </li>
                           <li class="col-md-3 p-0">
                              <a class="nav-link" data-toggle="pill" href="#manage-contact">
                              Manage Contact
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-12">
               <div class="iq-edit-list-data">
                  <div class="tab-content">
                     <div class="tab-pane fade active show" id="personal-information" role="tabpanel">
                        <div class="card">
                           <div class="card-header d-flex justify-content-between">
                              <div class="iq-header-title">
                                 <h4 class="card-title" id="prompt">Personal Information</h4>
                              </div>
                           </div>
                           <div class="card-body">
                              <form id="U_Details_update">
                                 <div class="form-group row align-items-center">
                                    <div class="col-md-12">
                                       <div class="profile-img-edit">
                                          <div class="crm-profile-img-edit">
                                             <img class="crm-profile-pic rounded-circle avatar-100" src="/BUNGOARCH/html/assets/images/user/11.png" alt="profile-pic">
                                             <div class="crm-p-image bg-primary">
                                                <i class="las la-pen upload-button"></i>
                                                <input class="file-upload" type="file" accept="image/*">
                                             </div>
                                          </div>                                          
                                       </div>
                                    </div>
                                 </div>
                                 <div class=" row align-items-center">
                                    
                                    <div class="form-group col-sm-6">
                                       <label for="fname">First Name:</label>
                                       <input type="text" class="form-control" id="fname" name="firstName">
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="lname">Last Name:</label>
                                       <input type="text" class="form-control" id="lname" name="lastName">
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="uname">User Name:</label>
                                       <input readonly type="text" class="form-control" id="uname" name="userName">
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="cname">Id-Number</label>
                                       <input readonly type="number" class="form-control" id="cname" name="nationalID">
                                        <div id="idNoErr"></div>
            
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="uEmail">Email</label>
                                       <input type="email" class="form-control" id="uEmail" name="Email" readonly>
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="Empno">Employee-Number</label>
                                       <input type="text" class="form-control" id="Empno" name="employeeNumber">
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label class="d-block">Gender:</label>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" id="customRadio6" name="customRadio1" class="custom-control-input" checked="">
                                          <label class="custom-control-label" for="customRadio6"> Male </label>
                                       </div>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" id="customRadio7" name="customRadio1" class="custom-control-input">
                                          <label class="custom-control-label" for="customRadio7"> Female </label>
                                       </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="dob">Date Of Birth:</label>
                                       <input class="form-control" id="dob" name="dateOfBirth" type="date" >

                                    </div>
                                   
                                    <div class="form-group col-sm-6">
                                       <label>County:</label>
                                       <select class="form-control" id="exampleFormControlSelect3">
                                          <option selected="">Bungoma</option>
                                          <option>Busia</option>
                                          <option>kitale</option>
                                       </select>
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label>Region:</label>
                                       <select class="form-control" id="exampleFormControlSelect4">
                                          <option selected="">Kanduyi</option>
                                          <option>kimilili</option>
                                          <option >Mayanja</option>
                                          <option>Chwele</option>
                                       </select>
                                    </div>
                                    <!-- <div class="form-group col-sm-12">
                                       <label>Address:</label>
                                       <textarea class="form-control" name="address" rows="5" style="line-height: 22px;">
                                       37 Cardinal Lane
                                       Petersburg, VA 23803
                                       United States of America
                                       Zip Code: 85001
                                       </textarea>
                                    </div> -->
                                 </div>
                                 <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                 <button type="reset" class="btn iq-bg-danger">Cancel</button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="chang-pwd" role="tabpanel">
                        <div class="card">
                           <div class="card-header d-flex justify-content-between">
                              <div class="iq-header-title">
                                 <h4 class="card-title">Change Password</h4>
                              </div>
                           </div>
                           <div class="card-body">
                              <form id="U_LogInDetails">
                                 <div class="form-group">
                                    <label for="cpass">Current Password:</label>
                                    <a href="javascripe:void();" class="float-right">Forgot Password</a>
                                    <input type="Password" class="form-control" id="cpass" value="">
                                 </div>
                                 <div class="form-group">
                                    <label for="npass">New Password:</label>
                                    <input type="Password" class="form-control" id="npass" name="password">
                                 </div>
                                 <div class="form-group">
                                    <label for="vpass">Verify Password:</label>
                                    <input type="Password" class="form-control" id="vpass" value="">
                                 </div>
                                 <button type="submit" class="btn btn-primary mr-2" name="submit">Submit</button>
                                 <button type="reset" class="btn iq-bg-danger">Cancel</button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="emailandsms" role="tabpanel">
                        <div class="card">
                           <div class="card-header d-flex justify-content-between">
                              <div class="iq-header-title">
                                 <h4 class="card-title">Email and SMS</h4>
                              </div>
                           </div>
                           <div class="card-body">
                              <form>
                                 <div class="form-group row align-items-center">
                                    <label class="col-md-3" for="emailnotification">Email Notification:</label>
                                    <div class="col-md-9 custom-control custom-switch">
                                       <input type="checkbox" class="custom-control-input" id="emailnotification" checked="">
                                       <label class="custom-control-label" for="emailnotification"></label>
                                    </div>
                                 </div>
                                 <div class="form-group row align-items-center">
                                    <label class="col-md-3" for="smsnotification">SMS Notification:</label>
                                    <div class="col-md-9 custom-control custom-switch">
                                       <input type="checkbox" class="custom-control-input" id="smsnotification" checked="">
                                       <label class="custom-control-label" for="smsnotification"></label>
                                    </div>
                                 </div>
                                 <div class="form-group row align-items-center">
                                    <label class="col-md-3" for="npass">When To Email</label>
                                    <div class="col-md-9">
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="email01">
                                          <label class="custom-control-label" for="email01">You have new notifications.</label>
                                       </div>
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="email02">
                                          <label class="custom-control-label" for="email02">You're sent a direct message</label>
                                       </div>
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="email03" checked="">
                                          <label class="custom-control-label" for="email03">Someone adds you as a connection</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row align-items-center">
                                    <label class="col-md-3" for="npass">When To Escalate Emails</label>
                                    <div class="col-md-9">
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="email04">
                                          <label class="custom-control-label" for="email04"> Upon new order.</label>
                                       </div>
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="email05">
                                          <label class="custom-control-label" for="email05"> New membership approval</label>
                                       </div>
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="email06" checked="" >
                                          <label class="custom-control-label" for="email06"> Member registration</label>
                                       </div>
                                    </div>
                                 </div>
                                 <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                 <button type="reset" class="btn iq-bg-danger">Cancel</button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="manage-contact" role="tabpanel">
                        <div class="card">
                           <div class="card-header d-flex justify-content-between">
                              <div class="iq-header-title">
                                 <h4 class="card-title">Manage Contact</h4>
                              </div>
                           </div>
                           <div class="card-body">
                              <form>
                                 <div class="form-group">
                                    <label for="cno">Contact Number:</label>
                                    <input type="text" class="form-control" id="cno"  readonly>
                                 </div>
                                 <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="text" class="form-control" id="email" readonly>
                                 </div>
                                 <!-- <div class="form-group">
                                    <label for="url">Url:</label>
                                    <input type="text" class="form-control" id="url" value="https://getbootstrap.com">
                                 </div> -->
                                 <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                 <button type="reset" class="btn iq-bg-danger">Cancel</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
    </div>
    <!-- Wrapper End-->
    <footer class="iq-footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="../backend/privacy-policy.php">Privacy Policy</a></li>
                        <li class="list-inline-item"><a href="../backend/terms-of-service.php">Terms of Use</a></li>
                    </ul>
                </div>
                <div class="col-lg-6 text-right">
                    <span class="mr-1"><script>document.write(new Date().getFullYear())</script>©</span> <a href="#" class="">Bungo Arch</a>.
                </div>
            </div>
        </div>
    </footer>
    <!-- Backend Bundle JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/backend-bundle.min.js"></script>
    
    <!-- Chart Custom JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/customizer.js" defer></script>
    
    <!-- Chart Custom JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/chart-custom.js" defer></script>
    <script src="/BUNGOARCH/html/assets/vendor/ui/js/toastr.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/ui/js/iziToast.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/ui/js/sweetalert2.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/ui/intro.js"></script>
   <script src="/BUNGOARCH/html/assets/js/guide.js"></script>
   <script src="/BUNGOARCH/html/assets/js/Admin.js"></script>
    <!--PDF-->
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/pdf/pdf.js"></script>
    <!--Docs-->
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/docx/jszip-utils.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/docx/mammoth.browser.min.js"></script>
    <!--PPTX-->
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/filereader.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/d3.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/nv.d3.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/pptxjs.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/js/divs2slides.js"></script>
    <!--All Spreadsheet -->
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.js"></script>
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/xlsx.full.min.js"></script>
    <!--Image viewer-->
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/verySimpleImageViewer/js/jquery.verySimpleImageViewer.js"></script>
    <!--officeToHtml-->
    <script src="/BUNGOARCH/html/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.js"></script>
    <!-- app JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/app.js" defer></script>
    <script src="/BUNGOARCH/html/assets/js/doc-viewer.js" defer></script>
    <script src="Admin.js"></script>
     <!-- Modal -->
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