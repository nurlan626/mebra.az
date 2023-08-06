const showLogin = () => {

    let form_field_phone = document.querySelector(".form-field-phone");
    let form_field_email = document.querySelector(".form-field-email");
  
    let button_email = document.querySelector(".button-email");
    let button_phone = document.querySelector(".button-phone");
  
    let button_email_hide = document.querySelector(".button-email-hide");
    let button_phone_hide = document.querySelector(".button-phone-hide");
    
    form_field_phone.style.display = "none";
    
    button_phone.addEventListener("click", (e) => {
      form_field_email.style.display = "none";
      form_field_phone.style.display = "block";
    });
    
    button_email_hide.addEventListener("click", (e) => {
      form_field_email.style.display = "block";
      form_field_phone.style.display = "none";
    })
  
  
  }
  
showLogin();




const baseURL = "http://ruslanali803-001-site1.htempurl.com/";
const path = "api/Auth/SendOTPEmail";

const renderEmailOtp = () => {
  
  const emailOtp = document.querySelector('#email-otp-send');
  emailOtp.addEventListener('click',  async (event) => {
  event.preventDefault();

  const emailInputOtp = document.querySelector('#field-input-otp').value;
  

  try {
    const response = await fetch(`${baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email : emailInputOtp
      })
    });

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.Message;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    const successMessage = data.message;
    console.log(data);
    console.log(successMessage);



    // const encodedEmail = encodeURIComponent(emailInputOtp);
    // const encodedMessage = encodeURIComponent(successMessage);
    // const encodedOtpCode = encodeURIComponent(otpCode);
    

    // const redirectURL = `email-otp.html?email=${encodedEmail}&message=${encodedMessage}&otp=${encodedOtpCode}`;
    // window.location.href = redirectURL;

    window.location.href = `email-otp.html?email=${encodeURIComponent(emailInputOtp)}&message=${encodeURIComponent(successMessage)}`;
    // const token = data.token;
    // localStorage.setItem('token', data.token.accessToken);
    // console.log(token);
    // emailError.innerHTML = `Your token is: ${token.accessToken}`;
    if (emailInputOtp.trim() !== '') {
      localStorage.setItem('emailInputOtp', emailInputOtp);
    } else {
      localStorage.removeItem('emailInputOtp');
    }
    document.querySelector('#field-input-otp').value = '';

  } catch (error) {
    console.error('Error:', error);
  }

  });


 
};

renderEmailOtp();