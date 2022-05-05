'use strict';

/***  scroll  ***/
const scroll_btn = document.getElementById("scroll--top");

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