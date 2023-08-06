// Index page js...
const hamburger = document.querySelector(".bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileOverlay = document.querySelector(".header-overlay");
const closeMenu = document.querySelector(".close-menu");


hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileOverlay.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


const loginBut = document.querySelector(".login-mobile");
const mobileLogin = document.querySelector(".mobile-login");
const loginOverlay = document.querySelector(".login-overlay");
const closeLogin = document.querySelector(".close-login");

// bu reyde olmasa error verir...
// loginBut.addEventListener("click", () => {
//   mobileLogin.classList.toggle("active");
// });

loginOverlay.addEventListener("click", () => {
  mobileLogin.classList.toggle("active");
});

closeLogin.addEventListener("click", () => {
  mobileLogin.classList.toggle("active");
});


const searchBut = document.querySelector('.search');
const searchForm = document.querySelector('.search-form');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

// bu reyde olmasa error verir...
// searchBut.addEventListener("click", function () {
//   searchBut.classList.toggle('active');
//   searchForm.classList.toggle('block');
//   nav.classList.toggle('none');
//   logo.classList.toggle('none');
// });







