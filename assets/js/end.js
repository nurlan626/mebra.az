const baseUrl = 'http://mebra.az/';
const getAllAdverts = 'api/Adverts/GetAllAdverts';
const getAllAdvertsImages = 'api/Adverts/UploadAdvertImage';
const getConditionOfFurniture = 'api/Search/ConditionOfFurniture';
const getAllCategory = 'api/Category/GetAllCategory'
const getCategoryFeature = 'api/Category/GetCategoryFeature'
const getAllMaterials = 'api/Search/GetAllMaterials'
const getAllDesignsStyles = 'api/Search/GetAllDesignStyles'
const getAllCountry = 'api/Search/GetAllCountries'
const getAllCities = 'api/Search/GetAllCities'
const getAllColors = 'api/Search/GetAllColors'
const getAllPrices = 'api/Search/GetAllSPrice'
const getAllBrend = 'api/Search/ManufacturerBrand'
const filterAPI = 'api/Search/Filter'

// Filter-Desktop...
const selectBtnFilter = document.querySelector(".select-btn-filter");
const desktopFilterClose = document.querySelector(".filters-close-icon")

selectBtnFilter.addEventListener("click", () => {
    selectBtnFilter.classList.toggle("open");
});

desktopFilterClose.addEventListener("click", () => {
    selectBtnFilter.classList.remove("open");
});






// Filter-Products-Desktop...
const selectBtnFilterProduct = document.querySelector(".select-btn-filter-product"),
    itemsButtonFilterProduct = document.querySelectorAll(".item__filter-product");
const listItemsFilterProduct = document.querySelector('.list-items-filter-product');
const conditionOfProductSearchİnput = document.querySelector(".conditionOfProductSearchİnput")
let isProductsLoading = false;
let checkedproductId;
let productId;
let productIds = []

conditionOfProductSearchİnput.addEventListener("input", () => {
    fetchGetConditionOfFurniture();
   
})
const fetchGetConditionOfFurniture = async () => {
    console.log("fetchGetConditionOfFurniture");
    listItemsFilterProduct.innerHTML = `
         <div class="button-app">
             <button id="clearButtonFilterProducts">Təmizlə</button>
         </div>
        <div class="button-app">
            <button type="click" id="closeButtonFilterProducts">Tətbiq et </button>
        </div>
    `;
    if (!isProductsLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getConditionOfFurniture}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            let furnitureStatuses = data?.furnitureStatuses;

            // filter by input
            furnitureStatuses = furnitureStatuses.filter((furnitureStatuse) => furnitureStatuse.name.toLowerCase().includes(conditionOfProductSearchİnput.value.toLowerCase()))
            
            furnitureStatuses.forEach((furnitureStatus) => {
                const furnitureName = furnitureStatus?.name;
                const productId = furnitureStatus.id;
                const html = `  
                <li class="item filterProductItems item__filter-product d-flex justify-content-between align-items-center">
                <span id="${productId}" class="item-text">${furnitureName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>`
                listItemsFilterProduct.insertAdjacentHTML("afterbegin", html);
            })

            const filterProductItems = document.querySelectorAll('.filterProductItems')
            console.log(filterProductItems)
            filterProductItems.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    filterAdvertsByProducts(productIds);
                    const productId = item.querySelector('.item-text').getAttribute("id");
                    if (item.classList.contains("checked")) {
                        productIds.push(productId); 
                    } else {
                        const index = productIds.indexOf(productId);
                        if (index > -1) {
                            productIds.splice(index, 1); 
                        }
                    }
                    console.log(productIds);
                });
            });
            isProductsLoading = true;
        } catch (err) {
            console.log(err.message);
        }
        isProductsLoading = false
    }
}

selectBtnFilterProduct.addEventListener("click", () => {
    selectBtnFilterProduct.classList.toggle("open");
    fetchGetConditionOfFurniture()
    
});

itemsButtonFilterProduct.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});

async function filterAdvertsByProducts(productIds) {
    try {
        const res = await fetch('http://ruslanali803-001-site1.htempurl.com/api/Search/Filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productIds: productIds
            })
        });

        if (!res.ok)
            throw new Error("Something went wrong");

        const filteredAdverts = await res.json();
        console.log(filteredAdverts);
    } catch (err) {
        console.log(err.message);
    }
}

let filterProducts = document.querySelectorAll(".list-items-filter-product .item__filter-product");
let clearButtonFilterProducts = document.getElementById("clearButtonFilterProducts");
let closeButtonFilterProducts = document.getElementById("closeButtonFilterProducts");
let selectedProducts = [];

filterProducts.forEach(function (product) {
    product.addEventListener("click", function () {
        if (selectedProducts.includes(product)) {
            product.classList.remove("checked");
            selectedProducts = selectedProducts.filter(function (selectedProduct) {
                return selectedProduct !== product;
            });
        } else {
            product.classList.add("checked");
            selectedProducts.push(product);
        }

        if (selectedProducts.length > 0) {
            clearButtonFilterProducts.style.display = "block";
        } else {
            clearButtonFilterProducts.style.display = "none";
        }
    });
});

clearButtonFilterProducts.addEventListener("click", function () {
    selectedProducts.forEach(function (selectedProduct) {
        selectedProduct.classList.remove("checked");
    });
    clearButtonFilterProducts.style.display = "none";
    selectedProducts = [];
});



// Filter-Products-Mobile...
let filterProductsMobile = document.querySelectorAll(".list-items-for-category .item__filter-product");
let clearButtonFilterProductsMobile = document.getElementById("clearButtonFilterProductsMobile");
let closeButtonFilterProductsMobile = document.getElementById("closeButtonFilterProductsMobile");
let selectedProductsMobile = [];
let mobileProduct = document.querySelector(".mobile-product");
let isProductLoadingMobile = false

document.addEventListener('DOMContentLoaded', async function () {
    if (!isProductLoadingMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getConditionOfFurniture}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const furnitureStatuses = data?.furnitureStatuses
            furnitureStatuses.forEach((furnitureStatus) => {
                const furnitureName = furnitureStatus?.name;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center">
                <span class="item-subtext">${furnitureName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
               </li>
               `
                mobileProduct.insertAdjacentHTML("beforeend", html);
            })
            isProductLoadingMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterProductsMobile.forEach(function (product) {
    product.addEventListener("click", function () {
        if (selectedProductsMobile.includes(product)) {
            product.classList.remove("checked");
            selectedProductsMobile = selectedProductsMobile.filter(function (selectedProductsMobile) {
                return selectedProductsMobile !== product;
            });
        } else {
            product.classList.add("checked");
            selectedProductsMobile.push(product);
        }

        if (selectedProductsMobile.length > 0) {
            clearButtonFilterProductsMobile.style.display = "block";
        } else {
            clearButtonFilterProductsMobile.style.display = "none";
        }
    });
});

clearButtonFilterProductsMobile.addEventListener("click", function () {
    selectedProductsMobile.forEach(function (selectedProductsMobile) {
        selectedProductsMobile.classList.remove("checked");
    });
    clearButtonFilterProductsMobile.style.display = "none";
    selectedProductsMobile = [];
});







// Filter-Brand-Desktop...
const selectBtnFilterProductBrand = document.querySelector(".select-btn-filter-brand"),
    itemsButtonFilterProductBrand = document.querySelectorAll(".item__filter-brand");
let isBrandItems = false
let listItemsFilterBrand = document.querySelector('.list-items-filter-brand');


selectBtnFilterProductBrand.addEventListener("click", async () => {
    selectBtnFilterProductBrand.classList.toggle("open");
    if (!isBrandItems) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllBrend}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const manufacturerBrands = data?.manufacturerBrands
            manufacturerBrands.forEach((manufacturerBrand) => {
                const html = `  
                <li class="item item__filter-brand d-flex justify-content-between align-items-center">
                <span class="item-text">${manufacturerBrand.name}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                listItemsFilterBrand.insertAdjacentHTML("afterbegin", html);
            })
            isBrandItems = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsButtonFilterProductBrand.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});



let filterBrands = document.querySelectorAll(".list-items-filter-brand .item__filter-brand");
let clearButtonFilterBrand = document.getElementById("clearButtonFilterBrand");
let closeButtonFilterBrand = document.getElementById("closeButtonFilterBrand");
let selectedBrand = [];

filterBrands.forEach(function (brand) {
    brand.addEventListener("click", function () {
        if (selectedBrand.includes(brand)) {
            brand.classList.remove("checked");
            selectedBrand = selectedBrand.filter(function (selectedBrand) {
                return selectedBrand !== brand;
            });
        } else {
            brand.classList.add("checked");
            selectedBrand.push(brand);
        }

        if (selectedBrand.length > 0) {
            clearButtonFilterBrand.style.display = "block";
        } else {
            clearButtonFilterBrand.style.display = "none";
        }
    });
});

clearButtonFilterBrand.addEventListener("click", function () {
    selectedBrand.forEach(function (selectedBrand) {
        selectedBrand.classList.remove("checked");
    });
    clearButtonFilterBrand.style.display = "none";
    selectedBrand = [];
});


// Filter-Brand-Mobile...
let filterBrandsMobile = document.querySelectorAll(".list-items-for-category .item_brand_mobile");
let clearButtonFilterBrandMobile = document.getElementById("clearButtonFilterBrandMobile");
let closeButtonFilterBrandMobile = document.getElementById("closeButtonFilterBrandMobile");
let selectedBrandMobile = [];
let isBrandMobile = false
let brandMobile = document.querySelector('.brand-mobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isBrandMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllBrend}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const manufacturerBrands = data?.manufacturerBrands
            manufacturerBrands.forEach((manufacturerBrand) => {
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_brand_mobile">
                <span class="item-subtext">${manufacturerBrand?.name}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                brandMobile.insertAdjacentHTML("beforeend", html);
            })
            isBrandMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterBrandsMobile.forEach(function (brand) {
    brand.addEventListener("click", function () {
        if (selectedBrandMobile.includes(brand)) {
            brand.classList.remove("checked");
            selectedBrandMobile = selectedBrandMobile.filter(function (selectedBrandMobile) {
                return selectedBrandMobile !== brand;
            });
        } else {
            brand.classList.add("checked");
            selectedBrandMobile.push(brand);
        }

        if (selectedBrandMobile.length > 0) {
            clearButtonFilterBrandMobile.style.display = "block";
        } else {
            clearButtonFilterBrandMobile.style.display = "none";
        }
    });
});

clearButtonFilterBrandMobile.addEventListener("click", function () {
    selectedBrandMobile.forEach(function (selectedBrandMobile) {
        selectedBrandMobile.classList.remove("checked");
    });
    clearButtonFilterBrandMobile.style.display = "none";
    selectedBrandMobile = [];
});





// Filter-Type-Desktop...
const selectBtnFilterProductType = document.querySelector(".select-btn-filter-type"),
    itemsButtonFilterProductType = document.querySelectorAll(".item__filter-type");
const listItemsFilterType = document.querySelector('.list-items-filter-type')
let isPersonTypeLoading = false;

selectBtnFilterProductType.addEventListener("click", async () => {
    selectBtnFilterProductType.classList.toggle("open");

    if (!isPersonTypeLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getCategoryFeature}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const categoriesType = data.getFeaturesResponse[13].featureResponseDtos[0].keywords
            categoriesType.forEach((categoryType) => {
                const categoryTypeName = categoryType?.key;
                const html = `
                <li class="item item__filter-type d-flex justify-content-between align-items-center">
                    <span class="item-text">${categoryTypeName}</span>
                        <span class="checkbox">
                            <i class="fa-solid fa-check check-icon"></i>
                        </span>
                </li>
                `;
                listItemsFilterType.insertAdjacentHTML("afterbegin", html);
            })
            isPersonTypeLoading = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsButtonFilterProductType.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});



let filterType = document.querySelectorAll(".list-items-filter-type .item__filter-type");
let clearButtonFilterType = document.getElementById("clearButtonFilterType");
let closeButtonFilterType = document.getElementById("closeButtonFilterType");
let selectedType = [];

filterType.forEach(function (type) {
    type.addEventListener("click", function () {
        if (selectedType.includes(type)) {
            type.classList.remove("checked");
            selectedType = selectedType.filter(function (selectedType) {
                return selectedType !== type;
            });
        } else {
            type.classList.add("checked");
            selectedType.push(type);
        }

        if (selectedType.length > 0) {
            clearButtonFilterType.style.display = "block";
        } else {
            clearButtonFilterType.style.display = "none";
        }
    });
});

clearButtonFilterType.addEventListener("click", function () {
    selectedType.forEach(function (selectedType) {
        selectedType.classList.remove("checked");
    });
    clearButtonFilterType.style.display = "none";
    selectedType = [];
});


// Filter-Type-Mobile...
let filterTypeMobile = document.querySelectorAll(".list-items-for-category .item_type_mobile");
let clearButtonFilterTypeMobile = document.getElementById("clearButtonFilterTypeMobile");
let closeButtonFilterTypeMobile = document.getElementById("closeButtonFilterTypeMobile");
let selectedTypeMobile = [];
let isTypeLoadingMobile = false;
let personTypeMobile = document.querySelector('.personTypeMobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isTypeLoadingMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getCategoryFeature}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const categoriesType = data.getFeaturesResponse[13].featureResponseDtos[0].keywords
            categoriesType.forEach((categoryType) => {
                const categoryTypeName = categoryType?.key;
                const html = `
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_type_mobile">
                <span class="item-subtext">${categoryTypeName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
            </li>
                `;
                personTypeMobile.insertAdjacentHTML("beforeend", html);
            })
            isTypeLoadingMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterTypeMobile.forEach(function (type) {
    type.addEventListener("click", function () {
        if (selectedTypeMobile.includes(type)) {
            type.classList.remove("checked");
            selectedTypeMobile = selectedTypeMobile.filter(function (selectedTypeMobile) {
                return selectedTypeMobile !== type;
            });
        } else {
            type.classList.add("checked");
            selectedTypeMobile.push(type);
        }

        if (selectedTypeMobile.length > 0) {
            clearButtonFilterTypeMobile.style.display = "block";
        } else {
            clearButtonFilterTypeMobile.style.display = "none";
        }
    });
});

clearButtonFilterTypeMobile.addEventListener("click", function () {
    selectedTypeMobile.forEach(function (selectedTypeMobile) {
        selectedTypeMobile.classList.remove("checked");
    });
    clearButtonFilterTypeMobile.style.display = "none";
    selectedTypeMobile = [];
});



// Filter-Size-Desktop...
const selectBtnFilterProductSize = document.querySelector(".select-btn-filter-size"),
    itemsButtonFilterProductSize = document.querySelectorAll(".item__filter-size");

selectBtnFilterProductSize.addEventListener("click", () => {
    selectBtnFilterProductSize.classList.toggle("open");
});

itemsButtonFilterProductSize.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


const rangeInputWidth = document.querySelectorAll(".filterSize_WidthRange input"),
    priceInputWidth = document.querySelectorAll(".filterSize_WidthPriceInput input"),
    rangeWidth = document.querySelector(".filterSize_WidthSlider .progress");
let priceGap = 1000;



priceInputWidth.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputWidth[0].value),
            maxPrice = parseInt(priceInputWidth[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputWidth[1].max) {
            if (e.target.className === "input-min") {
                rangeInputWidth[0].value = minPrice;
                rangeWidth.style.left = ((minPrice / rangeInputWidth[0].max) * 100) + "%";
            } else {
                rangeInputWidth[1].value = maxPrice;
                rangeWidth.style.right = 100 - (maxPrice / rangeInputWidth[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputWidth.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputWidth[0].value),
            maxVal = parseInt(rangeInputWidth[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInputWidth[0].value = maxVal - priceGap
            } else {
                rangeInputWidth[1].value = minVal + priceGap;
            }
        } else {
            priceInputWidth[0].value = minVal;
            priceInputWidth[1].value = maxVal;
            rangeWidth.style.left = ((minVal / rangeInputWidth[0].max) * 100) + "%";
            rangeWidth.style.right = 100 - (maxVal / rangeInputWidth[1].max) * 100 + "%";
        }
    });
});




const rangeInputWidthMobile = document.querySelectorAll(".filterSize_WidthRange input"),
    priceInputWidthMobile = document.querySelectorAll(".filterSize_WidthPriceInput input"),
    rangeWidthMobile = document.querySelector(".filterSize_WidthSlider .progress");
let priceGapMobile = 1000;



priceInputWidthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputWidthMobile[0].value),
            maxPrice = parseInt(priceInputWidthMobile[1].value);

        if ((maxPrice - minPrice >= priceGapMobile) && maxPrice <= rangeInputWidthMobile[1].max) {
            if (e.target.className === "input-min") {
                rangeInputWidthMobile[0].value = minPrice;
                rangeWidthMobile.style.left = ((minPrice / rangeInputWidthMobile[0].max) * 100) + "%";
            } else {
                rangeInputWidthMobile[1].value = maxPrice;
                rangeWidthMobile.style.right = 100 - (maxPrice / rangeInputWidthMobile[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputWidthMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputWidthMobile[0].value),
            maxVal = parseInt(rangeInputWidthMobile[1].value);

        if ((maxVal - minVal) < priceGapMobile) {
            if (e.target.className === "range-min") {
                rangeInputWidthMobile[0].value = maxVal - priceGapMobile
            } else {
                rangeInputWidthMobile[1].value = minVal + priceGapMobile;
            }
        } else {
            priceInputWidthMobile[0].value = minVal;
            priceInputWidthMobile[1].value = maxVal;
            rangeWidthMobile.style.left = ((minVal / rangeInputWidthMobile[0].max) * 100) + "%";
            rangeWidthMobile.style.right = 100 - (maxVal / rangeInputWidthMobile[1].max) * 100 + "%";
        }
    });
});



const rangeInputLength = document.querySelectorAll(".filterSize_LengthRange input"),
    priceInputLength = document.querySelectorAll(".filterSize_LengthPriceInput input"),
    rangeLength = document.querySelector(".filterSize_LengthSlider .progress");
let priceGapLength = 1000;

priceInputLength.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputLength[0].value),
            maxPrice = parseInt(priceInputLength[1].value);

        if ((maxPrice - minPrice >= priceGapLength) && maxPrice <= rangeInputLength[1].max) {
            if (e.target.className === "input-min") {
                rangeInputLength[0].value = minPrice;
                rangeLength.style.left = ((minPrice / rangeInputLength[0].max) * 100) + "%";
            } else {
                rangeInputLength[1].value = maxPrice;
                rangeLength.style.right = 100 - (maxPrice / rangeInputLength[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputLength.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputLength[0].value),
            maxVal = parseInt(rangeInputLength[1].value);

        if ((maxVal - minVal) < priceGapLength) {
            if (e.target.className === "range-min") {
                rangeInputLength[0].value = maxVal - priceGapLength
            } else {
                rangeInputLength[1].value = minVal + priceGapLength;
            }
        } else {
            priceInputLength[0].value = minVal;
            priceInputLength[1].value = maxVal;
            rangeLength.style.left = ((minVal / rangeInputLength[0].max) * 100) + "%";
            rangeLength.style.right = 100 - (maxVal / rangeInputLength[1].max) * 100 + "%";
        }
    });
});



const rangeInputHeight = document.querySelectorAll(".filterSize_HeightRange input"),
    priceInputHeight = document.querySelectorAll(".filterSize_HeightPriceInput input"),
    rangeHeight = document.querySelector(".filterSize_HeightSlider .progress");
let priceGapHeight = 1000;

priceInputHeight.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputHeight[0].value),
            maxPrice = parseInt(priceInputHeight[1].value);

        if ((maxPrice - minPrice >= priceGapHeight) && maxPrice <= rangeInputHeight[1].max) {
            if (e.target.className === "input-min") {
                rangeInputHeight[0].value = minPrice;
                rangeHeight.style.left = ((minPrice / rangeInputHeight[0].max) * 100) + "%";
            } else {
                rangeInputHeight[1].value = maxPrice;
                rangeHeight.style.right = 100 - (maxPrice / rangeInputHeight[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputHeight.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputHeight[0].value),
            maxVal = parseInt(rangeInputHeight[1].value);

        if ((maxVal - minVal) < priceGapHeight) {
            if (e.target.className === "range-min") {
                rangeInputHeight[0].value = maxVal - priceGapHeight
            } else {
                rangeInputHeight[1].value = minVal + priceGapHeight;
            }
        } else {
            priceInputHeight[0].value = minVal;
            priceInputHeight[1].value = maxVal;
            rangeHeight.style.left = ((minVal / rangeInputHeight[0].max) * 100) + "%";
            rangeHeight.style.right = 100 - (maxVal / rangeInputHeight[1].max) * 100 + "%";
        }
    });
});



const rangeInputDepth = document.querySelectorAll(".filterSize_DepthRange input"),
    priceInputDepth = document.querySelectorAll(".filterSize_DepthPriceInput input"),
    rangeDepth = document.querySelector(".filterSize_DepthSlider .progress");
let priceGapDepth = 1000;

priceInputDepth.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInputDepth[0].value),
            maxPrice = parseInt(priceInputDepth[1].value);

        if ((maxPrice - minPrice >= priceGapDepth) && maxPrice <= rangeInputDepth[1].max) {
            if (e.target.className === "input-min") {
                rangeInputDepth[0].value = minPrice;
                rangeDepth.style.left = ((minPrice / rangeInputDepth[0].max) * 100) + "%";
            } else {
                rangeInputDepth[1].value = maxPrice;
                rangeDepth.style.right = 100 - (maxPrice / rangeInputDepth[1].max) * 100 + "%";
            }
        }
    });
});

rangeInputDepth.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputDepth[0].value),
            maxVal = parseInt(rangeInputDepth[1].value);

        if ((maxVal - minVal) < priceGapDepth) {
            if (e.target.className === "range-min") {
                rangeInputDepth[0].value = maxVal - priceGapDepth
            } else {
                rangeInputDepth[1].value = minVal + priceGapDepth;
            }
        } else {
            priceInputDepth[0].value = minVal;
            priceInputDepth[1].value = maxVal;
            rangeDepth.style.left = ((minVal / rangeInputDepth[0].max) * 100) + "%";
            rangeDepth.style.right = 100 - (maxVal / rangeInputDepth[1].max) * 100 + "%";
        }
    });
});





// Filter-Material-Desktop...
const selectBtnFilterProductMaterial = document.querySelector(".select-btn-filter-material"),
    itemsButtonFilterProductMaterial = document.querySelectorAll(".item__filter-material");
let isMaterialLoading = false;
const listItemsFilterMaterial = document.querySelector('.list-items-filter-material');

selectBtnFilterProductMaterial.addEventListener("click", async () => {
    selectBtnFilterProductMaterial.classList.toggle("open");
    if (!isMaterialLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllMaterials}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const materils = data?.materils
            materils.forEach((materil) => {
                const materilName = materil?.name;
                const html = `  
                <li class="item item__filter-material d-flex justify-content-between align-items-center">
                <span class="item-text">${materilName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
               </li>
                `
                listItemsFilterMaterial.insertAdjacentHTML("afterbegin", html);
            })
            isMaterialLoading = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsButtonFilterProductMaterial.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});



let filterMaterial = document.querySelectorAll(".list-items-filter-material .item__filter-material");
let clearButtonFilterMaterial = document.getElementById("clearButtonFilterMaterial");
let closeButtonFilterMaterial = document.getElementById("closeButtonFilterMaterial");
let selectedMaterial = [];

filterMaterial.forEach(function (material) {
    material.addEventListener("click", function () {
        if (selectedMaterial.includes(material)) {
            material.classList.remove("checked");
            selectedMaterial = selectedMaterial.filter(function (selectedMaterial) {
                return selectedMaterial !== material;
            });
        } else {
            material.classList.add("checked");
            selectedMaterial.push(material);
        }

        if (selectedMaterial.length > 0) {
            clearButtonFilterMaterial.style.display = "block";
        } else {
            clearButtonFilterMaterial.style.display = "none";
        }
    });
});

clearButtonFilterMaterial.addEventListener("click", function () {
    selectedMaterial.forEach(function (selectedMaterial) {
        selectedMaterial.classList.remove("checked");
    });
    clearButtonFilterMaterial.style.display = "none";
    selectedMaterial = [];
});


// Filter-Material-Mobile...
let filterMaterialMobile = document.querySelectorAll(".list-items-for-category .item_material_mobile");
let clearButtonFilterMaterialMobile = document.getElementById("clearButtonFilterMaterialMobile");
let closeButtonFilterMaterialMobile = document.getElementById("closeButtonFilterMaterialMobile");
let selectedMaterialMobile = [];
let isMaterialMobile = false;
let materialMobile = document.querySelector('.material-mobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isMaterialMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllMaterials}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const materils = data?.materils
            materils.forEach((materil) => {
                const materilName = materil?.name;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_material_mobile">
                <span class="item-subtext">${materilName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                materialMobile.insertAdjacentHTML("beforeend", html);
            })
            isMaterialMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterMaterialMobile.forEach(function (material) {
    material.addEventListener("click", function () {
        if (selectedMaterialMobile.includes(material)) {
            material.classList.remove("checked");
            selectedMaterialMobile = selectedMaterialMobile.filter(function (selectedMaterialMobile) {
                return selectedMaterialMobile !== material;
            });
        } else {
            material.classList.add("checked");
            selectedMaterialMobile.push(material);
        }

        if (selectedMaterialMobile.length > 0) {
            clearButtonFilterMaterialMobile.style.display = "block";
        } else {
            clearButtonFilterMaterialMobile.style.display = "none";
        }
    });
});

clearButtonFilterMaterialMobile.addEventListener("click", function () {
    selectedMaterialMobile.forEach(function (selectedMaterialMobile) {
        selectedMaterialMobile.classList.remove("checked");
    });
    clearButtonFilterMaterialMobile.style.display = "none";
    selectedMaterialMobile = [];
});




// Filter-Design-Desktop...
const selectBtnFilterProductDesign = document.querySelector(".select-btn-filter-design"),
    itemsButtonFilterProductDesign = document.querySelectorAll(".item__filter-design");
let isDesignLoading = false
const listItemsFilterDesign = document.querySelector('.list-items-filter-design');

selectBtnFilterProductDesign.addEventListener("click", async () => {
    selectBtnFilterProductDesign.classList.toggle("open");
    if (!isDesignLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllDesignsStyles}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const styleOfDesigns = data?.styleOfDesigns
            styleOfDesigns.forEach((styleOfDesign) => {
                const styleOfDesignName = styleOfDesign?.name;
                const html = `  
                <li class="item item__filter-design d-flex justify-content-between align-items-center">
                <span class="item-text">${styleOfDesignName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                listItemsFilterDesign.insertAdjacentHTML("afterbegin", html);
            })
            isDesignLoading = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsButtonFilterProductDesign.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});



let filterDesign = document.querySelectorAll(".list-items-filter-design .item__filter-design");
let clearButtonFilterDesign = document.getElementById("clearButtonFilterDesign");
let closeButtonFilterDesign = document.getElementById("closeButtonFilterDesign");
let selectedDesign = [];

filterDesign.forEach(function (design) {
    design.addEventListener("click", function () {
        if (selectedDesign.includes(design)) {
            design.classList.remove("checked");
            selectedDesign = selectedDesign.filter(function (selectedDesign) {
                return selectedDesign !== design;
            });
        } else {
            design.classList.add("checked");
            selectedDesign.push(design);
        }

        if (selectedDesign.length > 0) {
            clearButtonFilterDesign.style.display = "block";
        } else {
            clearButtonFilterDesign.style.display = "none";
        }
    });
});

clearButtonFilterDesign.addEventListener("click", function () {
    selectedDesign.forEach(function (selectedDesign) {
        selectedDesign.classList.remove("checked");
    });
    clearButtonFilterDesign.style.display = "none";
    selectedDesign = [];
});


// Filter-Design-Mobile...
let filterDesignMobile = document.querySelectorAll(".list-items-for-category .item_design_mobile");
let clearButtonFilterDesignMobile = document.getElementById("clearButtonFilterDesignMobile");
let closeButtonFilterDesignMobile = document.getElementById("closeButtonFilterDesignMobile");
let selectedDesignMobile = [];
let isDesignMobile = false;
let designMobile = document.querySelector('.design-mobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isDesignMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllDesignsStyles}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const styleOfDesigns = data?.styleOfDesigns
            styleOfDesigns.forEach((styleOfDesign) => {
                const styleOfDesignName = styleOfDesign?.name;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_design_mobile">
                <span class="item-subtext">${styleOfDesignName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                designMobile.insertAdjacentHTML("beforeend", html);
            })
            isDesignMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterDesignMobile.forEach(function (design) {
    design.addEventListener("click", function () {
        if (selectedDesignMobile.includes(design)) {
            design.classList.remove("checked");
            selectedDesignMobile = selectedDesignMobile.filter(function (selectedDesignMobile) {
                return selectedDesignMobile !== design;
            });
        } else {
            design.classList.add("checked");
            selectedDesignMobile.push(design);
        }

        if (selectedDesignMobile.length > 0) {
            clearButtonFilterDesignMobile.style.display = "block";
        } else {
            clearButtonFilterDesignMobile.style.display = "none";
        }
    });
});

clearButtonFilterDesignMobile.addEventListener("click", function () {
    selectedDesignMobile.forEach(function (selectedDesignMobile) {
        selectedDesignMobile.classList.remove("checked");
    });
    clearButtonFilterDesignMobile.style.display = "none";
    selectedDesignMobile = [];
});



// Filter-Country-Desktop...
const selectBtnFilterProductCountry = document.querySelector(".select-btn-filter-country"),
    itemsButtonFilterProductCountry = document.querySelectorAll(".item__filter-country");
const listItemsFilterCountry = document.querySelector('.list-items-filter-country')
let isCountryLoading = false;

selectBtnFilterProductCountry.addEventListener("click", async () => {
    selectBtnFilterProductCountry.classList.toggle("open");
    if (!isCountryLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllCountry}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const countries = data?.countries
            countries.forEach((country) => {
                const countryName = country?.name;
                const html = `  
                <li class="item item__filter-country d-flex justify-content-between align-items-center">
                <span class="item-text">${countryName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
            </li>
                `
                listItemsFilterCountry.insertAdjacentHTML("afterbegin", html);
            })
            isCountryLoading = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsButtonFilterProductCountry.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});



let filterCountry = document.querySelectorAll(".list-items-filter-country .item__filter-country");
let clearButtonFilterCountry = document.getElementById("clearButtonFilterCountry");
let closeButtonFilterCountry = document.getElementById("closeButtonFilterCountry");
let selectedCountry = [];

filterCountry.forEach(function (country) {
    country.addEventListener("click", function () {
        if (selectedCountry.includes(country)) {
            country.classList.remove("checked");
            selectedCountry = selectedCountry.filter(function (selectedCountry) {
                return selectedCountry !== country;
            });
        } else {
            country.classList.add("checked");
            selectedCountry.push(country);
        }

        if (selectedCountry.length > 0) {
            clearButtonFilterCountry.style.display = "block";
        } else {
            clearButtonFilterCountry.style.display = "none";
        }
    });
});

clearButtonFilterCountry.addEventListener("click", function () {
    selectedCountry.forEach(function (selectedCountry) {
        selectedCountry.classList.remove("checked");
    });
    clearButtonFilterCountry.style.display = "none";
    selectedCountry = [];
});




// Filter-Country-Mobile...
let filterCountryMobile = document.querySelectorAll(".list-items-for-category .item_country_mobile");
let clearButtonFilterCountryMobile = document.getElementById("clearButtonFilterCountryMobile");
let closeButtonFilterCountryMobile = document.getElementById("closeButtonFilterCountryMobile");
let selectedCountryMobile = [];
let isCountryMobile = false
let countryMobile = document.querySelector('.country-mobile')

document.addEventListener('DOMContentLoaded', async function () {
    if (!isCountryMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllCountry}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const countries = data?.countries
            countries.forEach((country) => {
                const countryName = country?.name;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_country_mobile">
                <span class="item-subtext">${countryName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                countryMobile.insertAdjacentHTML("beforeend", html);
            })
            isCountryMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterCountryMobile.forEach(function (country) {
    country.addEventListener("click", function () {
        if (selectedCountryMobile.includes(country)) {
            country.classList.remove("checked");
            selectedCountryMobile = selectedCountryMobile.filter(function (selectedCountryMobile) {
                return selectedCountryMobile !== country;
            });
        } else {
            country.classList.add("checked");
            selectedCountryMobile.push(country);
        }

        if (selectedCountryMobile.length > 0) {
            clearButtonFilterCountryMobile.style.display = "block";
        } else {
            clearButtonFilterCountryMobile.style.display = "none";
        }
    });
});

clearButtonFilterCountryMobile.addEventListener("click", function () {
    selectedCountryMobile.forEach(function (selectedCountryMobile) {
        selectedCountryMobile.classList.remove("checked");
    });
    clearButtonFilterCountryMobile.style.display = "none";
    selectedCountryMobile = [];
});




// Filter - List - Desktop...
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


// Filter - List - Mobile...
const selectBtnListMobile = document.querySelector(".select-btn-list-item-mobile"),
    itemsButtonListMobile = document.querySelectorAll(".item_button-list-mobile");

selectBtnListMobile.addEventListener("click", () => {
    selectBtnListMobile.classList.toggle("open");
});

itemsButtonListMobile.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});

// Filter - City - Desktop....
const selectBtnCity = document.querySelector(".select-btn-city"),
    itemsCity = document.querySelectorAll(".item_city");
const listItemsCityDesktop = document.querySelector('.list-items-city-desktop');
let isCityLoading = false;

selectBtnCity.addEventListener("click", async () => {
    selectBtnCity.classList.toggle("open");
    if (!isCityLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllCities}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const cities = data?.cities
            cities.forEach((city) => {
                const cityName = city?.name;
                const html = `  
                <li class="item item_city d-flex justify-content-between align-items-center">
                <span class="item-text">${cityName}</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li> 
                `
                listItemsCityDesktop.insertAdjacentHTML("afterbegin", html);
            })
            isCityLoading = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsCity.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


let filterCity = document.querySelectorAll(".list-items-city-desktop .item_city");
let clearButtonFilterCity = document.getElementById("clearButtonFilterCity");
let closeButtonFilterCity = document.getElementById("closeButtonFilterCity");
let selectedCity = [];

filterCity.forEach(function (city) {
    city.addEventListener("click", function () {
        if (selectedCity.includes(city)) {
            city.classList.remove("checked");
            selectedCity = selectedCity.filter(function (selectedCity) {
                return selectedCity !== city;
            });
        } else {
            city.classList.add("checked");
            selectedCity.push(city);
        }

        if (selectedCity.length > 0) {
            clearButtonFilterCity.style.display = "block";
        } else {
            clearButtonFilterCity.style.display = "none";
        }
    });
});

clearButtonFilterCity.addEventListener("click", function () {
    selectedCity.forEach(function (selectedCity) {
        selectedCity.classList.remove("checked");
    });
    clearButtonFilterCity.style.display = "none";
    selectedCity = [];
});


// Filter - City - Mobile....
let filterCityMobile = document.querySelectorAll(".list-items-for-category .item_city_mobile");
let clearButtonFilterCityMobile = document.getElementById("clearButtonFilterCityMobile");
let closeButtonFilterCityMobile = document.getElementById("closeButtonFilterCityMobile");
let selectedCityMobile = [];
let isCityMobile = false
let cityMobile = document.querySelector('.city-mobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isCityMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllCities}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const cities = data?.cities
            cities.forEach((city) => {
                const cityName = city?.name;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_city_mobile">
                <span class="item-subtext">${cityName}</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                cityMobile.insertAdjacentHTML("beforeend", html);
            })
            isCityMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});


filterCityMobile.forEach(function (city) {
    city.addEventListener("click", function () {
        if (selectedCityMobile.includes(city)) {
            city.classList.remove("checked");
            selectedCityMobile = selectedCityMobile.filter(function (selectedCityMobile) {
                return selectedCityMobile !== city;
            });
        } else {
            city.classList.add("checked");
            selectedCityMobile.push(city);
        }

        if (selectedCityMobile.length > 0) {
            clearButtonFilterCityMobile.style.display = "block";
        } else {
            clearButtonFilterCityMobile.style.display = "none";
        }
    });
});

clearButtonFilterCityMobile.addEventListener("click", function () {
    selectedCityMobile.forEach(function (selectedCityMobile) {
        selectedCityMobile.classList.remove("checked");
    });
    clearButtonFilterCityMobile.style.display = "none";
    selectedCityMobile = [];
});




// Filter - Price - Desktop...
const selectBtnPrice = document.querySelector(".select-btn-price"),
    itemsPrice = document.querySelectorAll(".item_price");
let listItemsPriceDesktop = document.querySelector('.list-items-price-desktop');
let isPriceItems = false;

selectBtnPrice.addEventListener("click", async () => {
    selectBtnPrice.classList.toggle("open");
    if (!isPriceItems) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllPrices}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const costs = data?.cost
            costs.forEach((cost) => {
                const costMin = cost?.minPrice;
                const costMax = cost?.maxPrice;
                const html = `  
                <li class="item item_price d-flex justify-content-between align-items-center">
                <span class="item-text">${costMin}-${costMax} Azn</span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                listItemsPriceDesktop.insertAdjacentHTML("afterbegin", html);
            })
            isPriceItems = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsPrice.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


let filterPrice = document.querySelectorAll(".list-items-price-desktop .item_price");
let clearButtonFilterPrice = document.getElementById("clearButtonFilterPrice");
let closeButtonFilterPrice = document.getElementById("closeButtonFilterPrice");
let selectedPrice = [];

filterPrice.forEach(function (price) {
    price.addEventListener("click", function () {
        if (selectedPrice.includes(price)) {
            price.classList.remove("checked");
            selectedPrice = selectedPrice.filter(function (selectedPrice) {
                return selectedPrice !== price;
            });
        } else {
            price.classList.add("checked");
            selectedPrice.push(price);
        }

        if (selectedPrice.length > 0) {
            clearButtonFilterPrice.style.display = "block";
        } else {
            clearButtonFilterPrice.style.display = "none";
        }
    });
});

clearButtonFilterPrice.addEventListener("click", function () {
    selectedPrice.forEach(function (selectedPrice) {
        selectedPrice.classList.remove("checked");
    });
    clearButtonFilterPrice.style.display = "none";
    selectedPrice = [];
});


// Filter - Price - Mobile...
let filterPriceMobile = document.querySelectorAll(".list-items-for-category .item_price_mobile");
let clearButtonFilterPriceMobile = document.getElementById("clearButtonFilterPriceMobile");
let closeButtonFilterPriceMobile = document.getElementById("closeButtonFilterPriceMobile");
let selectedPriceMobile = [];
let isPriceMobile = false;
let mobilePrice = document.querySelector(".mobile-price");

document.addEventListener('DOMContentLoaded', async function () {
    if (!isPriceMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllPrices}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const costs = data?.cost
            costs.forEach((cost) => {
                const costMin = cost?.minPrice;
                const costMax = cost?.maxPrice;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_price_mobile">
                <span class="item-subtext">${costMin}-${costMax} Azn</span>

                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                </li>
                `
                mobilePrice.insertAdjacentHTML("beforeend", html);
            })
            isPriceMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterPriceMobile.forEach(function (price) {
    price.addEventListener("click", function () {
        if (selectedPriceMobile.includes(price)) {
            price.classList.remove("checked");
            selectedPriceMobile = selectedPriceMobile.filter(function (selectedPriceMobile) {
                return selectedPriceMobile !== price;
            });
        } else {
            price.classList.add("checked");
            selectedPriceMobile.push(price);
        }

        if (selectedPriceMobile.length > 0) {
            clearButtonFilterPriceMobile.style.display = "block";
        } else {
            clearButtonFilterPriceMobile.style.display = "none";
        }
    });
});

clearButtonFilterPriceMobile.addEventListener("click", function () {
    selectedPriceMobile.forEach(function (selectedPriceMobile) {
        selectedPriceMobile.classList.remove("checked");
    });
    clearButtonFilterPriceMobile.style.display = "none";
    selectedPriceMobile = [];
});




// Filter - Colour - Desktop...
const selectBtnColour = document.querySelector(".select-btn-colour"),
    itemsColour = document.querySelectorAll(".item_colour");
const listItemsColourDesktop = document.querySelector('.list-items-colour-desktop')
let isColourLoading = false;

selectBtnColour.addEventListener("click", async () => {
    selectBtnColour.classList.toggle("open");
    if (!isColourLoading) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllColors}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            console.log(data);
            const colors = data?.colors
            colors.forEach((color) => {
                const colorName = color?.name;
                const colorCode = color?.code;
                const html = `  
                <li class="item item_colour d-flex justify-content-between align-items-center">
                <span class="item-text">${colorName}</span>
                <span style='background-color: ${colorCode};width: 10px; height: 10px;'></span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span> 
                </li>
                `
                listItemsColourDesktop.insertAdjacentHTML("afterbegin", html);
            })
            isColourLoading = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

itemsColour.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


let filterColour = document.querySelectorAll(".list-items-colour-desktop .item_colour");
let clearButtonFilterColour = document.getElementById("clearButtonFilterColour");
let closeButtonFilterColour = document.getElementById("closeButtonFilterColour");
let selectedColour = [];

filterColour.forEach(function (colour) {
    colour.addEventListener("click", function () {
        if (selectedColour.includes(colour)) {
            colour.classList.remove("checked");
            selectedColour = selectedColour.filter(function (selectedColour) {
                return selectedColour !== colour;
            });
        } else {
            colour.classList.add("checked");
            selectedColour.push(colour);
        }

        if (selectedColour.length > 0) {
            clearButtonFilterColour.style.display = "block";
        } else {
            clearButtonFilterColour.style.display = "none";
        }
    });
});

clearButtonFilterColour.addEventListener("click", function () {
    selectedColour.forEach(function (selectedColour) {
        selectedColour.classList.remove("checked");
    });
    clearButtonFilterColour.style.display = "none";
    selectedColour = [];
});


// Filter - Colour - Mobile...
let filterColourMobile = document.querySelectorAll(".list-items-for-category .item_colour_mobile");
let clearButtonFilterColourMobile = document.getElementById("clearButtonFilterColourMobile");
let closeButtonFilterColourMobile = document.getElementById("closeButtonFilterColourMobile");
let selectedColourMobile = [];
let isColourMobile = false;
let colourMobile = document.querySelector('.colour-mobile');

document.addEventListener('DOMContentLoaded', async function () {
    if (!isColourMobile) {
        try {
            const res = await fetch(
                `${baseUrl}/${getAllColors}`,
            );
            if (!res.ok)
                throw new Error("Something went wrong");

            const data = await res.json();
            const colors = data?.colors
            colors.forEach((color) => {
                const colorName = color?.name;
                const colorCode = color?.code;
                const html = `  
                <li class="item item__filter-product d-flex justify-content-between align-items-center item_colour_mobile">
                <span class="item-text">${colorName}</span>
                <span style='background-color: ${colorCode};width: 10px; height: 10px;'></span>
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span> 
            </li>
                `
                colourMobile.insertAdjacentHTML("beforeend", html);
            })
            isColourMobile = true;
        } catch (err) {
            console.log(err.message);
        }
    }
});

filterColourMobile.forEach(function (colour) {
    colour.addEventListener("click", function () {
        if (selectedColourMobile.includes(colour)) {
            colour.classList.remove("checked");
            selectedColourMobile = selectedColourMobile.filter(function (selectedColourMobile) {
                return selectedColourMobile !== colour;
            });
        } else {
            colour.classList.add("checked");
            selectedColourMobile.push(colour);
        }

        if (selectedColourMobile.length > 0) {
            clearButtonFilterColourMobile.style.display = "block";
        } else {
            clearButtonFilterColourMobile.style.display = "none";
        }
    });
});

clearButtonFilterColourMobile.addEventListener("click", function () {
    selectedColourMobile.forEach(function (selectedColourMobile) {
        selectedColourMobile.classList.remove("checked");
    });
    clearButtonFilterColourMobile.style.display = "none";
    selectedColourMobile = [];
});










// Filter Mobile...
const selectBtnFilterMobile = document.querySelector(".select-btn-filter-mobile");
const filterBtn = document.querySelector(".filter-right");
const closeBtn = document.querySelector(".filter-close-icon");
// itemsButtonFilterMobile = document.querySelectorAll(".list-items-mobile");

// filterBtn.addEventListener("click", () => {
//     selectBtnFilterMobile.classList.toggle("open");
// });

closeBtn.addEventListener("click", () => {
    selectBtnFilterMobile.classList.remove("open");
});

selectBtnFilterMobile.addEventListener("click", () => {
    selectBtnFilterMobile.classList.toggle("open");
});

// itemsButtonFilterMobile.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("checked");    
//     });
// });




const itemMobile = document.querySelectorAll('.list-items .item.item-mobile');
const toBack = document.querySelector('.toBack');

for (let i = 0; i < itemMobile.length; i++) {
    itemMobile[i].addEventListener('click', function () {
        toBack.classList.add('active')
        const categoryItems = this.querySelectorAll('.list-items-for-category');
        for (let j = 0; j < categoryItems.length; j++) {
            categoryItems[j].classList.add('active');
            toBack.addEventListener('click', function () {
                categoryItems[j].classList.remove('active');
                toBack.classList.remove('active')
            })
        }
    });
}

var swiper_end = new Swiper(".slide-content-end", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
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





const entrance_mobile_end = document.querySelector('#user__mobile_end');
const entrance_end = document.querySelector('#user-desktop__login_end');
const loginIcon_end = document.querySelector('#icon-desktop_end');
const token_end = localStorage.getItem('token');


if (token_end) {
    entrance_mobile_end.style.display = 'none';
    entrance_end.style.display = 'none';
    loginIcon_end.style.display = 'none';
}


let createAdvertBtn_end = document.getElementById('createAdvertBtn_end');
createAdvertBtn_end.addEventListener('click', function () {
    if (token_end) {
        window.location.href = 'announcement-furniture.html'
    } else {
        window.location.href = 'login.html'
    }
});


let mobileCreateAdvertBtn_end = document.getElementById('mobileCreateAdvertBtn_end');
mobileCreateAdvertBtn_end.addEventListener('click', function () {
    if (token_end) {
        window.location.href = 'announcement-furniture.html'
    } else {
        window.location.href = 'login.html'
    }
});


let createAdvertBtnFooter_end = document.getElementById('createAdvertBtnFooter_end');
createAdvertBtnFooter_end.addEventListener('click', function () {
    if (token_end) {
        window.location.href = 'announcement-furniture.html'
    } else {
        window.location.href = 'login.html'
    }
});



const userLocation_end = document.querySelector('#user_location_end');
const userMobileLocation_end = document.querySelector('#user_mobile_location_end');

userLocation_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});

userMobileLocation_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});



const notificationText_end = document.querySelector('#notification_text_end');
const notificationMobileIcon_end = document.querySelector('#user_mobile_notification_end');

notificationText_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});

notificationMobileIcon_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});


const selectedText_end = document.querySelector('#selected_text_end');
const selectedMobileIcon_end = document.querySelector('#user_mobile_selected_end');
selectedText_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});

selectedMobileIcon_end.addEventListener('click', function () {
    if (!token_end) {
        window.location.href = 'login.html'
    }
});



// Scroll Button...
const scrollButtonEnd = document.getElementById("scroll-button_end");
const buttonHeightEnd = scrollButtonEnd.offsetHeight;
const viewportHeightEnd = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const midViewportEnd = viewportHeightEnd / 2;
const midButtonEnd = buttonHeightEnd / 2;
const maxButtonYEnd = viewportHeightEnd - buttonHeightEnd;
const minButtonYEnd = midViewportEnd - midButtonEnd;
const maxScrollPositionEnd = document.documentElement.scrollHeight - viewportHeightEnd - 500;
let buttonYEnd = 0;

function updateButtonPositionEnd() {
    const currentScrollPositionEnd = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPositionEnd > lastScrollPositionEnd) {
        // scrolling down
        buttonYEnd = Math.min(maxButtonYEnd, buttonYEnd + (currentScrollPositionEnd - lastScrollPositionEnd));
        if (currentScrollPositionEnd < maxScrollPositionEnd) {
            scrollButtonEnd.style.transform = `translate(-50%, ${buttonYEnd}px)`;
        }
    } else {
        // scrolling up
        buttonYEnd = Math.max(0, buttonYEnd - (lastScrollPositionEnd - currentScrollPositionEnd));
        if (currentScrollPositionEnd < maxScrollPositionEnd) {
            scrollButtonEnd.style.transform = `translate(-50%, ${buttonYEnd}px)`;
        }
    }
    lastScrollPositionEnd = currentScrollPositionEnd;
}

let lastScrollPositionEnd = 0;
window.addEventListener("scroll", () => {
    updateButtonPositionEnd();
});

// GET ALL CATEGORIES
const apiUrl = 'http://mebra.az/api/Category/GetAllCategory';

// GET GUESTROOM CATEGORIES
let guestRoom = document.querySelector('#guest-room');
let guestRoomCategiroies = document.querySelector('#guest-room-categiroies');
let isGuestItems = false;

async function handleGuestRoomCategories() {
    try {
        if (!isGuestItems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const guestRoomHTML = `
            ${data?.categories[0].subCategories[0].name} <i class="fas fa-angle-down"></i>
            `
            guestRoom.insertAdjacentHTML("afterbegin", guestRoomHTML);
            const subCategoriesName = data?.categories[0].subCategories[0].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                guestRoomCategiroies.insertAdjacentHTML("afterbegin", html);
            })
            isGuestItems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleGuestRoomCategories();

// GET KITCHEN CATEGORIES
let kitchen = document.querySelector('#kitchen');
let kitchenCategories = document.querySelector('#kitchen-categories');
let isKitchenItems = false;

async function handleKitchenCategories() {
    try {
        if (!isKitchenItems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const kitchenHTML = `
            ${data?.categories[0].subCategories[1].name} <i class="fas fa-angle-down"></i>
            `
            kitchen.insertAdjacentHTML("afterbegin", kitchenHTML);
            const subCategoriesName = data?.categories[0].subCategories[1].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                kitchenCategories.insertAdjacentHTML("afterbegin", html);
            })
            isKitchenItems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleKitchenCategories();

// GET OFFICE CATEGORIES
let office = document.querySelector('#office');
let officeCategories = document.querySelector('#office-categories');
let isOfficeItems = false;

async function handleOfficeCategories() {
    try {
        if (!isOfficeItems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const officeHTML = `
            ${data?.categories[0].subCategories[2].name} <i class="fas fa-angle-down"></i>
            `
            office.insertAdjacentHTML("afterbegin", officeHTML);
            const subCategoriesName = data?.categories[0].subCategories[2].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                officeCategories.insertAdjacentHTML("afterbegin", html);
            })
            isOfficeItems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleOfficeCategories();

// GET BEDROOM CATEGORIES
let bedroom = document.querySelector('#bedroom');
let bedroomCategories = document.querySelector('#bedroom-categories');
let isBedroomItems = false;

async function handleBedroomCategories() {
    try {
        if (!isBedroomItems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const bedroomHTML = `
            ${data?.categories[0].subCategories[4].name} <i class="fas fa-angle-down"></i>
            `
            bedroom.insertAdjacentHTML("afterbegin", bedroomHTML);
            const subCategoriesName = data?.categories[0].subCategories[4].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                bedroomCategories.insertAdjacentHTML("afterbegin", html);
            })
            isBedroomItems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleBedroomCategories();

// GET BATHROOM CATEGORIES
let bathroom = document.querySelector('#bathroom');
let bathroomCategories = document.querySelector('#bathroom-categories');
let isBathroomİtems = false;

async function handleBathroomCategories() {
    try {
        if (!isBathroomİtems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const bathroomHTML = `
            ${data?.categories[0].subCategories[5].name} <i class="fas fa-angle-down"></i>
            `
            bathroom.insertAdjacentHTML("afterbegin", bathroomHTML);
            const subCategoriesName = data?.categories[0].subCategories[5].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                bathroomCategories.insertAdjacentHTML("afterbegin", html);
            })
            isBathroomİtems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleBathroomCategories();

// GET SHOWCASE & SHELF CATEGORIES
let showcaseShelf = document.querySelector('#showcase-shelf');
let showcaseShelfCategories = document.querySelector('#showcase-shelf-categories');
let isShowcaseShelf = false;

async function handleShowCaseShelfCategories() {
    try {
        if (!isShowcaseShelf) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const showcaseShelfHTML = `
            ${data?.categories[0].subCategories[3].name} <i class="fas fa-angle-down"></i>
            `
            showcaseShelf.insertAdjacentHTML("afterbegin", showcaseShelfHTML);
            const subCategoriesName = data?.categories[0].subCategories[3].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                showcaseShelfCategories.insertAdjacentHTML("afterbegin", html);
            })
            isShowcaseShelf = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleShowCaseShelfCategories();

// GET CLOSETS CATEGORIES
let closets = document.querySelector('#closets');
let closetsCategories = document.querySelector('#closets-categories');
let isCLosetsİtems = false;

async function handleClosetsCategories() {
    try {
        if (!isCLosetsİtems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const closetsHTML = `
            ${data?.categories[0].subCategories[9].name} <i class="fas fa-angle-down"></i>
            `
            closets.insertAdjacentHTML("afterbegin", closetsHTML);
            const subCategoriesName = data?.categories[0].subCategories[9].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                closetsCategories.insertAdjacentHTML("afterbegin", html);
            })
            isCLosetsİtems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleClosetsCategories();

// GET SOFA CATEGORIES
let sofa = document.querySelector('#sofa');
let sofaCategories = document.querySelector('#sofa-categories');
let isSofaItems = false;

async function handleSofaCategories() {
    try {
        if (!isSofaItems) {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const sofaHTML = `
            ${data?.categories[0].subCategories[10].name} <i class="fas fa-angle-down"></i>
            `
            sofa.insertAdjacentHTML("afterbegin", sofaHTML);
            const subCategoriesName = data?.categories[0].subCategories[10].subCategories;
            subCategoriesName.forEach(subCategory => {
                const html = `
            <li><a href="#">${subCategory?.name}</a></li>
             `;
                sofaCategories.insertAdjacentHTML("afterbegin", html);
            })
            isSofaItems = true;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

handleSofaCategories();

// GET ALL ADVERTS 
const allItemsEnd = document.querySelector('#allItems_end');
let adverts;

function displayAdverts() {
    allItemsEnd.innerHTML = ''; // Clear the existing content before displaying sorted adverts

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
                            <div class="slide-content-item__end">
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
        allItemsEnd.insertAdjacentHTML('afterbegin', html);
    });

    var swiper = new Swiper(".slide-content-item__end", {
        slidesPerView: 1,
        fade: "true",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-item",
            prevEl: ".swiper-button-prev-item",
        },
    });
}

// SORTING A-Z
let sortBtnAZ = document.querySelector('#sortBtnAZ');
sortBtnAZ.addEventListener('click', async () => {
    function compareCategoryNames(a, b) {
        const nameA = a.category.name.toLowerCase();
        const nameB = b.category.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    }
    adverts.sort(compareCategoryNames);
    displayAdverts();
    console.log(adverts)
})

// SORTING Z-A
let sortBtnZA = document.querySelector('#sortBtnZA');
sortBtnZA.addEventListener('click', async () => {
    function compareCategoryNamesDesc(a, b) {
        const nameA = a.category.name.toLowerCase();
        const nameB = b.category.name.toLowerCase();

        if (nameA < nameB) {
            return 1;
        } else if (nameA > nameB) {
            return -1;
        } else {
            return 0;
        }
    }
    adverts.sort(compareCategoryNamesDesc);
    displayAdverts();
    console.log(adverts);
});

// From cheap to expensive
let cheapToExpensive = document.querySelector('#cheapToExpensive');
cheapToExpensive.addEventListener('click', async () => {
    function priceCheapToExpensive(a, b) {
        const nameA = a.price;
        const nameB = b.price;

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    }
    adverts.sort(priceCheapToExpensive);
    displayAdverts();
    console.log(adverts);
});

// From expensive to cheap
let expensiveToCheap = document.querySelector('#expensiveToCheap');
expensiveToCheap.addEventListener('click', async () => {
    function priceExpensiveToCheap(a, b) {
        const nameA = a.price;
        const nameB = b.price;

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    }
    adverts.sort(priceExpensiveToCheap);
    displayAdverts();
    console.log(adverts);
});



// Display all adverts when the page is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(`${baseUrl}/${getAllAdverts}`);
        const data = await response.json();
        adverts = data?.adverts;
        displayAdverts();
    } catch (error) {
        console.log(error);
    }
});