var button = document.querySelector(".menu-close");
var menu = document.querySelector(".menu-open");
var logo = document.querySelector(".menu-container");
var logo2 = document.querySelector(".menu-small-logo");
var links = document.querySelectorAll(".menu-link");
var navigation = document.querySelector(".menu-credits-informations");
var button2 = document.querySelector(".menu-lange-close");
var menu2 = document.querySelector(".mmenu-lang-open");

var openMenu = function () {
  menu.classList.toggle("is-open");
  logo.classList.toggle("is-open");
  logo2.classList.toggle("is-open");
  button.classList.toggle("is-active");
  navigation.classList.toggle("is-open");
  menu2.classList.toggle("is-open");
  button2.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", openMenu);
});
