var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        sideNav.style.right = "-250px";
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}