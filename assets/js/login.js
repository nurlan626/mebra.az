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




const pwShowHide = document.querySelector(".eye-icon");

pwShowHide.addEventListener("click", () => {
  let pwFields = pwShowHide.parentElement.parentElement.querySelectorAll(".password");
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
})


const pwShowHide_phone = document.querySelector(".eye-icon-phone");

pwShowHide_phone.addEventListener("click", () => {
  let pwFields_phone = pwShowHide_phone.parentElement.parentElement.querySelectorAll(".password");
  console.log(pwFields_phone);
  console.log(pwShowHide_phone);
  
  pwFields_phone.forEach(password => {
    if(password.type === "password"){
        password.type = "text";
        pwShowHide_phone.classList.replace("bx-hide", "bx-show");
        return;
    }
    password.type = "password";
    pwShowHide_phone.classList.replace("bx-show", "bx-hide");
  })
})



const baseURL = "http://mebra.az/";
const path = "api/Auth/Login";

const renderLoginEmail = () => {
  
  const loginEmail = document.querySelector('#login-email');
  loginEmail.addEventListener('submit',  async (event) => {
  event.preventDefault();

  const email = document.querySelector('#field-email').value;
  const emailPassword = document.querySelector('#field-email-password').value;
  const emailCheckbox = document.querySelector('#checkbox');
  // const emailError = document.querySelector("#email-error");

  try {
    const response = await fetch(`${baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneOrEmail: email,
        password: emailPassword
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
    window.location.href="index.html"

    const token = data.token;
    const userId = token.userId
    localStorage.setItem('token', data.token.accessToken);
    localStorage.setItem('userId', userId);
    console.log(token);
    console.log(userId);

    // emailError.innerHTML = `Your token is: ${token.accessToken}`;
    if (emailCheckbox.checked && emailPassword.trim() !== '') {
      localStorage.setItem('emailPassword', emailPassword);
    } else {
      localStorage.removeItem('emailPassword');
    }
    event.target.reset();


  } catch (error) {
    console.error('Error:', error);
    // emailError.textContent = error.message;
    
  }

  });

};

renderLoginEmail();






const renderLoginPhone = () => {

  const loginPhone = document.querySelector('#login-phone');
  loginPhone.addEventListener('submit', async (event) => {
    event.preventDefault();

    const phone = document.querySelector('#field-phone').value.toString();
    console.log(phone);
    const phonePassword = document.querySelector('#field-phone-password').value;
    const phoneCheckbox = document.querySelector('#checkbox-phone');
   // const phoneError = document.querySelector("#phone-error");

    try {
      const response = await fetch(`${baseURL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneOrEmail: phone,
          password: phonePassword
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.Message;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data);
      window.location.href="index.html"

      const token = data.token;
      const userId = token.userId;
      localStorage.setItem('token', data.token.accessToken);
      localStorage.setItem('userId', userId);
      console.log(token);
      console.log(userId);

      // phoneError.innerHTML = `Your token is: ${token.accessToken}`;

      if (phoneCheckbox.checked && phonePassword.trim() !== '') {
        localStorage.setItem('phonePassword', phonePassword);
      } else {
        localStorage.removeItem('phonePassword');
      }
      event.target.reset();
      
    
      

    } catch (error) {
      console.error('Error:', error);
    }
    
  });
};

renderLoginPhone();
