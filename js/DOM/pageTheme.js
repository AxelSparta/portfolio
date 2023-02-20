export default function pageTheme (btn, elementsSelector) {
  const d = document,
    $btn = d.querySelector(btn),
    $elements = d.querySelectorAll(elementsSelector)

  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    $elements.forEach(el => {
      el.classList.add('dark-theme')
    })
    $btn.innerHTML = 'Tema claro'
  }

  d.addEventListener('click', e => {
    if (e.target.matches(btn)) {
      const theme = localStorage.getItem('theme')
      if (theme === 'dark') {
        localStorage.setItem('theme', 'light')
        $btn.innerHTML = 'Tema oscuro'
        $elements.forEach(el => {
          el.classList.remove('dark-theme')
        })
      } else {
        localStorage.setItem('theme', 'dark')
        $btn.innerHTML = 'Tema claro'
        $elements.forEach(el => {
          el.classList.add('dark-theme')
        })
      }
    }
  })
}
