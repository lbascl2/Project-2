// JS scripts placed here

// HAMBURGER ICON

// const hamburger = document.querySelector('.hamburger');
// const menu = document.getElementById('main-menu');

// hamburger.addEventListener('click', () => {
//   const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
//   hamburger.setAttribute('aria-expanded',!expanded);
//   menu.classList.toggle('expanded');
// });

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('offcanvas-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded',!expanded);
  menu.classList.toggle('expanded');
});
