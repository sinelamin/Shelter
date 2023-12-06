'use strict';


export function addBurger() {
  const body = document.querySelector('body');
  const menu = document.querySelector('.header-menu');
  const burger = document.querySelector('.burger');
  const menuList = document.querySelector('.header-list');
  const menuListItems = document.querySelectorAll('.header-list__item');

  burger.addEventListener('click', (e) => {
    console.log(burger);
    if (burger.classList.contains('burger--active')) {
      burger.classList.remove('burger--active');
      menuList.classList.remove('header-list--active');
      menu.classList.remove('header-menu--active');
      body.style.overflow = 'auto';
    } else {
      burger.classList.add('burger--active');
      menuList.classList.add('header-list--active');
      menu.classList.add('header-menu--active');
      body.style.overflow = 'hidden';
    }
  });


  menuListItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (burger.classList.contains('burger--active')) {
        burger.classList.remove('burger--active');
        menuList.classList.remove('header-list--active');
        menu.classList.remove('header-menu--active');
        body.style.overflow = 'auto';
      }
    })
  });
}