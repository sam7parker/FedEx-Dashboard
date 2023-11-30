function HamburgerMenu() {
    let menu = document.getElementById("hamburger-menu")
    let overlay = document.getElementById("overlay")

    if (menu.style.visibility === "hidden" && menu.style.left === "-200px") {
        menu.style.visibility = "visible"
        menu.style.left = "0"
        overlay.style.visibility = "visible"
    }
    else {
        menu.style.visibility = "hidden"
        menu.style.left = "-200px"
        overlay.style.visibility = "hidden"
    }
}