let menuState = false;
let x = document.getElementById("navigation");

document.getElementById('menu').addEventListener('click', toogleMenu)

function toogleMenu() {
    if (!menuState) {
        openMenu();
    } else {
        closeMenu();
    }
}

window.onresize = function () {
    if (window.innerWidth >= 820) {
        closeMenu();
    }
}

function closeMenu() {
    x.style.left = '-160px';
    menuState = false;
}

function openMenu() {
    x.style.left = "0";
    menuState = true;
}