// document.querySelector(".btn1").addEventListener("click", clicked);

// function clicked() {
//   var r1 = document.getElementById("r1").textContent;
//   //alert("Button 1 Clicked: " + r1);
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "page.php", true);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   var sendData = "r1=" + encodeURIComponent(r1);
//   xhr.onload = function () {
//     alert(this.responseText);
//   };
//   xhr.send(sendData);
// }
let valueOfItem=document.getElementById("selectItems");
//let av=valueOfItem.contains("options");
//[object HTMLSelectElement]
//let av=document.querySelector("select");
//var selectedOption = av.options[av.selectedIndex];
var selectedOption2 = valueOfItem.options;
document.getElementById("ThisBtn").addEventListener("click",()=>
{
 // console.log(av);
 // console.log(valueOfItem);
    //console.log(valueOfItem.text);
    console.log(selectedOption2.selectedIndex)
  console.log(selectedOption2[selectedOption2.selectedIndex].textContent);
  //console.log(selectedOption.text);
  //console.log(selectedOption.value);
}
);