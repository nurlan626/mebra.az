document.addEventListener("DOMContentLoaded", function() {
  let tabs = document.querySelectorAll(".tabs li");
  let tabContents = document.querySelectorAll(".tab-pane");
  
  tabs.forEach(function(tab, index) {
    tab.addEventListener("click", function() {
        
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });
      
      tabContents.forEach(function(content) {
        content.classList.remove("active");
      });

      
      tab.classList.add("active");
      tabContents[index].classList.add("active");
    });

  });

});


// All-advertisements...
const selectBtnAllAdvertisements = document.querySelector(".select-btn-all-advertisements");

selectBtnAllAdvertisements.addEventListener("click", () => {
  selectBtnAllAdvertisements.classList.toggle("open");
});



// Waiting-advertisements...
const selectBtnWaitingAdvertisements = document.querySelector(".select-btn-waiting-advertisements");

selectBtnWaitingAdvertisements.addEventListener("click", () => {
  selectBtnWaitingAdvertisements.classList.toggle("open");
});



// Time-advertisements...
const selectBtnTimeAdvertisements = document.querySelector(".select-btn-time-advertisements");

selectBtnTimeAdvertisements.addEventListener("click", () => {
  selectBtnTimeAdvertisements.classList.toggle("open");
});



// Refusal-advertisements...
const selectBtnRefusalAdvertisements = document.querySelector(".select-btn-refusal-advertisements");

selectBtnRefusalAdvertisements.addEventListener("click", () => {
  selectBtnRefusalAdvertisements.classList.toggle("open");
});


// Other-advertisements...
const selectBtnOtherAdvertisements = document.querySelector(".select-btn-other-advertisements");

selectBtnOtherAdvertisements.addEventListener("click", () => {
  selectBtnOtherAdvertisements.classList.toggle("open");
});


// All-advertisements slider...
let swiper_all_advertisements_item = new Swiper(".slide-content-all-advertisements_item", {
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


const pwShowHide = document.querySelector(".eye-icon");

pwShowHide.addEventListener("click", () => {
  let pwFields = pwShowHide.parentElement.querySelectorAll(".account-management_password");
  console.log(pwFields);
  console.log(pwShowHide);
  
  pwFields.forEach(password => {
    if(password.type === "password"){
        password.type = "text";
        pwShowHide.classList.replace("bx-hide", "bx-show");
        return;
    }
    password.type = "password";
    pwShowHide.classList.replace("bx-show", "bx-hide");
  })
});




const changeButton = document.querySelector("#account-management__changeButton");
const backChangeButton = document.querySelector("#account-management_backChangeButton");

changeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const changePassword = document.querySelector(".account-management__changePassword");
  const deletePersonal = document.querySelector(".account-manager__deletePersonal");
  
  changePassword.style.display="block";
  deletePersonal.style.display="none";
  
});

backChangeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const changePassword = document.querySelector(".account-management__changePassword");
  const deletePersonal = document.querySelector(".account-manager__deletePersonal");
  deletePersonal.style.display="block";
  changePassword.style.display="none";
  
});

let amount10 = document.getElementById("amount10");
let amount30 = document.getElementById("amount30");
let amount50 = document.getElementById("amount50");
let inputElement = document.querySelector("#add-balance_price");
let selectedAmount = null;

amount10.addEventListener("click", () => {
  setAmount(10);
  amount10.style.border = "solid 1px #8C2320";
  
  if ( selectedAmount === amount30 ) {
    amount30.style.border = "1px solid rgba(70, 62, 62, 0.49)";
  } else if ( selectedAmount === amount50 ) {
    amount50.style.border = "1px solid rgba(70, 62, 62, 0.49)";
  }

  selectedAmount = amount10;
});



amount30.addEventListener("click", () => {
  setAmount(30);
  amount30.style.border="solid 1px #8C2320";
  
  if ( selectedAmount === amount10 ) {
    amount10.style.border = "1px solid rgba(70, 62, 62, 0.49)";
  } else if ( selectedAmount === amount50 ) {
    amount50.style.border = "1px solid rgba(70, 62, 62, 0.49)";
  }

  selectedAmount = amount30;
});


amount50.addEventListener("click", () => {
  setAmount(50);
  amount50.style.border="solid 1px #8C2320";
  
  if ( selectedAmount === amount10 ) {
    amount10.style.border = "1px solid rgba(70, 62, 62, 0.49)";
  } else if ( selectedAmount === amount30 ) {
    amount30.style.border = "1px solid rgba(70, 62, 62, 0.49)";
  }

  selectedAmount = amount50;
});


function setAmount(amount) {
  inputElement.value = amount;
};

setAmount();






// Credit Card...
document.querySelector('.credit-card_number-input').oninput = (e) => {
  e.preventDefault();
  const inputValue = document.querySelector('.credit-card_number-input').value;

  if (inputValue === "") {
    document.querySelector('.credit-card-number-box').innerText = "################";
    return;
  } 

  const formattedValue = formatCreditCardNumber(inputValue);
  document.querySelector('.credit-card-number-box').innerText = formattedValue;

};

function formatCreditCardNumber(inputValue) {
  const maxLength = 19;
  const spacingInterval = 4;
  const separator = ' ';

  
  const numericValue = inputValue.replace(/\s/g, '');

  
  const groups = [];
  for (let i = 0; i < numericValue.length; i += spacingInterval) {
    groups.push(numericValue.slice(i, i + spacingInterval));
  }

  
  // let formattedValue = groups.join(separator);

  
  // formattedValue = formattedValue.slice(0, maxLength);

  
  // const regex = /(\d{4})(?=\d)/g;
  // formattedValue = formattedValue.replace(regex, '$1 ');

  // return formattedValue;

 
  let formattedValue = groups.join(separator);

  
  const regex = /(\d{4})(?=\d)/g;
  formattedValue = formattedValue.replace(regex, '$1 ');

 
  formattedValue = formattedValue.slice(0, maxLength);

  return formattedValue;

};






document.querySelector('.credit-card_holder-input').oninput = (e) => {
  e.preventDefault();
  document.querySelector('.credit-card_holder-name').innerText = document.querySelector('.credit-card_holder-input').value;

  if(document.querySelector('.credit-card_holder-input').value === "") {
    document.querySelector('.credit-card_holder-name').innerText = "Full Name"
  }

};


document.querySelector('.credit-card_date-input').oninput = (e) => {
  e.preventDefault();

  const creditCardDate = document.querySelector('.credit-card_date-input').value;
  let formattedValue = creditCardDate;

  if (creditCardDate.length > 1) {
    formattedValue = creditCardDate.slice(0, 2) + " / " + creditCardDate.slice(2);
  }

  document.querySelector('.credit-card_exp-month').innerText = formattedValue;

  if(formattedValue === "") {
    document.querySelector('.credit-card_exp-month').innerText = "MM / YY"
  }

};


document.querySelector('.cvv-input').onmouseenter = (e) => {
  e.preventDefault();
  document.querySelector('.credit-card_front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.credit-card_back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

document.querySelector('.cvv-input').onmouseleave = (e) => {
  e.preventDefault();
  document.querySelector('.credit-card_front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.credit-card_back').style.transform = 'perspective(1000px) rotateY(180deg)';
};

document.querySelector('.cvv-input').oninput = (e) => {
  e.preventDefault();
  document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
};

  