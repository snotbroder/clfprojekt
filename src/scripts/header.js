//----------------burgermenu---------------
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
//sikrer at menuknap forsvinder
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);
//searchbar popper op
const searchicon = document.querySelectorAll(".searchicon");
const searchbar = document.querySelectorAll(".searchbar");

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");
  searchicon.addEventListener("mousedown", clickSearchIcon);
}
// click dropdown and it stays

function clickSearchIcon() {
  console.log(clickSearchIcon);
  searchbar.classListt.remove("hide");
}
