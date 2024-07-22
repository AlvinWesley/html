<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Bungo Arch</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="../../assets/images/favicon.ico" />

    <link rel="stylesheet" href="../../assets/css/backend-plugin.min.css" />
    <link rel="stylesheet" href="../../assets/css/backend.css?v=1.0.0" />

    <link
      rel="stylesheet"
      href="../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="../../assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="../../assets/vendor/remixicon/fonts/remixicon.css"
    />

    <!-- Viewer Plugin -->
    <!--PDF-->
    <link
      rel="stylesheet"
      href="../../assets/vendor/doc-viewer/include/pdf/pdf.viewer.css"
    />
    <!--Docs-->
    <!--PPTX-->
    <link
      rel="stylesheet"
      href="../../assets/vendor/doc-viewer/include/PPTXjs/css/pptxjs.css"
    />
    <link
      rel="stylesheet"
      href="../../assets/vendor/doc-viewer/include/PPTXjs/css/nv.d3.min.css"
    />
    <!--All Spreadsheet -->
    <link
      rel="stylesheet"
      href="../../assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.css"
    />
    <!--Image viewer-->
    <link
      rel="stylesheet"
      href="../../assets/vendor/doc-viewer/include/verySimpleImageViewer/css/jquery.verySimpleImageViewer.css"
    />
    <!--officeToHtml-->
    <link
      rel="stylesheet"
      href="../../assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.css"
    />
    <style></style>
  </head>
  <body class=" ">
    <div id="loading">
      <div id="loading-center"></div>
    </div>
    <div class="wrapper">
      <section class="login-content">
        <div class="container h-100">
          <div
            class="row justify-content-center align-items-center height-self-center"
          >
            <div class="col-md-5 col-sm-12 col-12 align-self-center">
              <div class="sign-user_card">
                  <img
                  src="../../assets/images/logo/logo.png"
                  class="img-fluid rounded-normal light-logo logo"
                  alt="logo"
                /> <h3><strong>Bungo Arch</strong></h3>
                <img
                  src="../../assets/images/logo/logo.png"
                  class="img-fluid rounded-normal darkmode-logo logo"
                  alt="logo"
                />
                <h2 id="Adu5b3w1" class="mb-3"></h2>
                <p>Enter your password to access the admin.</p>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="floating-label form-group">
                        <input
                          class="floating-input form-control"
                          type="password"
                          placeholder=" "
                        />
                        <label>Password</label>
                      </div>
            
                    </div>
                  </div>
                  <button id="uc-97t4" class="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <script>
      const y = () => {
        var bn = document.querySelector("#Adu5b3w1");
        let name = "Njoki";
        bn.textContent = `Hello ! ${name}`;
      };
      y();

      
    </script>
    <script src="../../assets/js/backend-bundle.min.js"></script>
    <script src="../../assets/js/customizer.js" defer></script>
    <script src="../../assets/js/chart-custom.js" defer></script>
    <script src="../../assets/vendor/doc-viewer/include/pdf/pdf.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/docx/jszip-utils.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/docx/mammoth.browser.min.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/PPTXjs/js/filereader.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/PPTXjs/js/d3.min.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/PPTXjs/js/nv.d3.min.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/PPTXjs/js/pptxjs.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/PPTXjs/js/divs2slides.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/SheetJS/xlsx.full.min.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/verySimpleImageViewer/js/jquery.verySimpleImageViewer.js"></script>
    <script src="../../assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.js"></script>
    <script src="../../assets/js/app.js" defer></script>
    <script src="../../assets/js/doc-viewer.js" defer></script>
  </body>
</html>
