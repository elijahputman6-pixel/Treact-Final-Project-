// Select elements
const openBtn = document.querySelector('.btn__menu--open');
const closeBtn = document.querySelector('.btn__menu--close');
const menu = document.querySelector('.menu');

// Open menu
openBtn.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

// Close menu (X button)
closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});

// Optional: close menu when clicking a link
document.querySelectorAll('.menu__links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
});