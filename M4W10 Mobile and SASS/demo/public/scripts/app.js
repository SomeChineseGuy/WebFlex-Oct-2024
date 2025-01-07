// Client facing scripts here
$(document).ready(() => {
  // Step one: Target
  // Step two: add event listener
  // Step three: Effect

  $('.hamburger-menu').on('click', () => {
    $('.mobile-menu-container').addClass('active')
  })

  $('.x').on('click', () => {
    $('.mobile-menu-container').removeClass('active')
  })
}) 