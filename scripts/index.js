import { addUser } from "./firebase/firebase.js";

document.querySelector(".hamburger-lines").addEventListener("click", () => {
  var menu = document.querySelector(".links_container");
  menu.classList.toggle("menu_hide");
  menu.classList.toggle("hideMenu");
  var body = document.querySelector("body");
  body.classList.toggle("body_overflow");
  var line1 = document.querySelector(".line1");
  line1.classList.toggle("line1_transform");
  var line2 = document.querySelector(".line2");
  line2.classList.toggle("line2_transform");
  var line3 = document.querySelector(".line3");
  line3.classList.toggle("line3_transform");
});
var congrats = document.querySelector(".congrats");
document.querySelector(".close_icon").addEventListener("click", () => {
  congrats.classList.remove("congrats_show");
});

var input = document.querySelector("input");
var logo = document.querySelector(".logo");
var locks = document.querySelector(".locks");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = input.value;
  try {
    addUser(userEmail);

    setTimeout(() => {
      input.value = "";
      congrats.classList.add("congrats_show");
      logo.classList.add("logo_signed");
      locks.classList.add("show_locks");
    }, 500);
  } catch (error) {
    console.log(error);
  }
});

document.querySelector("main").addEventListener("click", () => {
  var menu = document.querySelector(".links_container");
  menu.classList.remove("menu_hide");
  menu.classList.remove("hideMenu");
  var body = document.querySelector("body");
  body.classList.remove("body_overflow");
  var line1 = document.querySelector(".line1");
  line1.classList.remove("line1_transform");
  var line2 = document.querySelector(".line2");
  line2.classList.remove("line2_transform");
  var line3 = document.querySelector(".line3");
  line3.classList.remove("line3_transform");
});
