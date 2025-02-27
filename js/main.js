// JS scripts placed here

// HAMBURGER ICONE
const hamburger = document.querySelector('.hamburger'); 
const menu = document.getElementById('main-menu');
hamburger.addEventListener('click', () => {   const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;   
    hamburger.setAttribute('aria-expanded',!expanded);   
    menu.classList.toggle('expanded'); });
