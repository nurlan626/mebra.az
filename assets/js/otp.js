const baseURL = "http://ruslanali803-001-site1.htempurl.com/";
const path = "api/Auth/VerificationOTP";



const renderEmailOtpAdd = () => {
  
  const emailOtpAdd = document.querySelector('#email-otp-add');
  emailOtpAdd.addEventListener('submit',  async (event) => {
  event.preventDefault();


  const emailOtpOne = document.querySelector('#email-otp-number_one').value;
  console.log(emailOtpOne);
  const emailOtpTwo = document.querySelector('#email-otp-number_two').value;
  console.log(emailOtpTwo);
  const emailOtpThree = document.querySelector('#email-otp-number_three').value;
  console.log(emailOtpThree);
  const emailOtpFour = document.querySelector('#email-otp-number_four').value;
  console.log(emailOtpFour);
  const totalOTP = emailOtpOne + emailOtpTwo + emailOtpThree + emailOtpFour;
  console.log(totalOTP);

  

  
  

  try {
    const response = await fetch(`${baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        otpCode: totalOTP,
      })
    });

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.Message;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log(data);
    window.location.href="register.html";
    

    // const token = data.token;
    // localStorage.setItem('token', data.token.accessToken);
    // console.log(token);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userEmail = urlParams.get('email');
    console.log(userEmail);

    // const redirectURL = `register.html?email=${encodeURIComponent(userEmail)}`;
    // window.location.href = redirectURL;
   

  } catch (error) {
    console.error('Error:', error);
  }

  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userMessage = urlParams.get('message');
    const userSetMessage = document.querySelector("#user__message");
    userSetMessage.innerText = userMessage;

    // const otp = urlParams.get('otp');
    // oldOtpCode = otp;

  });


 
};

renderEmailOtpAdd();




const pathNewSend = "api/Auth/SendOTPEmail";
let countdownStarted = false;


const renderEmailOtpNewSend = () => {
  
  const emailOtpNewSend = document.querySelector('#email-otp_newSend');
  emailOtpNewSend.disabled = true;

  emailOtpNewSend.addEventListener('click',  async (event) => {
  event.preventDefault();

  if (!countdownStarted) {
    countdown();
    countdownStarted = true;
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userEmail = urlParams.get('email');
  console.log(userEmail);

  
  

  try {
    const response = await fetch(`${baseURL}${pathNewSend}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email : userEmail
      })
    });

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.Message;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log(data);
    
    // const token = data.token;
    // localStorage.setItem('token', data.token.accessToken);
    // console.log(token);

    // emailError.innerHTML = `Your token is: ${token.accessToken}`;
    // event.target.reset();

  } catch (error) {
    console.error('Error:', error);
  }

  });


 
};

renderEmailOtpNewSend();


let inputs = document.querySelectorAll(".otp-border");
let button = document.querySelector(".otp-button");


inputs.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {

  const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;


  if (currentInput.value.length > 1) {
    currentInput.value = "";
    return;
  }

  if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }


  if (e.key === "Backspace") {
    
    inputs.forEach((input, index2) => {
      if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }

  if (!inputs[3].disabled && inputs[3].value !== "") {
    button.classList.add("active");
    return;
  }
  button.classList.remove("active");
});
});


window.addEventListener("load", () => inputs[0].focus());



  

function countdown() {

  let seconds = 90;
  let emailOtpTime = document.querySelector("#otp-email-time");
 

  let timer = setInterval(function() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    emailOtpTime.innerText = minutes.toString().padStart(2, '0') + ' : ' + remainingSeconds.toString().padStart(2, '0');
    // console.log(minutes.toString().padStart(2, '0') + ' : ' + remainingSeconds.toString().padStart(2, '0'));

    if (seconds <= 0) {
      clearInterval(timer);
      // console.log('Təsdiq kodu etibarsızdır.');
      emailOtpTime.innerText = "Təsdiq kodu etibarsızdır."
      enableButton();
    }

    seconds--;
  }, 1000);
}

countdown();

function enableButton() {
  const emailOtpNewSend = document.querySelector('#email-otp_newSend');
  emailOtpNewSend.disabled = false; 
  emailOtpNewSend.addEventListener('click', buttonClickHandler);
}

function buttonClickHandler(event) {
  event.preventDefault();
}