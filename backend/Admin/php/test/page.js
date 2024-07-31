document.querySelector(".btn1").addEventListener("click", clicked);

function clicked() {
  var r1 = document.getElementById("r1").textContent;
  //alert("Button 1 Clicked: " + r1);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "page.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var sendData = "r1=" + encodeURIComponent(r1);
  xhr.onload = function () {
    alert(this.responseText);
  };
  xhr.send(sendData);
}
