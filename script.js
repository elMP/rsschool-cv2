const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.main-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});