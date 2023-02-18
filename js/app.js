import hamburgerMenu from "./DOM/hamburger_menu.js";
import projectInteraction from "./DOM/projects_interaction.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu("#menu-btn", "#nav", ".item__link");
});
