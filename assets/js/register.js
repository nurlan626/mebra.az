
const showRegister = () => {

  let register_person = document.querySelector(".register-person");
  let register_company = document.querySelector(".register-company");
  let select = document.getElementById("mySelect");
  let selectedOption = select.options[select.selectedIndex].value;
  console.log(selectedOption);

  register_person.style.display = "none";
  register_company.style.display = "none";

  if (selectedOption == "Fiziki_şəxs") {
    register_person.style.display = "block";

  } else if (selectedOption == "Mağaza_salon") {
    register_company.style.display = "block";
  } else if (selectedOption == "choose") {
    register_person.style.display = "block";
  }

}

showRegister();




const pwShowHide_company = document.querySelector(".eye-icon-company");

pwShowHide_company.addEventListener("click", () => {
  let pwFields_company = pwShowHide_company.parentElement.parentElement.querySelectorAll(".password");
  // console.log(pwFields_company);
  // console.log(pwShowHide_company);

  pwFields_company.forEach(password => {
    if (password.type === "password") {
      password.type = "text";
      pwShowHide_company.classList.replace("bx-hide", "bx-show");
      return;
    }
    password.type = "password";
    pwShowHide_company.classList.replace("bx-show", "bx-hide");
  })

});



const pwShowHide_companyConfirm = document.querySelector(".eye-icon-companyComfirm");

pwShowHide_companyConfirm.addEventListener("click", () => {
  let pwFields_company = pwShowHide_companyConfirm.parentElement.parentElement.querySelectorAll(".companyPasswordConfirm");
  // console.log(pwFields_company);
  // console.log(pwShowHide_companyConfirm);

  pwFields_company.forEach(password => {
    if (password.type === "password") {
      password.type = "text";
      pwShowHide_companyConfirm.classList.replace("bx-hide", "bx-show");
      return;
    }
    password.type = "password";
    pwShowHide_companyConfirm.classList.replace("bx-show", "bx-hide");
  })

});



const pwShowHide_person = document.querySelector(".eye-icon-person");

pwShowHide_person.addEventListener("click", () => {
  let pwFields_person = pwShowHide_person.parentElement.parentElement.querySelectorAll(".password");
  // console.log(pwFields_person);
  // console.log(pwShowHide_person);

  pwFields_person.forEach(password => {
    if (password.type === "password") {
      password.type = "text";
      pwShowHide_person.classList.replace("bx-hide", "bx-show");
      return;
    }
    password.type = "password";
    pwShowHide_person.classList.replace("bx-show", "bx-hide");
  })

});


const pwShowHide_personComfirm = document.querySelector(".eye-icon-personComfirm");

pwShowHide_personComfirm.addEventListener("click", () => {
  let pwFields_person = pwShowHide_personComfirm.parentElement.parentElement.querySelectorAll(".personPasswordConfirm");
  // console.log(pwFields_person);
  // console.log(pwShowHide_personComfirm);

  pwFields_person.forEach(password => {
    if (password.type === "password") {
      password.type = "text";
      pwShowHide_personComfirm.classList.replace("bx-hide", "bx-show");
      return;
    }
    password.type = "password";
    pwShowHide_personComfirm.classList.replace("bx-show", "bx-hide");
  })

});



// Map...
function initMap() {

  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.40926169999999, lng: 49.8670924 },
    zoom: 13
  });


  let inputSearch = document.getElementById('searchInput');


  let autocomplete = new google.maps.places.Autocomplete(inputSearch);
  autocomplete.bindTo('searchInput', inputSearch);

  let infowindow = new google.maps.InfoWindow();
  let marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function () {

    infowindow.close();
    marker.setVisible(false);
    let place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    marker.setIcon(({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    let address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }


    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);

    updateLocationDetails(place);

    // Location details
    // for (let i = 0; i < place.address_components.length; i++) {
    //   if( place.address_components[i].types[0] == 'postal_code' ) {
    //     document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
    //   }
    //   if( place.address_components[i].types[0] == 'country' ) {
    //     document.getElementById('country').innerHTML = place.address_components[i].long_name;
    //   }
    // }

    document.getElementById('location').innerHTML = place.formatted_address;
    document.getElementById('lat').innerHTML = place.geometry.location.lat();
    document.getElementById('lon').innerHTML = place.geometry.location.lng();

  });

  map.addListener('click', function (e) {
    infowindow.close();
    marker.setVisible(false);
    geocodeLatLng(e.latLng, function (place) {
      if (!place.geometry) {
        window.alert("Reverse geocoding failed for the selected location");
        return;
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address);
      infowindow.open(map, marker);

      updateLocationDetails(place);
    });
  });

  function geocodeLatLng(latLng, callback) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': latLng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
          callback(results[0]);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  }

  function updateLocationDetails(place) {
    document.getElementById('searchInput').value = place.formatted_address || '';
    document.getElementById('location').innerHTML = place.formatted_address || '';
    document.getElementById('lat').innerHTML = place.geometry.location.lat();
    document.getElementById('lon').innerHTML = place.geometry.location.lng();
  }

  function getComponentValue(place, type) {
    for (var i = 0; i < place.address_components.length; i++) {
      if (place.address_components[i].types.indexOf(type) !== -1) {
        return place.address_components[i].long_name;
      }
    }
    return '';
  }

}


function checkGeoData() {

  let location = document.getElementById("location").innerText;
  let lat = document.getElementById("lat").innerText;
  let lon = document.getElementById("lon").innerText;
  let searchInput = document.getElementById("searchInput").value;
  let inputAddress = document.getElementById('register-person-address');

  if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
    alert("Zəhmət olmasa ünvanı daxil edin");
    return;
  }
  inputAddress.value = location;
  let modal = document.getElementById("exampleModal_Person");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  document.getElementById("searchInput").value = "";
};

function initCompanyMap() {

  let map = new google.maps.Map(document.getElementById('company-map'), {
    center: { lat: 40.40926169999999, lng: 49.8670924 },
    zoom: 13
  });


  let inputSearchCompany = document.getElementById('searchInput-company');


  let autocomplete = new google.maps.places.Autocomplete(inputSearchCompany);
  autocomplete.bindTo('inputSearchCompany', inputSearchCompany);

  let infowindow = new google.maps.InfoWindow();
  let marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function () {

    infowindow.close();
    marker.setVisible(false);
    let place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    marker.setIcon(({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    let address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);

    updateLocationDetails(place);

    // Location details
    // for (let i = 0; i < place.address_components.length; i++) {
    //   if( place.address_components[i].types[0] == 'postal_code' ) {
    //     document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
    //   }
    //   if( place.address_components[i].types[0] == 'country' ) {
    //     document.getElementById('country').innerHTML = place.address_components[i].long_name;
    //   }
    // }

    document.getElementById('location-company').innerHTML = place.formatted_address;
    document.getElementById('lat-company').innerHTML = place.geometry.location.lat();
    document.getElementById('lon-company').innerHTML = place.geometry.location.lng();

  });

  map.addListener('click', function (e) {
    infowindow.close();
    marker.setVisible(false);
    geocodeLatLng(e.latLng, function (place) {
      if (!place.geometry) {
        window.alert("Reverse geocoding failed for the selected location");
        return;
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address);
      infowindow.open(map, marker);

      updateLocationDetails(place);
    });
  });

  function geocodeLatLng(latLng, callback) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': latLng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
          callback(results[0]);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  }

  function updateLocationDetails(place) {
    document.getElementById('searchInput-company').value = place.formatted_address || '';
    document.getElementById('location-company').innerHTML = place.formatted_address || '';
    document.getElementById('lat-company').innerHTML = place.geometry.location.lat();
    document.getElementById('lon-company').innerHTML = place.geometry.location.lng();
  }

  function getComponentValue(place, type) {
    for (var i = 0; i < place.address_components.length; i++) {
      if (place.address_components[i].types.indexOf(type) !== -1) {
        return place.address_components[i].long_name;
      }
    }
    return '';
  }

}


function checkGeoDataCompany() {

  let location = document.getElementById("location-company").innerText;
  let lat = document.getElementById("lat-company").innerText;
  let lon = document.getElementById("lon-company").innerText;
  let inputSearchCompany = document.getElementById("searchInput-company").value;
  let inputAddressCompany = document.getElementById('register-company-address');

  if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
    alert("Zəhmət olmasa ünvanı daxil edin");
    return;
  }
  inputAddressCompany.value = location;
  let modal = document.getElementById("exampleModal_Company");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  document.getElementById("searchInput-company").value = "";

};

function initMapAndCompanyMap() {
  initMap();
  initCompanyMap();
}



const baseURL = "http://ruslanali803-001-site1.htempurl.com/";
const pathAddress = "api/Address/Create";
const path = "api/Users/CreateUser";





const renderCreateAddress = async () => {

  const createAddress = document.querySelector('#create-address');
  createAddress.addEventListener('click', async (event) => {
    event.preventDefault();



    let location = document.getElementById('location').innerText;
    let lat = document.getElementById('lat').innerText;
    let lon = document.getElementById('lon').innerText;
    let latNumber = Number(lat);
    let lonNumber = Number(lon);
    // console.log(location);
    // console.log(lat);
    // console.log(lon);

    if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
      return;
    }


    try {
      const response = await fetch(`${baseURL}${pathAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          displayName: location,
          lat: latNumber,
          lon: lonNumber
        })
      });

      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.Message;
        throw new Error(errorMessage);
      }

      const regPersonAddress = document.querySelector('#register-person-address');
      const data = await response.json();
      console.log(data);
      console.log(regPersonAddress.value);
      localStorage.setItem('address', regPersonAddress.value);
      const dataAddressId = data.addressId;
      localStorage.setItem('localAddressPerson', dataAddressId);

      console.log(dataAddressId);



    } catch (error) {
      console.error('Error:', error);
    }

  });



};

renderCreateAddress();




const renderCreateAddressCompany = async () => {

  const createAddressCompany = document.querySelector('#create-address-company');
  createAddressCompany.addEventListener('click', async (event) => {
    event.preventDefault();



    let location = document.getElementById('location-company').innerText;
    let lat = document.getElementById('lat-company').innerText;
    let lon = document.getElementById('lon-company').innerText;
    let latNumber = Number(lat);
    let lonNumber = Number(lon);
    // console.log(location);
    // console.log(lat);
    // console.log(lon);

    if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
      return;
    }


    try {
      const response = await fetch(`${baseURL}${pathAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          displayName: location,
          lat: latNumber,
          lon: lonNumber
        })
      });

      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.Message;
        throw new Error(errorMessage);
      }

      const regCompanyAddress = document.querySelector('#register-company-address');
      const data = await response.json();
      console.log(data);
      console.log(regCompanyAddress.value);
      localStorage.setItem('address', regCompanyAddress.value);
      const dataAddressId = data.addressId;
      localStorage.setItem('localAddressCompany', dataAddressId);

      console.log(dataAddressId);



    } catch (error) {
      console.error('Error:', error);
    }

  });



};

renderCreateAddressCompany();


document.addEventListener('DOMContentLoaded', function () {
  const storedEmail = localStorage.getItem('emailInputOtp');
  const personSetEmail = document.querySelector("#register-person-email");
  const companySetEmail = document.querySelector("#register-company-email");
  personSetEmail.value = storedEmail;
  companySetEmail.value = storedEmail;

  if (personSetEmail.value.trim() !== "") {
    let placeholderText = "Telefon nömrəsi daxil edin";
    document.getElementById('register-person-phone').setAttribute('placeholder', placeholderText);
    document.getElementById('register-company-phone').setAttribute('placeholder', placeholderText);
  }

});





//#region RegisterPerson
const renderRegisterPerson = (dataAddressId) => {



  // const registerPersonButton = document.querySelector('#register-person__button');
  // registerPersonButton.addEventListener('click',  async (event) => {
  // event.preventDefault();


  const personSelect = document.querySelector('#mySelect');
  const personSelectedOption = personSelect.options[personSelect.selectedIndex];
  console.log(personSelectedOption);
  const personSelectedOptionId = personSelectedOption.id;
  console.log(personSelectedOptionId);
  const convertPersonSelectedOptionId = Number(personSelectedOptionId);
  const personName = document.querySelector('#register-person-name').value;
  const personSurname = document.querySelector('#register-person-surname').value;
  const personEmail = document.querySelector("#register-person-email").value;
  const personPhone = document.querySelector('#register-person-phone').value.toString();
  const personPassword = document.querySelector('#register-person-password').value;
  const personPasswordConfirm = document.querySelector('#register-person-passwordConfirm').value;
  const personAddressId = localStorage.getItem('localAddressPerson');

  const nameErrorSetMessage = document.querySelector('.person-name');
  const surNameErrorSetMessage = document.querySelector('.person-surname');


  const postPersonData = async () => {
    try {

      const formData = new FormData();
      formData.append('userStatus', convertPersonSelectedOptionId);
      formData.append('salonName', personName);
      formData.append('email', personEmail);
      formData.append('phoneNumber', personPhone);
      formData.append('password', personPassword);
      formData.append('passwordConfirm', personPasswordConfirm);
      formData.append('name', personName);
      formData.append('surname', personSurname);
      formData.append('description', "companyDescription");
      formData.append('addressId', personAddressId);
      formData.append('files', "selectedFile")
      const response = await fetch(`${baseURL}${path}`, {
        method: 'POST',
        body: formData
      });


      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        errorData.forEach(error => {
          console.log(error);
          console.log(error.key)
          console.log(error.value[2])
        })
        const errorMessage = errorData.Message;
        throw new Error(errorMessage);

      }

      const data = await response.json();
      console.log(data);
      window.location.href = "login.html";
      event.target.reset();



    } catch (error) {
      console.error('Error:', error);
    }
  }

  postPersonData();

  // });


};

const registerPersonButton = document.querySelector('#register-person__button');
registerPersonButton.addEventListener("click", renderRegisterPerson);
//#endregion









// renderRegisterPerson();
//#region Company

let selectedFile = null

// const imageInput = document.querySelector('#file');
// imageInput.addEventListener("change",(e) => {

//   selectedFile = e.target.files[0]
// })

const imageInput = document.querySelector('#file');
const previewContainer = document.querySelector('#preview-container_company');

imageInput.addEventListener("change", (e) => {
  const selectedFile = e.target.files[0];

  const previewImage = document.createElement('img');
  previewImage.classList.add('preview-image');
  previewImage.file = selectedFile;


  previewContainer.innerHTML = '';
  previewContainer.appendChild(previewImage);


  const reader = new FileReader();
  reader.onload = (event) => {
    previewImage.src = event.target.result;
  };
  reader.readAsDataURL(selectedFile);
});




const renderRegisterCompany = (dataAddressId) => {

  const companySelect = document.querySelector('#mySelect');
  const companySelectedOption = companySelect.options[companySelect.selectedIndex];
  const companySelectedOptionId = companySelectedOption.id;
  const convertCompanySelectedOptionId = Number(companySelectedOptionId);
  const companyName = document.querySelector('#register-companyName').value;
  const companyPhone = document.querySelector('#register-company-phone').value.toString();
  const companyEmail = document.querySelector('#register-company-email').value;
  const companyPassword = document.querySelector('#register-company-password').value;
  const companyPasswordConfirm = document.querySelector('#register-company-passwordConfirm').value;
  const companyDescription = document.querySelector('#register-company-description').value;
  const companyAddress = localStorage.getItem('localAddressCompany');

  const storedEmail = localStorage.getItem('emailInputOtp');
  companyEmail.value = storedEmail;


  

  const postData = async () => {
    try {
      console.log([selectedFile])
      const formData = new FormData();
      formData.append('userStatus', convertCompanySelectedOptionId);
      formData.append('salonName', companyName);
      formData.append('email', companyEmail);
      formData.append('phoneNumber', companyPhone);
      formData.append('password', companyPassword);
      formData.append('passwordConfirm', companyPasswordConfirm);
      formData.append('name', companyName);
      formData.append('surname', "One");
      formData.append('description', companyDescription);
      formData.append('addressId', companyAddress);
      formData.append('files', selectedFile)

      const response = await fetch(`${baseURL}${path}`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.Message;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data);
      window.location.href = "login.html";
      event.target.reset();

    } catch (error) {
      console.error('Error:', error);
    }
  }

  postData()

};



const registerCompanyButton = document.querySelector('#register-company__button');
registerCompanyButton.addEventListener("click", renderRegisterCompany);


//#endregion














