// Master Services Main Slider Phone...
let swiper_master_services_main_slider_phone = new Swiper(".slide-content-master-services-main-slider-phone", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next-master-services-main-slider-phone",
      prevEl: ".swiper-button-prev-master-services-main-slider-phone",
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


// Master Services Main Slider...
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




let star = document.querySelectorAll('.rating input');
for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;
	});
}