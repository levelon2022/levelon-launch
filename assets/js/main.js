/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=======Expert and Seeker Button======*/
var expert = document.getElementById("expert");
var seeker = document.getElementById("seeker");

var expimg = document.getElementById('expert_img');
var seekerimg = document.getElementById('seeker__img');

var contentElement2 = document.getElementById('expert-content');
var contentElement1 = document.getElementById('seeker-content');

function exchangeContent() {
    var content1 = contentElement1.textContent;
    var content2 = contentElement2.textContent;
  
    contentElement1.textContent = content2;
    contentElement2.textContent = content1;
  }

  expert.addEventListener("click",exchangeContent=>{
    contentElement2.classList.remove("expseeker-content");
    contentElement1.classList.add("expseeker-content");
  
  });
  seeker.addEventListener("click",exchangeContent=>{
    contentElement2.classList.add("expseeker-content");
    contentElement1.classList.remove("expseeker-content");
  
  });

  
  



expert.addEventListener("click", function() {
  expert.classList.toggle("active-btn");
  seeker.classList.remove("active-btn");

  expimg.classList.remove("emp-img");
  seekerimg.classList.add("emp-img");


});

seeker.addEventListener("click", function() {
  seeker.classList.toggle("active-btn");
  expert.classList.remove("active-btn");

  expimg.classList.add("emp-img");
  seekerimg.classList.remove("emp-img");




});






/*------Top experties slider-------*/
// <!-- Initialize Swiper -->


    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    if (viewportWidth <= 414) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  
 else if (viewportWidth <= 912){ 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    } 
    else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    }

/*---------Catgories slider in mobile application------------*/

// const viewportWidth = window.innerWidth || document.documentElement.clientWidth;


  if (viewportWidth <= 414) {
    var swiper = new Swiper(".catslider", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
     }



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
// let homeSwiper = new Swiper(".home-swiper", {
//     spaceBetween: 30,
//     loop: 'true',
    
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
// })

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})
