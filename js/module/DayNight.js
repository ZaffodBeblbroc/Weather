export function dayNight() {
  document.body.classList.toggle('text-bg-dark')
  document.body.classList.toggle('bg-primary-subtle')

  document.querySelector('.navbar-brand').classList.toggle('text-warning')
  document.querySelector('.navbar-brand').classList.toggle('text-primary')

  document.querySelector('.footer').classList.toggle('border-warning')
  document.querySelector('.footer').classList.toggle('border-primary')

  document.querySelector('.text').classList.toggle('focus-ring-warning')
  document.querySelector('.text').classList.toggle('focus-ring-primary')

  document.querySelector('.search').classList.toggle('btn-outline-warning')
  document.querySelector('.search').classList.toggle('btn-outline-primary')

  document.querySelector('.local').classList.toggle('btn-outline-warning')
  document.querySelector('.local').classList.toggle('btn-outline-primary')

  document.querySelectorAll('.item').forEach((elem) => {
    elem.classList.toggle('border-warning');
    elem.classList.toggle('border-primary')
  })

  document.querySelectorAll('.border-bottom').forEach((elem) => {
    elem.classList.toggle('border-warning-subtle');
    elem.classList.toggle('border-primary-subtle')
  })

  document.querySelectorAll('.five-day-item').forEach((elem) => {
    elem.classList.toggle('border-warning-subtle');
    elem.classList.toggle('border-primary-subtle')
  })
}