let navBtn = document.getElementById("nav-btn")
let sideNav = document.getElementById("side-nav")
let menu = document.getElementById("menu")

sideNav.style.right = "-250px"
navBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0"
        menu.src = "/img/menu/close.png"
    } else {
        sideNav.style.right = "-250px"
        menu.src = "/img/menu/menu.png"
    }
}