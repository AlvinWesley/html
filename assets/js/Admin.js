document.addEventListener('DOMContentLoaded', function() {
    let d = document.querySelector("#po-tedax"),
    f = localStorage.getItem("Tour") || false;
    console.log("Starting..")
    console.log(f)
    if(f === false && d){
        dt("Admin-profile-edit.php");
        let x = localStorage.setItem("Tour","Admin")
        console.log(x)
    }
})