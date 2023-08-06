
let swiper_furniture_internal_size = new Swiper(".slide-content-furniture-internal-size", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next-furniture-internal-size",
      prevEl: ".swiper-button-prev-furniture-internal-size",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 3,
      },
    },
    
});


let swiper_furniture_internal_colour = new Swiper(".slide-content-furniture-internal-colour", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next-furniture-internal-colour",
      prevEl: ".swiper-button-prev-furniture-internal-colour",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 3,
      },
    },
    
});

// Furniture Internal Main Slider Phone..
let swiper_furniture_internal_main_slider_phone = new Swiper(".slide-content-furniture-internal-main-slider-phone", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next-furniture-internal-main-slider-phone",
      prevEl: ".swiper-button-prev-furniture-internal-main-slider-phone",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 3,
      },
    },
    
});


// Furniture Internal Main Slider...
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


