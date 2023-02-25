export default function pageTheme (btn, elementsSelector) {
  const d = document,
    $btn = d.querySelector(btn),
    $elements = d.querySelectorAll(elementsSelector)

  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    $elements.forEach(el => {
      el.classList.add('dark-theme')
    })
    $btn.innerHTML = `
      <i class="fa-regular fa-sun"></i>
    `
  }

  d.addEventListener('click', e => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      const theme = localStorage.getItem('theme')
      if (theme === 'dark') {
        localStorage.setItem('theme', 'light')
        $btn.innerHTML = `
          <i class="fa-solid fa-moon"></i>
        `
        $elements.forEach(el => {
          el.classList.remove('dark-theme')
        })
      } else {
        localStorage.setItem('theme', 'dark')
        $btn.innerHTML = `
          <i class="fa-regular fa-sun"></i>
        `
        $elements.forEach(el => {
          el.classList.add('dark-theme')
        })
      }
    }
  })
}
