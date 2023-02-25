const d = document

export default function scrollSpy () {
  const $sections = d.querySelectorAll('[data-scroll-spy-section]')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          d.querySelector(
            `a[data-scroll-spy][href="#${entry.target.id}"]`
          ).classList.add('item__link--active')
        } else {
          d.querySelector(
            `a[data-scroll-spy][href="#${entry.target.id}"]`
          ).classList.remove('item__link--active')
        }
      })
    },
    {
      //root por defecto es el document
      //rootMargin: "-300px", // zona interactiva de observación (al section lo empezará a observar con un margin de -300px)
      threshold: 0.6
    }
  )

  $sections.forEach(section => {
    observer.observe(section)
  })
}
