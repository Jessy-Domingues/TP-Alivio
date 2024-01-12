// Menu burger-----------------
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.contain_2');

// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('actif');
  menuButton.classList.toggle('act');
});