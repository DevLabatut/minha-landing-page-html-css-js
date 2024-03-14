var navbarToggle = document.getElementById("js-navbar-toggle");
var bttMenu = document.getElementById("js-menu");
var bttExcluir = document.getElementById("menu-excluir-2");
var bttPrMenu = document.getElementById("menu-2");
navbarToggle.addEventListener("click", function () {
  if (bttMenu.style.right === "0px") {
    bttMenu.style.right = "-450px";
    bttExcluir.style.display = "none";
    bttPrMenu.style.display = "block";
  } else {
    bttMenu.style.right = "0px";
    bttPrMenu.style.display = "none";
    bttExcluir.style.display = "block";
  }
});
bttPrMenu.addEventListener("click", function () {
  if (bttMenu.style.right === "0px") {
    bttPrMenu.style.display = "none";
    bttExcluir.style.display = "block";
  } else {
    bttExcluir.style.display = "block";
  }
});
bttExcluir.style.display = "none";

const darkModeBtn = document.getElementById("dark");
const lightModeBtn = document.getElementById("light");
const body = document.body;

darkModeBtn.addEventListener("click", function () {
  body.classList.add("dark-mode");
  darkModeBtn.style.display = "none";
  lightModeBtn.style.display = "block";
});

lightModeBtn.addEventListener("click", function () {
  body.classList.remove("dark-mode");
  lightModeBtn.style.display = "none";
  darkModeBtn.style.display = "block";
});
