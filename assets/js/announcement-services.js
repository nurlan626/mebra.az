// Services...
const selectBtnServices = document.querySelector(".select-btn-services"),
announcement_item_services = document.querySelectorAll(".announcement_item_services");

selectBtnServices.addEventListener("click", () => {
    selectBtnServices.classList.toggle("open");
});

announcement_item_services.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});


// Cities...
const selectBtnCities = document.querySelector(".select-btn-cities"),
announcement_item_cities = document.querySelectorAll(".item__filter-product");

selectBtnCities.addEventListener("click", () => {
    selectBtnCities.classList.toggle("open");
});

announcement_item_cities.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});


// Map...
function initMap() {

    let map = new google.maps.Map(document.getElementById('announcement-services__map'), {
      center: { lat: 40.40926169999999, lng: 49.8670924 },
      zoom: 13
    });
  
    
    let inputSearch = document.getElementById('announcement-services__searchInput');
    
    
    let autocomplete = new google.maps.places.Autocomplete(inputSearch);
    autocomplete.bindTo('searchInput', inputSearch);
    
    let infowindow = new google.maps.InfoWindow();
    let marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });
    
    autocomplete.addListener('place_changed', function() {
    
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
    
      // Location details
      // for (let i = 0; i < place.address_components.length; i++) {
      //   if( place.address_components[i].types[0] == 'postal_code' ) {
      //     document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
      //   }
      //   if( place.address_components[i].types[0] == 'country' ) {
      //     document.getElementById('country').innerHTML = place.address_components[i].long_name;
      //   }
      // }
  
      document.getElementById('announcement-services__location').innerHTML = place.formatted_address;
      document.getElementById('announcement-services__lat').innerHTML = place.geometry.location.lat();
      document.getElementById('announcement-services__lon').innerHTML = place.geometry.location.lng();
      
    });
  
}
  
  
function checkGeoData() {
  
  let location = document.getElementById("announcement-services__location").innerText;
  let lat = document.getElementById("announcement-services__lat").innerText;
  let lon = document.getElementById("announcement-services__lon").innerText;

  if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
    alert("Zəhmət olmasa ünvanı daxil edin");
    return;
  }
    
  let modal = document.getElementById("exampleModal_Services");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
  document.getElementById("announcement-services__searchInput").value = "";
  
}