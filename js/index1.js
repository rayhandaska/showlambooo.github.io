const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left

navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});
navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

document.getElementById('btn1').onclick = function change_image() {
    document.getElementById("indo1").src = "./image/sell1.png";
}
document.getElementById('btn2').onclick = function change_image() {
    document.getElementById("indo1").src = "./image/sellss1.png";
}
document.getElementById('btn6').onclick = function change_image() {
    document.getElementById("indo1").src = "./image/sellsss1.png";
}
document.getElementById('btn9').onclick = function change_image() {
    document.getElementById("indo1").src = "./image/sells1.png";
}
