var button = document.querySelector(".menu-close");
var menu = document.querySelector(".menu-open");
var logo = document.querySelector(".menu-container");
var logoNav = document.querySelector(".menu-small-logo");
var links = document.querySelectorAll(".menu-link");
var navigation = document.querySelector(".menu-credits-informations");
// var buttonLanguage = document.querySelector(".menu-lang-close");
// var menuLanguage = document.querySelector(".menu-lang-open");

var openMenu = function () {
  menu.classList.toggle("is-open");
  logo.classList.toggle("is-open");
  logoNav.classList.toggle("is-open");
  button.classList.toggle("is-active");
  navigation.classList.toggle("is-open");
  // menuLanguage.classList.toggle("is-open");
  // buttonLanguage.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);
// buttonLanguage.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", openMenu);
});
