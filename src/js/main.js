var button = document.querySelector(".menu-close");
var menu = document.querySelector(".menu-open");
var logo = document.querySelector(".menu-container");
var logo2 = document.querySelector(".menu-small-logo");
var links = document.querySelectorAll(".menu-link");

var openMenu = function () {
  menu.classList.toggle("is-open");
  logo.classList.toggle("is-open");
  logo2.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", openMenu);
});
