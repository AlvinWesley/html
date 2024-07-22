
<?php 
//include "signup.php";
// $date=date('H');
// function sayGreetings($time){
//    $greeting='Good Day';
// switch(true){
//    case ($time>-1 && $time <12) :
//        $greeting= "Good Morning";
//        break;
//    case ($time>11 && $time <18) :
//            $greeting= "Good Afternoon";
//            break;
//    case ($time>17 && $time <24) :
//                $greeting= "Good Evening";
//                break;

// }
// return $greeting;
// }
// $greeting=sayGreetings($date);
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Bungo Arch</title>
      
      <!-- Favicon -->
      <link rel="shortcut icon" href="/BUNGOARCH/html/assets/images/favicon.ico" />
      <link rel="shortcut icon" href="/BUNGOARCH/html/assets/images/favicon.ico" />  
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/css/backend-plugin.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/css/backend.css?v=1.0.0">
      
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css">
      <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/remixicon/fonts/remixicon.css">
      
      <!-- Viewer Plugin -->
        <!--PDF-->
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/pdf/pdf.viewer.css">
        <!--Docs-->
        <!--PPTX-->
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/css/pptxjs.css">
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/PPTXjs/css/nv.d3.min.css">
        <!--All Spreadsheet -->
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.css">
        <!--Image viewer-->
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/verySimpleImageViewer/css/jquery.verySimpleImageViewer.css">
        <!--officeToHtml-->
        <link rel="stylesheet" href="/BUNGOARCH/html/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.css"></head>
  <body class=" ">
    <!-- loader Start -->
    <div id="loading">
          <div id="loading-center">
          </div>
    </div>
    <!-- loader END -->
    
      <div class="wrapper">
      <section class="login-content">
         <div class="container h-100">
            <div class="row justify-content-center align-items-center height-self-center">
               <div class="col-md-5 col-sm-12 col-12 align-self-center">
                  <div class="sign-user_card">
                        <img src="/BUNGOARCH/html/assets/images/logo.png" class="img-fluid rounded-normal light-logo logo" alt="logo">
                        <img src="/BUNGOARCH/html/assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo logo" alt="logo">
                     <h3 class="mb-3">Sign Up</h3>
                     <p>Create your  account.</p>
                     <form id="signUpForm">
                     <div class="formPrompt" style="background:purple; color:white; padding:5px; margin-bottom: 10px; border-radius: 10px;" id="formPrompt"></div>
                        <div class="row">
                           <div class="col-lg-6">
                              <div class="floating-label form-group">
                                 <input class="floating-input form-control" type="text" placeholder=" " id="firstName" name="firstName" value="">
                                 <label>First Name</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtFirstName" value="">
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="floating-label form-group">
                                 <input class="floating-input form-control" type="text" placeholder=" " name="lastName" id="lastName">
                                 <label>Last Name</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtLastName">
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12">
                              <div class="floating-label form-group">
                                 <input class="floating-input form-control" type="tel" placeholder=" " name="phone" id="phone">
                                 <label>Phone</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtPhone">
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12">
                              <div class="floating-label form-group">
                                 <input class="floating-input form-control" type="email" placeholder="" name="email" id="email" >
                                 <label>Email</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtEmail">  
                              </div>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="floating-label form-group">
                                 <input class="floating-input form-control" type="password" placeholder=" " name="password" id="password">
                                 <label>Password</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtPassword">
                              </div>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="floating-label form-group">
                                 <input class="floating-input form-control" type="password" placeholder=" " name="confirmPassword" id="confirmPassword">
                                 <label>Confirm Password</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtConfirmPassword">
                                </div>
                              </div>
                           </div>
                           <div class="col-lg-12">
                              <div class="custom-control custom-checkbox mb-3 text-left">
                                 <input type="checkbox" class="custom-control-input" id="customCheck1" name="termsOfAgreement" value="1">
                                 <label class="custom-control-label" for="customCheck1">I agree with the terms of use</label>
                                 <div style="color:rgb(255, 94, 0); padding-left: 10px; font-size: 12px; text-align: left;" id="txtCustomCheck1">
                                 </div>
                              </div>
                           </div>
                        </div>
                        <!-- <input type="submit" value="Submit the Data" name="submit"> -->
                        <button type="submit" class="btn btn-primary sign_in_btn" name="submit" id="signUpBtn">Sign Up</button>
                        <p class="mt-3">
                           Already have an Account <a href="/BungoArch/html/backend/php/signin/auth-sign-in.php"  class="text-primary ">Sign In</a>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </div>
    
    <!-- Backend Bundle JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/backend-bundle.min.js"></script>
    
    <!-- Chart Custom JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/customizer.js" defer></script>
    
    <!-- Chart Custom JavaScript -->
    <script src="/BUNGOARCH/html/assets/js/chart-custom.js" defer></script>
    
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
    <script src="Signup.js"></script>
  </body>
</html>