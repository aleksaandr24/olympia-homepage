"use strict";

let menuBtn = document.querySelector('.header__main-menu-button');
let menu = document.querySelector('.header__main-menu');
let menuList = document.querySelector('.header__main-menu-list');
let menuLnks = document.querySelectorAll('.header__main-menu-link');
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuList.classList.toggle('active');
    menuLnks.forEach((menuItem) => {
        menuItem.classList.toggle('active');
    })
});