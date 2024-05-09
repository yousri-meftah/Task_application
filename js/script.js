window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("navbar");
    var head = document.getElementById("head");
    if (window.scrollY >= 60) { 
        head.style.height = "50px";
        head.style.width = "200px";
        navbar.classList.add("sticky")
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; 
        navbar.style.backdropFilter = "blur(1px)";
        navbar.style.color = "black"; 
    } else {
        head.style.height = "70px";
        head.style.width = "300px";
        navbar.style.backgroundColor = "transparent"; 
        navbar.style.backdropFilter = "none"; 
        navbar.style.color = "white"; 
        navbar.classList.remove("sticky");
    }
}
