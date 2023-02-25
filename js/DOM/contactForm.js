const d = document,
  $form = d.querySelector('.contact__form'),
  $mailtoBtn = d.getElementById('mailto')

export const contactForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    console.log(form.get('name'))
    $mailtoBtn.setAttribute(
      'href',
      `mailto:axelnicolassparta@gmail.com?subject=${form.get(
        'name'
      )} ${form.get('email')}&body=${form.get('comments')}`
    )
    $mailtoBtn.click()
    e.target.reset()
  }

  $form.addEventListener('submit', handleSubmit)
}
