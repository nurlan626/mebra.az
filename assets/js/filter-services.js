// City....
const selectBtnCity = document.querySelector(".select-btn-city"),
itemsCity = document.querySelectorAll(".item_city");

selectBtnCity.addEventListener("click", () => {
    selectBtnCity.classList.toggle("open");
});

itemsCity.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");     
    });
});


// List...
const selectBtnList = document.querySelector(".select-btn-list-item"),
itemsButtonList = document.querySelectorAll(".item_button-list");

selectBtnList.addEventListener("click", () => {
    selectBtnList.classList.toggle("open");
});

itemsButtonList.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});


// Filter...
const selectBtnFilter = document.querySelector(".select-btn-filter"),
itemsButtonFilter = document.querySelectorAll(".item_filter");

selectBtnFilter.addEventListener("click", () => {
    selectBtnFilter.classList.toggle("open");
});

itemsButtonFilter.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});



// Filter-Product...
const selectBtnFilterServices = document.querySelector(".select-btn-filter-services"),
itemsButtonFilterServices = document.querySelectorAll(".item__filter-services");

selectBtnFilterServices.addEventListener("click", () => {
    selectBtnFilterServices.classList.toggle("open");
});

itemsButtonFilterServices.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});


// Filter-Product-Price...
const selectBtnFilterProductPrice = document.querySelector(".select-btn-filter-price"),
itemsButtonFilterProductPrice = document.querySelectorAll(".item__filter-price");

selectBtnFilterProductPrice.addEventListener("click", () => {
    selectBtnFilterProductPrice.classList.toggle("open");
});

itemsButtonFilterProductPrice.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});


// Filter-Product-Brand...
const selectBtnFilterProductBrand = document.querySelector(".select-btn-filter-brand"),
itemsButtonFilterProductBrand = document.querySelectorAll(".item__filter-brand");

selectBtnFilterProductBrand.addEventListener("click", () => {
    selectBtnFilterProductBrand.classList.toggle("open");
});

itemsButtonFilterProductBrand.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});



// Filter-Product-City...
const selectBtnFilterProductCity = document.querySelector(".select-btn-filter-city"),
itemsButtonFilterProductCity = document.querySelectorAll(".item__filter-city");

selectBtnFilterProductCity.addEventListener("click", () => {
    selectBtnFilterProductCity.classList.toggle("open");
});

itemsButtonFilterProductCity.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");    
    });
});















