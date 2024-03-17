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
// const searchicon = document.querySelector(".searchicon");
// const searchbar = document.querySelectors(".searchbar");

// window.addEventListener("load", sidenVises);
// function sidenVises() {
//   console.log("sidenvises");
//   dropbtn.addEventListener("mousedown", clickDropbtn);
//   searchicon.addEventListener("mousedown", clickSearchIcon);
// }
// function clickSearchIcon() {
//   console.log("clickSearchIcon");
//   searchbar.classList.remove("hide");
// }

// click dropdown and it stays
// const dropbtn = document.querySelectorAll(".dropbtn");
// const dropdowncontent = document.querySelectorAll(".dropdown-content");
// function clickDropbtn() {
//   console.log("clickDropbtn");
//   dropdowncontent.style.display = "inherit";
//   dropbtn.addEventListener("mousedown", clickDropbtn2close);
// }
// function clickDropbtn() {
//   dropbtn.addEventListener("mousedown", clickDropbtn2close);
// }
