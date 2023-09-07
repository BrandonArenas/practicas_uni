const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");

menuBtns.forEach(function (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navBar.classList.toggle("open");
    });
});