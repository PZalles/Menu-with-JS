const burger = document.querySelector(".burger");
const iconBars = document.querySelector(".fa-bars")
const iconX = document.querySelector(".fa-times")
const menu = document.querySelector("aside");

burger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    menu.classList.toggle("show");
})