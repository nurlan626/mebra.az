// Index page js...
var swiper_home = new Swiper(".slide-content-home", {
  slidesPerView: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next-home",
    prevEl: ".swiper-button-prev-home",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 1,
    },
  },

});

var swiper = new Swiper(".slide-content-categories", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },

  },

});


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },

});



var swiper = new Swiper(".slide-content-item", {
  slidesPerView: 1,
  fade: 'true',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-item",
    prevEl: ".swiper-button-prev-item",
  },
});



// Vip page js...
var swiper_vip = new Swiper(".slide-content-vip", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },

});



// Premium page js...
var swiper_premium = new Swiper(".slide-content-premium", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },

});






// Other page js...
var swiper_other = new Swiper(".slide-content-other", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },

});








// Scroll Button...
const scrollButton = document.getElementById("scroll-button");
const buttonHeight = scrollButton.offsetHeight;
const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const midViewport = viewportHeight / 2;
const midButton = buttonHeight / 2;
const maxButtonY = viewportHeight - buttonHeight;
const minButtonY = midViewport - midButton;
const maxScrollPosition = document.documentElement.scrollHeight - viewportHeight - 500; 
let buttonY = 0; 

function updateButtonPosition() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition > lastScrollPosition) {
    // scrolling down
    buttonY = Math.min(maxButtonY, buttonY + (currentScrollPosition - lastScrollPosition));
    if (currentScrollPosition < maxScrollPosition) {
      scrollButton.style.transform = `translate(-50%, ${buttonY}px)`;
    }
  } else {
    // scrolling up
    buttonY = Math.max(0, buttonY - (lastScrollPosition - currentScrollPosition));
    if (currentScrollPosition < maxScrollPosition) {
      scrollButton.style.transform = `translate(-50%, ${buttonY}px)`;
    }
  }
  lastScrollPosition = currentScrollPosition;
}

let lastScrollPosition = 0;
window.addEventListener("scroll", () => {
    updateButtonPosition();
});






const entrance_mobile = document.querySelector('#user__mobile');
const entrance = document.querySelector('#user-desktop__login');
const loginIcon = document.querySelector('#icon-desktop');
const token = localStorage.getItem('token');


if (token) {
  entrance_mobile.style.display = 'none';
  entrance.style.display = 'none';
  loginIcon.style.display = 'none';
}


let createAdvertBtn = document.getElementById('createAdvertBtn');
createAdvertBtn.addEventListener('click', function() {
  if (token) {
    window.location.href = 'announcement-furniture.html'
  } else {
    window.location.href = 'login.html'
  }
});


let mobileCreateAdvertBtn = document.getElementById('mobileCreateAdvertBtn');
mobileCreateAdvertBtn.addEventListener('click', function() {
  if (token) {
    window.location.href = 'announcement-furniture.html'
  } else {
    window.location.href = 'login.html'
  }
});



let createAdvertBtnSecond = document.getElementById('createAdvertBtnSecond');
createAdvertBtnSecond.addEventListener('click', function() {
  if (token) {
    window.location.href = 'announcement-furniture.html'
  } else {
    window.location.href = 'login.html'
  }
});



let createAdvertBtnFooter = document.getElementById('createAdvertBtnFooter');
createAdvertBtnFooter.addEventListener('click', function() {
  if (token) {
    window.location.href = 'announcement-furniture.html'
  } else {
    window.location.href = 'login.html'
  }
});



const notificationText = document.querySelector('#notification_text');
const notificationMobileIcon = document.querySelector('#user_mobile_notification');

notificationText.addEventListener('click', function() {
  if (!token) {
    window.location.href = 'login.html'
  } 
});

notificationMobileIcon.addEventListener('click', function() {
  if (!token) {
    window.location.href = 'login.html'
  } 
});



const selectedText = document.querySelector('#selected_text');
const selectedMobileIcon = document.querySelector('#user_mobile_selected');
selectedText.addEventListener('click', function() {
  if (!token) {
    window.location.href = 'login.html'
  } 
});

selectedMobileIcon.addEventListener('click', function() {
  if (!token) {
    window.location.href = 'login.html'
  } 
});



const userLocation = document.querySelector('#user_location');
const userMobileLocation = document.querySelector('#user_mobile_location');
userLocation.addEventListener('click', function() {
  if (!token) {
    window.location.href = 'login.html'
  } 

});

userMobileLocation.addEventListener('click', function() {
  if (!token) {
    window.location.href = 'login.html'
  } 

});


// GET ALL ADVERTS 
const baseUrl = 'http://mebra.az/';
const getAllAdverts = 'api/Adverts/GetAllAdverts';
const allItemsMainEnd = document.querySelector('#allItems_Mainend');


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(`${baseUrl}/${getAllAdverts}`);
        const data = await response.json();
        const adverts = data?.adverts.reverse();

        adverts.forEach(advert => {
            const { price, imagesResponseDto, date, category, cities } = advert;
            const categoryName = category?.name;
            const cityName = cities?.[0]?.name;

            const swiperSlides = imagesResponseDto.map(img => `
                <div class="swiper-slide">
                    <img src="${img?.path}" class="product-image" alt="product-image-one">
                </div>
            `).join('');

            const html = `
                  <div class="swiper-slide">
                    <div class="product-item">
                        <figure>
                            <div class="swiper">
                                <div class="slide-content-item">
                                    <div class="swiper-wrapper">
                                        ${swiperSlides}
                                    </div>
                                    <div class="swiper-button-next-item swiper-navBtn"></div>
                                    <div class="swiper-button-prev-item swiper-navBtn"></div>
                                </div>
                            </div>
                        </figure>
                        <span class="product-icon"><i class="fa-regular fa-heart fa-2xl"></i></span>
                    </div>

                    <div class="product-button">
                        <button>şirkət</button>
                    </div>

                    <div class="product-description">
                      <ul>
                        <li>${price} AZN</li>
                        <li>${categoryName}</li>
                        <li>${cityName}, ${date}</li>
                      </ul>
                    </div>
                  </div>

                  
                 
            `;
            allItemsMainEnd.insertAdjacentHTML('afterbegin', html);
        });

        var swiper = new Swiper(".slide-content-item", {
            slidesPerView: 1,
            fade: "true",
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-item",
                prevEl: ".swiper-button-prev-item",
            },
        });

        console.log(allItemsMainEnd);
    } catch (error) {
        console.log(error);
    }
});

var swiper_end = new Swiper(".slide-content_mainEnd", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      0: {
          slidesPerView: 2,
      },
      520: {
          slidesPerView: 3,
      },
      950: {
          slidesPerView: 4,
      },
  },
});














