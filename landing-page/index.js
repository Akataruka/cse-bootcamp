const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".table");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
{
    let width = window.innerWidth;
    let body_width = document.getElementsByTagName("body");
    body_width[0].style.width = width;
}