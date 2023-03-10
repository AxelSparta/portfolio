import { contactForm } from './DOM/contactForm.js'
import hamburgerMenu from './DOM/hamburger_menu.js'
import pageTheme from './DOM/pageTheme.js'
import scrollSpy from './DOM/scrollSpy.js'
const d = document

d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('#menu-btn', '#nav', '.item__link')
  pageTheme('.theme__button', '[data-theme]')
  contactForm()
  scrollSpy()
})
