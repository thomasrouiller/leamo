var button = document.querySelector(".menu-close");
var menu = document.querySelector(".menu-open");
var links = document.querySelectorAll(".menu-link");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", openMenu);
});
