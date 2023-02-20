import hamburgerMenu from './DOM/hamburger_menu.js'
import pageTheme from './DOM/pageTheme.js'
const d = document

d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('#menu-btn', '#nav', '.item__link')
  pageTheme('.theme__button', '[data-theme]')
})
