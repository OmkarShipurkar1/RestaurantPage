import { home } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const content = document.querySelector("#content");


content.innerHTML = home;

homeBtn.addEventListener("click", () => {
  content.innerHTML = home;
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = menu;
});
aboutBtn.addEventListener("click", () => {
  content.innerHTML = about;
});
