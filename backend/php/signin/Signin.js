let g;
function gr() {
  const d = new Date();
  const h = d.getHours();
  g = h < 12 ? "Good Morning" : h < 18 ? "Good Afternoon" : "Good Evening";
  document.getElementById("formPrompt").textContent = g;
}

gr();
setInterval(gr, 3600 * 1000);

document.getElementById("Frm_SignIn").addEventListener("submit", signUpForm);

function signUpForm(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  var userName = document.getElementById("us_n").value;
  var password = document.getElementById("us_p").value;
  var sendData =
    "signIn=Submit&userName=" + userName + "&userPassword=" + password;

  xhr.open("POST", "signin.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    var response = JSON.parse(this.responseText);
    document.getElementById("formPrompt").innerText = response.formPrompt;
    document.getElementById("txt_us_n").innerText = response.userNamePrompt;
    document.getElementById("txt_us_p").innerText = response.userPassPrompt;

    if (response.sc) {
    // Clear the previous session ID from sessionStorage
    sessionStorage.removeItem("sessionId"); 
    sessionStorage.clear();
    
    // Store the new session ID in sessionStorage
    sessionStorage.setItem("sessionId", response.sessionId);
    
    // Redirect to the Admin dashboard
    setTimeout(function () {
        if(response.userType==="#Adm_01#"){
          window.location.href =
            "/BungoArch/html/backend/Admin/php/Admin-dashboardtst.php";
        }else if(response.userType==="#sp_01#"){
          window.location.href="/BungoArch/html/backend/Admin/php/admin_dashboardtst.php";
        }else{
          window.location.href =
            "/BungoArch/html/backend/Admin/php/User-dashboardtst.php";
        }
    }, 2000);
}
  };
  xhr.send(sendData);
}
