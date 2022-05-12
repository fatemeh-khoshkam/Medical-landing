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

/***  slider ***/
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
          items:3
        },
        1000:{
            items:4
        }
    } ,
    navText: ["◀","▶"]
  });

/* loader */
///// preloader
let overlay = document.getElementById("preloader");
window.addEventListener('load', function () {  
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
})


/* search remove tags */
const searchTagDeleteIcons = document.querySelectorAll(".searchBar__tags .btn i");
searchTagDeleteIcons.forEach((item) => {
    item.addEventListener("click", function () {
        item.parentElement.remove();
    });
});


/* animate */
window.addEventListener('scroll', () => {
    var element = document.querySelector('.findDoctor__searchBar');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.findDoctor__searchBar').addClass("animate__fadeInRight");
    } else {
        $('.findDoctor__searchBar').removeClass("animate__fadeInRight");
    }
});

window.addEventListener('scroll', () => {
    var element = document.querySelector('.chooseDoctor__banner');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.chooseDoctor__banner').addClass("animate__fadeInLeft");
    } else {
        $('.chooseDoctor__banner').removeClass("animate__fadeInLeft");
    }
}); 

function animateHeroImg(){
    var element = document.querySelector('.hero_bg');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.hero_bg').addClass("animate__fadeInRight");
    } else {
        $('.hero_bg').removeClass("animate__fadeInRight");
    }
}
window.addEventListener('scroll', () => {
    animateHeroImg();
});
window.addEventListener('load', () => {
    animateHeroImg();
});