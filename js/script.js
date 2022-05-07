'use strict'; 

/***  scroll  ***/
const scroll_btn = document.getElementById("scroll--top");
const navigation = document.getElementById('header');

scroll_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  scroll_btn.classList.add("scroll--top--show");

  let scrollTop = window.pageYOffset;

  if (scrollTop === 0) {
    scroll_btn.classList.remove("scroll--top--show");
  }
});
window.addEventListener("scroll", function () {
    
    let scroll_Y = window.scrollY;
    if (scroll_Y >= 75) {
        navigation.classList.add("nav--sticky");
    } else {
        navigation.classList.remove("nav--sticky");
    }
});

/***  popular search tabs  ***/
const popularSearchList = document.querySelectorAll('.popularSearch__list');
const popularSearchContent = document.querySelectorAll('.popularSearch__tabs');

popularSearchList.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        popularSearchList.forEach(tabItem => {
            tabItem.classList.remove('active');
        });
        popularSearchContent.forEach(contentItem => {
            contentItem.classList.remove('active');
        });
        item.classList.add('active');
        popularSearchContent[index].classList.add('active');
    })
});


/***  mobile menu ***/
const menu = document.querySelector('#menu');
const menuOpen = document.querySelector('#nav-open');
const menuClosed = menu.querySelector('#nav-close');
const menuOverlay = document.querySelector('.overlay');


menuOpen.addEventListener('click', () => {
    toggleMenu();
});
menuClosed.addEventListener('click', () => {
    toggleMenu();
});
menuOverlay.addEventListener('click', () => {
    toggleMenu();
});
function toggleMenu() {
    menu.classList.toggle('nav__right--open');
    menuOverlay.classList.toggle('active');
}