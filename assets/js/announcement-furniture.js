const baseUrl = 'http://mebra.az/'
const getAllCategory = 'api/Category/GetAllCategory'
const getAllCities = 'api/Search/GetAllCities'
const getAllColors = 'api/Search/GetAllColors'
const getAllMaterials = 'api/Search/GetAllMaterials'
const getConditionFurniture = 'api/Search/ConditionOfFurniture'
const getAllDesignsStyles = 'api/Search/GetAllDesignStyles'
const createAddress = 'api/Address/Create'
const createFurnitureAdvert = 'api/Adverts/CreateFurnitureAdvert'
const getCategoryFeature = 'api/Category/GetCategoryFeature'

// Address
const filterCloseLocation = document.querySelector('#filter-close-location')
let addressName = document.querySelector("#getAddress");
let addressIdLocal = localStorage.getItem('localAddress');

function setAddressFromLocalStorage() {
    addressName.value = localStorage.getItem('address');
    filterCloseLocation.style.display = addressName.value.length !== 0 ? 'block' : 'none';
}

filterCloseLocation.addEventListener('click', function () {
    console.log('click address');
    addressName.value = '';
    filterCloseLocation.style.display = 'none';
});

setAddressFromLocalStorage();


// Services...
const selectBtnServices = document.querySelector(".select-btn-services");
const servicesList = document.getElementById("services-list");
const mainServicesList = document.getElementById("main-services-list");
const itemFurniture = document.getElementById("announcement_item__furniture");
const itemCLick = document.querySelector('.item-click');
const backLink = document.getElementById("announcement-services__item__furniture-back");
const secondServicesList = document.getElementById("second-services-list");
const announcementLoungeItem = document.querySelector("#announcement-furniture__LoungeItem");
const announcementServicesSubItemFurnitureBack = document.getElementById("announcement-services__subitem__furniture-back");
const announcementItemFurniture = document.querySelector(".announcement-services__item__furniture");
const announcementİtemFurnitureMasterService = document.querySelector('#announcement_item__furniture_master-service');
const designerService = document.querySelector("#designer-service");
const announcementFurnitureLoungeItem = document.querySelector("#announcement-furniture__LoungeItem");
const announcementFurnitureKitchenItem = document.querySelector('#announcement-furniture__kitchen__item')
const announcementFurnitureWorkItem = document.querySelector('#announcement-furniture__work__item')
const announcementFurnitureVitrinItem = document.querySelector('#announcement-furniture__vitrin__item');
const announcementFurnitureOtherItem = document.querySelector('#announcement-furniture__other__item');
const announcementFurnitureBedroomItem = document.querySelector("#announcement-furniture__bedroom__item");
const announcementFurnitureBathroomItem = document.querySelector('#announcement-furniture__bathroom__item');
const announcementFurnitureCurtainsİtem = document.querySelector("#announcement-furniture__curtains__item");
const announcementFurnitureMattressesİtem = document.querySelector("#announcement-furniture__mattresses__item");
const containerSubDoubleCategories = document.querySelector(".subDoubleCategories");
const arrowFurniture = document.querySelector('#arrowFurniture')
containerSubDoubleCategories.innerHTML = '';
let typeSection = document.querySelector(".typeSection");
typeSection.style.display = 'none';
let categoryId = '';
let categoryName = ''

const categoryAllItems = document.querySelector('#categoryAllItems');

document.addEventListener('DOMContentLoaded', function () {

    fetch(`${baseUrl}/${getAllCategory}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const categories = data?.categories;
            itemFurniture.innerHTML = `${categories[0]?.name}`
            categoryName = `${categories[0]?.name}`
            if (categoryName?.length !== 0) {
                categoryAllItems.innerHTML = categoryName;
            }
            else {
                return null;
            }

            announcementİtemFurnitureMasterService.innerHTML = `${categories[1]?.name}`
            designerService.innerHTML = `${categories[2]?.name}`
        })
        .catch(function (error) {
            console.log(error);
        });

    fetch(`${baseUrl}/${getAllCategory}`)
        .then(response => response.json())
        .then(data => {
            const subCategories = data.categories.flatMap(category => category.subCategories);
            announcementFurnitureLoungeItem.innerHTML = `${subCategories[0]?.name}`
            announcementFurnitureLoungeItem.addEventListener('click', function () {
                const id = subCategories[0]?.id;
                categoryName = subCategories[0]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
            })
            announcementFurnitureKitchenItem.innerHTML = `${subCategories[1]?.name}`
            announcementFurnitureKitchenItem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[1]?.id;
                categoryName = subCategories[1]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureWorkItem.innerHTML = `${subCategories[2]?.name}`
            announcementFurnitureWorkItem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[2]?.id;
                categoryName = subCategories[2]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureVitrinItem.innerHTML = `${subCategories[3]?.name}`
            announcementFurnitureVitrinItem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[3]?.id;
                categoryName = subCategories[3]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureOtherItem.innerHTML = `${subCategories[8]?.name}`
            announcementFurnitureOtherItem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[8]?.id;
                categoryName = subCategories[8]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureBedroomItem.innerHTML = `${subCategories[4]?.name}`
            announcementFurnitureBedroomItem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[4]?.id;
                categoryName = subCategories[4]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                    const typeSection = document.querySelector(".typeSection");

                    if (categoryId === '1ab68d77-24fb-4995-8322-11124df2a03f') {
                        console.log('categoryId')
                        typeSection.style.display = 'block';
                    } else {
                        typeSection.style.display = 'none';
                        console.log('categoryId')
                    }
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureBathroomItem.innerHTML = `${subCategories[5]?.name}`
            announcementFurnitureBathroomItem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[5]?.id;
                categoryName = subCategories[5]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureCurtainsİtem.innerHTML = `${subCategories[6]?.name}`
            announcementFurnitureCurtainsİtem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[6]?.id;
                categoryName = subCategories[6]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
            announcementFurnitureMattressesİtem.innerHTML = `${subCategories[7]?.name}`
            announcementFurnitureMattressesİtem.addEventListener('click', function () {
                categoryId = '';
                const id = subCategories[7]?.id;
                categoryName = subCategories[7]?.name
                categoryId = id
                console.log(categoryId, categoryName);
                if (categoryName?.length !== 0) {
                    categoryAllItems.innerHTML = categoryName;
                }
                else {
                    return null;
                }
                arrowFurniture.style.transform = "";
                arrowFurniture.style.webkitTransform = "";
                arrowFurniture.style.mozTransform = "";
                arrowFurniture.style.msTransform = "";
                arrowFurniture.style.oTransform = "";
                servicesList.style.display = "none";
                mainServicesList.style.display = "none";
                secondServicesList.style.display = "none";
            })
        })

    fetch(`${baseUrl}/${getAllCategory}`)
        .then(response => response.json())
        .then(data => {
            const subCategories = data.categories[0].subCategories[0].subCategories
            subCategories.forEach(subCategory => {
                const subCategoryName = subCategory.name;
                categoryName = subCategory.name;
                const id = subCategory.id;
                const html = `<li class='sub' id="${id}">${subCategoryName}</li>`
                containerSubDoubleCategories.insertAdjacentHTML('beforeend', html)
            });

            const categoryMainElements = document.querySelectorAll('.sub');
            categoryMainElements.forEach(categoryMain => {
                categoryMain.addEventListener('click', () => {
                    const id = categoryMain.getAttribute('id');
                    categoryId = id
                    categoryName = categoryMain.innerHTML

                    if (categoryName?.length !== 0) {
                        categoryAllItems.innerHTML = categoryName;
                    }
                    else {
                        return null;
                    }
                    servicesList.style.display = "none";
                    mainServicesList.style.display = "none";
                    secondServicesList.style.display = "none";
                    arrowFurniture.style.transform = "";
                    arrowFurniture.style.webkitTransform = "";
                    arrowFurniture.style.mozTransform = "";
                    arrowFurniture.style.msTransform = "";
                    arrowFurniture.style.oTransform = "";
                    console.log(id, categoryName);
                    
                    console.log(typeSection)

                    if (id === '1ab68d77-24fb-4995-8322-11124df2a03f') {
                        console.log('yesss')
                        typeSection.style.display = 'block';
                    } else {
                        typeSection.style.display = 'none';
                        console.log('categoryId')
                    }
                });
            });
        })

});



selectBtnServices.addEventListener("click", () => {
    selectBtnServices.classList.toggle("open");
    if (selectBtnServices.classList.contains("open")) {
        servicesList.style.display = "block";
        mainServicesList.style.display = "none";
        secondServicesList.style.display = "none";
        arrowFurniture.style.transform = "rotate(-180deg)";
        arrowFurniture.style.webkitTransform = "rotate(-180deg)";
        arrowFurniture.style.mozTransform = "rotate(-180deg)";
        arrowFurniture.style.msTransform = "rotate(-180deg)";
        arrowFurniture.style.oTransform = "rotate(-180deg)";
    } else {
        servicesList.style.display = "none";
        mainServicesList.style.display = "none";
        secondServicesList.style.display = "none";
        arrowFurniture.style.transform = "";
        arrowFurniture.style.webkitTransform = "";
        arrowFurniture.style.mozTransform = "";
        arrowFurniture.style.msTransform = "";
        arrowFurniture.style.oTransform = "";
    }
});

itemCLick.addEventListener("click", () => {
    servicesList.style.display = "none";
    mainServicesList.style.display = "block";
});

backLink.addEventListener("click", () => {
    servicesList.style.display = "block";
    mainServicesList.style.display = "none";
});

announcementLoungeItem.addEventListener("click", () => {
    mainServicesList.style.display = "none";
    secondServicesList.style.display = "block";
});

announcementServicesSubItemFurnitureBack.addEventListener("click", () => {
    mainServicesList.style.display = "block";
    secondServicesList.style.display = "none";
});


// Material...
const selectBtnMaterial = document.querySelector(".select-btn-material");
const containerMaterials = document.querySelector(".material");
const materialModal = document.querySelector(".material-modal");
const materialAllİtems = document.querySelector("#materialAllİtems");
const arrowIcon = document.getElementById("arrowIcon");
const searchMaterials = document.querySelectorAll('search-material')
containerMaterials.innerHTML = "";
let checkedMaterialId;
let materialIds = [];
let checkedMaterialNames = [];
let isDataFetched = false;
let materilId;
let selectedMaterial = null;
let latestMaterialId;

const openMaterialModal = () => {
    materialModal.classList.remove("hidden");

    arrowIcon.style.transform = "rotate(-180deg)";
    arrowIcon.style.webkitTransform = "rotate(-180deg)";
    arrowIcon.style.mozTransform = "rotate(-180deg)";
    arrowIcon.style.msTransform = "rotate(-180deg)";
    arrowIcon.style.oTransform = "rotate(-180deg)";


    if (!isDataFetched) {
        fetch(`${baseUrl}/${getAllMaterials}`)
            .then((response) => response.json())
            .then((data) => {
                const materials = data.materils.reverse();
                console.log(materials);

                materials.forEach((material) => {
                    const materialName = material.name;
                    const materialId = material.id;
                    const html = `
              <li class="item item__services-material d-flex justify-content-between align-items-center mt-3" data-id="${materialId}">
                <span class="item-subtext">${materialName}</span>
              </li>
            `;
                    containerMaterials.insertAdjacentHTML("afterbegin", html);
                });

                isDataFetched = true;
            });
    }
};

containerMaterials.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServicesMaterial = clickedElement.closest(".item__services-material");

    if (itemServicesMaterial) {
        const materialName = itemServicesMaterial.querySelector(".item-subtext").textContent;
        const materialId = itemServicesMaterial.getAttribute("data-id");
        const checkedItem = containerMaterials.querySelector(".item__services-material.checked");

        itemServicesMaterial.classList.toggle("checked");

        if (itemServicesMaterial.classList.contains("checked")) {
            materialAllİtems.textContent = materialName;
            console.log(materialName);
            materialIds.push(materialId);

            if (checkedItem && checkedItem !== itemServicesMaterial) {
                const previousMaterialId = checkedItem.getAttribute("data-id");
                const previousMaterialIndex = materialIds.indexOf(previousMaterialId);

                if (previousMaterialIndex !== -1) {
                    materialIds.splice(previousMaterialIndex, 1);
                }

                checkedItem.classList.remove("checked");
            }

            closeMaterialModal();
        } else {
            materialAllİtems.textContent = 'Seçin';
            const materialIndex = materialIds.indexOf(materialId);

            if (materialIndex !== -1) {
                materialIds.splice(materialIndex, 1);
            }
        }
    }
});

const closeMaterialModal = () => {
    materialModal.classList.add("hidden");
    arrowIcon.style.transform = "";
    arrowIcon.style.webkitTransform = "";
    arrowIcon.style.mozTransform = "";
    arrowIcon.style.msTransform = "";
    arrowIcon.style.oTransform = "";
    console.log("clicked material");
};

const selectMaterialServices = document.querySelector(".select-btn-material");
selectMaterialServices.onclick = () => {
    if (materialModal.classList.contains("hidden")) {
        openMaterialModal();
    } else {
        closeMaterialModal();
    }
};

const searchInput = document.querySelector('#search-material');
searchInput.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const materialItems = document.querySelectorAll('.item__services-material');

    materialItems.forEach((item) => {
        const materialName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (materialName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});


// Person
const selectBtnTyped = document.querySelector(".select-btn-typed");
const containerPersons = document.querySelector(".types");
const typedModal = document.querySelector('.typed-modal');
const arrowIconType = document.querySelector('#arrowIconType');
const typeAllModals = document.querySelector("#typeAllİtems");
let isDataFetchedPersons = false;
let typeIds = [];
let typeId;


const openPersonModal = () => {
    typedModal.classList.remove('hidden')

    // Rotate the arrow icon
    arrowIconType.style.transform = "rotate(-180deg)";
    arrowIconType.style.webkitTransform = "rotate(-180deg)";
    arrowIconType.style.mozTransform = "rotate(-180deg)";
    arrowIconType.style.msTransform = "rotate(-180deg)";
    arrowIconType.style.oTransform = "rotate(-180deg)";

    if (!isDataFetchedPersons) {
        fetch(`${baseUrl}/${getCategoryFeature}`)
            .then((response) => response.json())
            .then((data) => {
                const getFeaturesResponse = data.getFeaturesResponse[13].featureResponseDtos[0].keywords
                console.log(getFeaturesResponse);

                getFeaturesResponse.forEach((type) => {
                    const typeName = type.key;
                    const typeId = type.id;
                    const html = `
                    <li class="item item__services-type d-flex justify-content-between align-items-center mt-3" data-id="${typeId}">
                      <span class="item-subtext">${typeName}</span>
                    </li>
                  `;
                    containerPersons.insertAdjacentHTML("afterbegin", html);
                });

                isDataFetchedPersons = true;
            });
    }
}

const closePersonModal = () => {
    typedModal.classList.add('hidden');

    arrowIconType.style.transform = "";
    arrowIconType.style.webkitTransform = "";
    arrowIconType.style.mozTransform = "";
    arrowIconType.style.msTransform = "";
    arrowIconType.style.oTransform = "";
};

containerPersons.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServicesTyped = clickedElement.closest(".item__services-type");

    if (itemServicesTyped) {
        const typeName = itemServicesTyped.querySelector(".item-subtext").textContent;
        typeId = itemServicesTyped.getAttribute("data-id");
        const checkedItem = containerPersons.querySelector(".item__services-type.checked");

        itemServicesTyped.classList.toggle("checked");

        if (itemServicesTyped.classList.contains("checked")) {
            typeAllModals.textContent = typeName;
            console.log(typeId);
            typeIds.push(typeId);

            if (checkedItem && checkedItem !== itemServicesTyped) {
                const previoustypeId = checkedItem.getAttribute("data-id");
                const previousTypeIndex = typeIds.indexOf(previoustypeId);

                if (previousTypeIndex !== -1) {
                    typeIds.splice(previousTypeIndex, 1);
                }

                checkedItem.classList.remove("checked");
            }

            closePersonModal();
        } else {
            typeAllModals.textContent = 'Seçin';
            const typeIndex = typeIds.indexOf(typeId);

            if (typeIndex !== -1) {
                typeIds.splice(typeIndex, 1);
            }
        }
    }
});

selectBtnTyped.onclick = () => {
    if (typedModal.classList.contains('hidden')) {
        openPersonModal();
    } else {
        closePersonModal();
    }
};

const searchTyped = document.querySelector('#search-types')
searchTyped.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const typedItems = document.querySelectorAll('.item__services-type');

    typedItems.forEach((item) => {
        const typeName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (typeName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});


// Product...
const selectBtnProduct = document.querySelector(".select-btn-product")
const containerProducts = document.querySelector('.products');
const productModal = document.querySelector('.product-modal');
const productAllİtems = document.querySelector("#productAllİtems");
const arrowIconProduct = document.querySelector('#arrowIconProduct')
let checkedProductId;
let productIds = [];
let isDataFetchedProducts = false;
let checkedProductNames = [];
let productId;
let selectedProducts = null;
let latestProductId;


const openProductModal = () => {
    productModal.classList.remove("hidden");

    // Rotate the arrow icon
    arrowIconProduct.style.transform = "rotate(-180deg)";
    arrowIconProduct.style.webkitTransform = "rotate(-180deg)";
    arrowIconProduct.style.mozTransform = "rotate(-180deg)";
    arrowIconProduct.style.msTransform = "rotate(-180deg)";
    arrowIconProduct.style.oTransform = "rotate(-180deg)";

    if (!isDataFetchedProducts) {
        fetch(`${baseUrl}/${getConditionFurniture}`)
            .then((response) => response.json())
            .then((data) => {
                const products = data.furnitureStatuses
                console.log(products);

                products.forEach((product) => {
                    const productName = product.name;
                    const productId = product.id;
                    const html = `
              <li class="item item__services-products d-flex justify-content-between align-items-center mt-3" data-id="${productId}">
                <span class="item-subtext">${productName}</span>
              </li>
            `;
                    containerProducts.insertAdjacentHTML("afterbegin", html);
                });

                isDataFetchedProducts = true;
            });
    }
};

containerProducts.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServiceProducts = clickedElement.closest(".item__services-products");

    if (itemServiceProducts) {
        const productName = itemServiceProducts.querySelector(".item-subtext").textContent;
        const productId = itemServiceProducts.getAttribute("data-id");
        const checkedItem = containerProducts.querySelector(".item__services-products.checked");

        itemServiceProducts.classList.toggle("checked");

        if (itemServiceProducts.classList.contains("checked")) {
            productAllİtems.textContent = productName;
            console.log(productName);
            productIds.push(productId);

            if (checkedItem && checkedItem !== itemServiceProducts) {
                const previousproductId = checkedItem.getAttribute("data-id");
                const previosProductIndex = productIds.indexOf(previousproductId);

                if (previosProductIndex !== -1) {
                    productIds.splice(previosProductIndex, 1);
                }

                checkedItem.classList.remove("checked");
            }

            closeProductModal();
        } else {
            productAllİtems.textContent = 'Seçin';
            const productIndex = productIds.indexOf(productId);

            if (productIndex !== -1) {
                productIds.splice(productIndex, 1);
            }
        }
    }
});

const closeProductModal = () => {
    productModal.classList.add('hidden');

    arrowIconProduct.style.transform = "";
    arrowIconProduct.style.webkitTransform = "";
    arrowIconProduct.style.mozTransform = "";
    arrowIconProduct.style.msTransform = "";
    arrowIconProduct.style.oTransform = "";
};

selectBtnProduct.onclick = () => {
    if (productModal.classList.contains('hidden')) {
        openProductModal();
    } else {
        closeProductModal();
    }
};

const searchProducts = document.querySelector('#search-products')
searchProducts.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const productItems = document.querySelectorAll('.item__services-products');

    productItems.forEach((item) => {
        const productName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});



// Size...
const sizes = [];
const selectBtnSize = document.querySelector(".select-btn-size"),
    announcement_item_size = document.querySelectorAll(".item__services-size");
const sizeModal = document.querySelector('.size-modal');
const widthInput = document.getElementById('width');
const lengthInput = document.getElementById('length');
const heightInput = document.getElementById('input_height');
const depthInput = document.getElementById('input_depth');
const chooseSizeElement = document.getElementById('choose-size');
const filteCloseSizes = document.querySelector('#filter-close-sizes');
const arrowIconSize = document.querySelector('#arrowIconSize');
let addNewSize = document.querySelector('.add-new-size');

widthInput.addEventListener('input', updateChooseSize);
lengthInput.addEventListener('input', updateChooseSize);
heightInput.addEventListener('input', updateChooseSize);
depthInput.addEventListener('input', updateChooseSize);

document.addEventListener('DOMContentLoaded', function () {
    addNewSize.addEventListener('click', function () {
        const widthValue = widthInput.value.trim();
        const lengthValue = lengthInput.value.trim();
        const heightValue = heightInput.value.trim();
        const depthValue = depthInput.value.trim();

        if (widthValue !== '' || lengthValue !== '' || heightValue !== '' || depthValue !== '') {
            const allSizes = { width: widthValue, length: lengthValue, height: heightValue, depth: depthValue };
            sizes.push(allSizes);
            widthInput.value = '';
            lengthInput.value = '';
            heightInput.value = '';
            depthInput.value = '';
            console.log('hey');
        }
    });
});

function updateChooseSize() {
    const widthValue = widthInput.value.trim();
    const lengthValue = lengthInput.value.trim();
    const heightValue = heightInput.value.trim();
    const depthValue = depthInput.value.trim();

    let displayValue = '';

    if (widthValue !== '') {
        displayValue += '[ ' + widthValue + ' sm en';
    }

    if (lengthValue !== '') {
        if (displayValue !== '') {
            displayValue += ', ';
        } else {
            displayValue += '[ ';
        }
        displayValue += lengthValue + ' sm uzlq';
    }

    if (heightValue !== '' && heightValue !== '0') {
        if (displayValue !== '') {
            displayValue += ', ';
        } else {
            displayValue += '[ ';
        }
        displayValue += heightValue + ' sm hndr';
    }

    if (depthValue !== '' && depthValue !== '0') {
        if (displayValue !== '') {
            displayValue += ', ';
        } else {
            displayValue += '[ ';
        }
        displayValue += depthValue + ' sm drnlk';
    }

    if (displayValue !== '') {
        displayValue += ' ]';
    }

    for (const size of sizes) {
        if (displayValue !== '') {
            displayValue += ', ';
        } else {
            displayValue += '[ ';
        }
        displayValue += '[' + size.width + ' sm en';
        displayValue += ', ' + size.length + ' sm uzlq';
        if (size.height !== 0) {
            displayValue += ', ' + size.height + ' sm hndr';
        }
        if (size.depth !== 0) {
            displayValue += ', ' + size.depth + ' sm drnlk';
        }
        displayValue += ' ]';
    }

    chooseSizeElement.textContent = displayValue;
}



const openSizeModal = () => {
    sizeModal.classList.remove("hidden");

    // Rotate the arrow icon
    arrowIconSize.style.transform = "rotate(-180deg)";
    arrowIconSize.style.webkitTransform = "rotate(-180deg)";
    arrowIconSize.style.mozTransform = "rotate(-180deg)";
    arrowIconSize.style.msTransform = "rotate(-180deg)";
    arrowIconSize.style.oTransform = "rotate(-180deg)";
}

const closeSizeModal = () => {
    sizeModal.classList.add("hidden");

    arrowIconSize.style.transform = "";
    arrowIconSize.style.webkitTransform = "";
    arrowIconSize.style.mozTransform = "";
    arrowIconSize.style.msTransform = "";
    arrowIconSize.style.oTransform = "";
    console.log('clicked Size');
};

filteCloseSizes.addEventListener('click', () => {
    sizeModal.classList.add("hidden");

    arrowIconSize.style.transform = "";
    arrowIconSize.style.webkitTransform = "";
    arrowIconSize.style.mozTransform = "";
    arrowIconSize.style.msTransform = "";
    arrowIconSize.style.oTransform = "";
})

selectBtnSize.onclick = () => {
    if (sizeModal.classList.contains('hidden')) {
        openSizeModal();
    } else {
        closeSizeModal();
    }
};


announcement_item_size.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


// Cities...
const containerCities = document.querySelector('.cities');
const selectBtnCities = document.querySelector(".select-btn-cities");
const citiesAllİtems = document.querySelector('#citiesAllİtems');
const filterCloseColor = document.querySelector('#filter-close-colour')
const arrowIconCity = document.querySelector('#arrowIconCity');
const modal = document.querySelector(".modal");
containerCities.innerHTML = '';
let checkedCityId;
let cityIds = [];
let isCitiesFetched = false;
let checkedCitiesNames = [];
let cityId;
const search = document.querySelector('#search-cities');
let selectedCities = null;
let latestcityId;

const openModal = () => {
    modal.classList.remove("hidden");
    arrowIconCity.style.transform = "rotate(-180deg)";
    arrowIconCity.style.webkitTransform = "rotate(-180deg)";
    arrowIconCity.style.mozTransform = "rotate(-180deg)";
    arrowIconCity.style.msTransform = "rotate(-180deg)";
    arrowIconCity.style.oTransform = "rotate(-180deg)";

    if (!isCitiesFetched) {
        fetch(`${baseUrl}/${getAllCities}`)
            .then((response) => response.json())
            .then((data) => {
                const cities = data.cities.reverse();
                console.log(cities);

                cities.forEach((city) => {
                    const cityName = city.name;
                    const cityId = city.id;
                    const html = `
              <li class="item item_filter_cities d-flex justify-content-between align-items-center mt-3" data-id="${cityId}">
                <span class="item-subtext">${cityName}</span>
              </li>
            `;
                    containerCities.insertAdjacentHTML("afterbegin", html);
                });

                isCitiesFetched = true;
            });
    }
};

containerCities.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServicesCities = clickedElement.closest(".item_filter_cities");

    if (itemServicesCities) {
        const cityName = itemServicesCities.querySelector(".item-subtext").textContent;
        const cityId = itemServicesCities.getAttribute("data-id");
        const checkedItem = containerCities.querySelector(".item_filter_cities.checked");

        itemServicesCities.classList.toggle("checked");

        if (itemServicesCities.classList.contains("checked")) {
            citiesAllİtems.textContent = cityName;
            console.log(cityName);
            cityIds.push(cityId);

            if (checkedItem && checkedItem !== itemServicesCities) {
                const previouscityId = checkedItem.getAttribute("data-id");
                const previosCityIndex = cityIds.indexOf(previouscityId);

                if (previosCityIndex !== -1) {
                    cityIds.splice(previosCityIndex, 1);
                }

                checkedItem.classList.remove("checked");
            }

            closeModal();
        } else {
            citiesAllİtems.textContent = 'Seçin';
            const cityIndex = cityIds.indexOf(cityId);

            if (cityIndex !== -1) {
                cityIds.splice(cityIndex, 1);
            }
        }
    }
});

const closeModal = () => {
    modal.classList.add("hidden");
    arrowIconCity.style.transform = "";
    arrowIconCity.style.webkitTransform = "";
    arrowIconCity.style.mozTransform = "";
    arrowIconCity.style.msTransform = "";
    arrowIconCity.style.oTransform = "";
};

const selectServices = document.querySelector('.select-btn-cities');
selectServices.onclick = () => {
    if (modal.classList.contains('hidden')) {
        openModal();
    } else {
        closeModal();
    }
};

search.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const citiesItems = document.querySelectorAll('.item_filter_cities');

    citiesItems.forEach((item) => {
        const cityName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (cityName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

// Countries
const containerCountries = document.querySelector('.countries');
const selectBtnCountries = document.querySelector(".select-btn-countries");
const countriesAllİtems = document.querySelector('#countriesAllİtems');
const arrowIconCountry = document.querySelector('#arrowIconCountry');
const countryModal = document.querySelector(".countryModal");
const selectCountries = document.querySelector('.select-btn-countries');
containerCountries.innerHTML = '';
let checkedCountryId;
let isCountryFetched = false;
let checkedCountryNames = [];
let countryId;
let countryIds = []
const searchCountry = document.querySelector('#search-countries');
let selectedCountries = null;
let latestcountryId;

const openCountryModal = () => {
    countryModal.classList.remove("hidden");
    arrowIconCountry.style.transform = "rotate(-180deg)";
    arrowIconCountry.style.webkitTransform = "rotate(-180deg)";
    arrowIconCountry.style.mozTransform = "rotate(-180deg)";
    arrowIconCountry.style.msTransform = "rotate(-180deg)";
    arrowIconCountry.style.oTransform = "rotate(-180deg)";

    if (!isCountryFetched) {
        fetch(`http://mebra.az/api/Search/GetAllCountries`)
            .then((response) => response.json())
            .then((data) => {
                const countries = data.countries.reverse();
                console.log(countries);

                countries.forEach((country) => {
                    const countryName = country.name;
                    const countryId = country.id;
                    const html = `
              <li class="item item_filter_countries d-flex justify-content-between align-items-center mt-3" data-id="${countryId}">
                <span class="item-subtext">${countryName}</span>
              </li>
            `;
                    containerCountries.insertAdjacentHTML("afterbegin", html);
                });

                isCountryFetched = true;
            });
    }
};

containerCountries.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServicesCountries = clickedElement.closest(".item_filter_countries");

    if (itemServicesCountries) {
        const countryName = itemServicesCountries.querySelector(".item-subtext").textContent;
        latestcountryId = itemServicesCountries.getAttribute("data-id");
        const checkedItem = containerCountries.querySelector(".item_filter_countries.checked");

        itemServicesCountries.classList.toggle("checked");

        if (itemServicesCountries.classList.contains("checked")) {
            countriesAllİtems.textContent = countryName;
            console.log(countryName);
            console.log(latestcountryId);
            countryIds.push(latestcountryId);

            if (checkedItem && checkedItem !== itemServicesCountries) {
                checkedItem.classList.remove("checked");
            }

            closeCountryModal();
        } else {
            countriesAllİtems.textContent = 'Seçin';
            const countryIndex = countryIds.indexOf(countryId);
            latestcountryId = ''

            if (countryIndex !== -1) {
                countryIds.splice(countryIndex, 1);
            }
        }
    }
});

const closeCountryModal = () => {
    countryModal.classList.add("hidden");
    arrowIconCountry.style.transform = "";
    arrowIconCountry.style.webkitTransform = "";
    arrowIconCountry.style.mozTransform = "";
    arrowIconCountry.style.msTransform = "";
    arrowIconCountry.style.oTransform = "";
};


selectCountries.onclick = () => {
    if (countryModal.classList.contains('hidden')) {
        openCountryModal();
    } else {
        closeCountryModal();
    }
}

searchCountry.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const countriesItems = document.querySelectorAll('.item_filter_countries');

    countriesItems.forEach((item) => {
        const countryName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (countryName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});


// Design...
const selectBtnDesign = document.querySelector(".select-btn-design")
const containerDesigns = document.querySelector('.design');
const designModal = document.querySelector('.design-modal');
const designAllİtems = document.querySelector('#designAllİtems')
const searchDesign = document.querySelector('#search-design')
const arrowIconDesign = document.querySelector('#arrowIconDesign');
let checkedDesignNames = [];
let checkDesignId;
let designIds = [];
let designId;
let isDesignFetched = false;
let selectedDesigns = null;
let latestDesignId;

const openDesignModal = () => {
    designModal.classList.remove("hidden");
    arrowIconDesign.style.transform = "rotate(-180deg)";
    arrowIconDesign.style.webkitTransform = "rotate(-180deg)";
    arrowIconDesign.style.mozTransform = "rotate(-180deg)";
    arrowIconDesign.style.msTransform = "rotate(-180deg)";
    arrowIconDesign.style.oTransform = "rotate(-180deg)";

    if (!isDesignFetched) {
        fetch(`${baseUrl}/${getAllDesignsStyles}`)
            .then((response) => response.json())
            .then((data) => {
                const designs = data.styleOfDesigns
                console.log(designs);

                designs.forEach((design) => {
                    const designName = design.name;
                    const designId = design.id;
                    const html = `
              <li class="item item_filter_design d-flex justify-content-between align-items-center mt-3" data-id="${designId}">
                <span class="item-subtext">${designName}</span>
              </li>
            `;
                    containerDesigns.insertAdjacentHTML("afterbegin", html);
                });

                isDesignFetched = true;
            });
    }
};

containerDesigns.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const itemServicesDesign = clickedElement.closest(".item_filter_design");

    if (itemServicesDesign) {
        const designName = itemServicesDesign.querySelector(".item-subtext").textContent;
        const designId = itemServicesDesign.getAttribute("data-id");
        const checkedItem = containerDesigns.querySelector(".item_filter_design.checked");

        itemServicesDesign.classList.toggle("checked");

        if (itemServicesDesign.classList.contains("checked")) {
            designAllİtems.textContent = designName;
            console.log(designName);
            designIds.push(designId);

            if (checkedItem && checkedItem !== itemServicesDesign) {
                const previousdesignId = checkedItem.getAttribute("data-id");
                const previosDesignIndex = designIds.indexOf(previousdesignId);

                if (previosDesignIndex !== -1) {
                    designIds.splice(previosDesignIndex, 1);
                }

                checkedItem.classList.remove("checked");
            }

            closeDesignModal();
        } else {
            designAllİtems.textContent = 'Seçin';
            const designIndex = designIds.indexOf(designId);

            if (designIndex !== -1) {
                designIds.splice(designIndex, 1);
            }
        }
    }
});


const closeDesignModal = () => {
    designModal.classList.add('hidden')
    arrowIconDesign.style.transform = "";
    arrowIconDesign.style.webkitTransform = "";
    arrowIconDesign.style.mozTransform = "";
    arrowIconDesign.style.msTransform = "";
    arrowIconDesign.style.oTransform = "";
}

selectBtnDesign.onclick = () => {
    if (designModal.classList.contains('hidden')) {
        openDesignModal();
    } else {
        closeDesignModal();
    }
};

searchDesign.addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const designItems = document.querySelectorAll('.item_filter_design');

    designItems.forEach((item) => {
        const designName = item.querySelector('.item-subtext').textContent.toLowerCase();
        if (designName.includes(searchQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});


// Colour...
const selectBtnColour = document.querySelector(".select-btn-colour")
const containerColours = document.querySelector('.colours');
const colorModal = document.querySelector('.color-modal');
const colourItems = document.querySelector('#colourItems');
const searchColors = document.querySelector("#search-colors");
const arrowIconColour = document.querySelector('#arrowIconColour')
let checkedColourId;
let colorIds = []
let checkedColourNames = [];
let isColourFetched = false;
let colourId;

const openColourModal = () => {
    colorModal.classList.remove("hidden");
    arrowIconColour.style.transform = "rotate(-180deg)";
    arrowIconColour.style.webkitTransform = "rotate(-180deg)";
    arrowIconColour.style.mozTransform = "rotate(-180deg)";
    arrowIconColour.style.msTransform = "rotate(-180deg)";
    arrowIconColour.style.oTransform = "rotate(-180deg)";
    if (!isColourFetched) {
        fetch(`${baseUrl}/${getAllColors}`)
            .then(response => response.json())
            .then(data => {
                const colours = data.colors;
                console.log(colours);
                colours.forEach(colour => {
                    const coloursName = colour.name;
                    const colourCode = colour.code;
                    const colourId = colour.id;
                    console.log(colourCode);
                    const html = `
                        <li class="item item__services-colour d-flex justify-content-between align-items-center mt-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <span style='background-color: ${colourCode};width: 10px; height: 10px;'></span>
                                <span id="${colourId}" class="item-subtext subcolour-item_left">${coloursName}</span>
                            </div>
                            <span class="checkbox">
                                 <i class="fa-solid fa-check check-icon"></i>
                            </span>   
                        </li>
                    `;
                    containerColours.insertAdjacentHTML('afterbegin', html);
                });

                const announcement_item_colour = document.querySelectorAll(".item__services-colour");
                announcement_item_colour.forEach(item => {
                    item.addEventListener("click", () => {
                        item.classList.toggle("checked");
                        const colourId = item.querySelector('.item-subtext').getAttribute("id");
                        if (item.classList.contains("checked")) {
                            checkedColourId = colourId;
                            checkedColourNames.push(item.querySelector(".item-subtext").textContent);
                        } else {
                            const index = colorIds.indexOf(colourId);
                            if (index > -1) {
                                colorIds.splice(index, 1);
                                checkedColourNames.splice(index, 1);
                            }
                            console.log(checkedColourId);
                            colourItems.textContent = checkedColourNames.join(", ");
                            if (checkedColourNames.length === 0) {
                                console.log('seçin');
                                colourItems.textContent = 'Seçin';
                            }
                            return;
                        }

                        console.log(checkedColourId);
                        colorIds.push(checkedColourId);
                        console.log(checkedColourNames);

                        colourItems.textContent = checkedColourNames.join(", ");
                    });
                });

                isColourFetched = true;
                filterColors('');
            })
            .catch(error => {
                console.error('Error fetching colors:', error);
            });
    }
};

searchColors.addEventListener("input", function () {
    const searchTerm = this.value.trim().toLowerCase();
    filterColors(searchTerm);
});

function filterColors(searchTerm) {
    const colors = document.querySelectorAll(".item__services-colour");

    colors.forEach(function (colour) {
        const coloursName = colour.querySelector(".item-subtext").textContent.toLowerCase();

        if (coloursName.includes(searchTerm)) {
            colour.classList.remove("hidden");
        } else {
            colour.classList.add("hidden");
        }
    });
}


const closeColourModal = () => {
    colorModal.classList.add("hidden");
    arrowIconColour.style.transform = "";
    arrowIconColour.style.webkitTransform = "";
    arrowIconColour.style.mozTransform = "";
    arrowIconColour.style.msTransform = "";
    arrowIconColour.style.oTransform = "";
    console.log('clicked Colour');
}


filterCloseColor.addEventListener('click', function () {
    closeColourModal();
    console.log('clicked');
})

selectBtnColour.onclick = () => {
    if (colorModal.classList.contains('hidden')) {
        openColourModal();
    } else {
        closeColourModal();
    }
};


// Size...
let inputHeight = document.getElementById("input_height");
let inputDepth = document.getElementById("input_depth");

function checkInputs() {

    if (inputHeight.value !== "" && inputDepth.value !== "") {
        if (document.activeElement === inputDepth) {
            inputDepth.value = "";
        } else if (document.activeElement === inputHeight) {
            inputHeight.value = "";
        }
    }
}

document.getElementById("width").addEventListener("keydown", function (event) {
    if (event.key === "+") {
        event.preventDefault();
    }
});

document.getElementById("width").addEventListener("keydown", function (event) {
    if (event.key === "-") {
        event.preventDefault();
    }
});

document.getElementById("width").addEventListener("keydown", function (event) {
    if (event.key === ".") {
        event.preventDefault();
    }
});

document.getElementById("length").addEventListener("keydown", function (event) {
    if (event.key === "+") {
        event.preventDefault();
    }
});

document.getElementById("length").addEventListener("keydown", function (event) {
    if (event.key === "-") {
        event.preventDefault();
    }
});

document.getElementById("length").addEventListener("keydown", function (event) {
    if (event.key === ".") {
        event.preventDefault();
    }
});

document.getElementById("input_height").addEventListener("keydown", function (event) {
    if (event.key === "+") {
        event.preventDefault();
    }
});

document.getElementById("input_height").addEventListener("keydown", function (event) {
    if (event.key === "-") {
        event.preventDefault();
    }
});

document.getElementById("input_height").addEventListener("keydown", function (event) {
    if (event.key === ".") {
        event.preventDefault();
    }
});

document.getElementById("input_depth").addEventListener("keydown", function (event) {
    if (event.key === "+") {
        event.preventDefault();
    }
});

document.getElementById("input_depth").addEventListener("keydown", function (event) {
    if (event.key === "-") {
        event.preventDefault();
    }
});

document.getElementById("input_depth").addEventListener("keydown", function (event) {
    if (event.key === ".") {
        event.preventDefault();
    }
});


// Price...
var priceValue;
document.addEventListener("DOMContentLoaded", function () {
    var priceInput = document.getElementById("price");

    priceInput.addEventListener("input", function (event) {
        var priceValue = event.target.value;
        if (priceValue.trim() !== "") {
            // priceValue = priceValue.replace(/[^\d.]/g, "");
            priceValue = priceValue.replace(/\D/g, "");
            priceValue += " AZN";
        }
        event.target.value = priceValue;
    });

    priceInput.addEventListener("keydown", function (event) {
        if (event.key === "-") {
            event.preventDefault();
        }
    });

    priceInput.addEventListener("blur", function (event) {
        priceValue = event.target.value.replace(" AZN", "");
        console.log(priceValue);
    });

    document.getElementById("price").addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
            priceValue = event.target.value;
            if (priceValue.endsWith(" AZN")) {
                priceValue = priceValue.slice(0, -4);
                event.target.value = priceValue;
            }
        }
    });
});



document.getElementById("price").addEventListener("keydown", function (event) {
    if (event.key === "+") {
        event.preventDefault();
    }
});

document.getElementById("price").addEventListener("keydown", function (event) {
    if (event.key === "-") {
        event.preventDefault();
    }
});


// Map...
function initMap() {

    let map = new google.maps.Map(document.getElementById('announcement-furniture__map'), {
        center: { lat: 40.40926169999999, lng: 49.8670924 },
        zoom: 13
    });


    let inputSearch = document.getElementById('announcement-furniture__searchInput');


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

        document.getElementById('announcement-furniture__location').innerHTML = place.formatted_address;
        document.getElementById('announcement-furniture__lat').innerHTML = place.geometry.location.lat();
        document.getElementById('announcement-furniture__lon').innerHTML = place.geometry.location.lng();

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
        document.getElementById('announcement-furniture__searchInput').value = place.formatted_address || '';
        document.getElementById('announcement-furniture__location').innerHTML = place.formatted_address || '';
        document.getElementById('announcement-furniture__lat').innerHTML = place.geometry.location.lat();
        document.getElementById('announcement-furniture__lon').innerHTML = place.geometry.location.lng();
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

let addressId;

function checkGeoData() {
    let location = document.getElementById("announcement-furniture__location").innerText;
    let lat = document.getElementById("announcement-furniture__lat").innerText;
    let lon = document.getElementById("announcement-furniture__lon").innerText;
    let announcementAddress = document.querySelector('.announcement-services_input-address');
    // localStorage.setItem(location, 'location')
    // localStorage.setItem(lat, 'lat')
    // localStorage.setItem(lon, 'lon')

    announcementAddress.value = location;

    (async () => {
        const res = await fetch(`${baseUrl}/${createAddress}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ displayName: location, lat, lon })
        });
        const content = await res.json();
        console.log(content);
        addressId = content?.addressId;
        if (addressId.length !== 0) {
            filterCloseLocation.style.display = 'block'
        }
    })();

    if (location.trim() === "" || lat.trim() === "" || lon.trim() === "") {
        alert("Zəhmət olmasa ünvanı daxil edin");
        return;
    }



    let modal = document.getElementById("exampleModal_Announcement");
    let bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
    document.getElementById("announcement-furniture__searchInput").value = "";
}


// SET IMAGE
let selectedFiles = [];
const imageInput = document.querySelector('#file_image');
const previewContainer = document.querySelector('#preview-container');
let formData = new FormData();
const imageContainer = document.querySelector('#image-container');


imageInput.addEventListener('change', (e) => {
    const files = e.target.files;
    const minFiles = 1;
    const maxFiles = 8;

    const newFiles = Array.from(files);
    const totalFiles = selectedFiles.concat(newFiles);

    if (totalFiles.length < minFiles || totalFiles.length > maxFiles) {
        console.log(`Zəhmət olmasa,  ${minFiles} və ${maxFiles} aralığında şəkil seçin.`);
        const html = `
        <p id='textColor'>Zəhmət olmasa, minimum ${minFiles}, maximum ${maxFiles} aralığında şəkil seçin.</p>
        `
        imageContainer.insertAdjacentHTML("afterbegin", html);
        return;
    } else {
        imageContainer.innerHTML = '';
    }

    previewContainer.innerHTML = '';

    totalFiles.forEach((file) => {
        const previewImage = document.createElement('div');
        previewImage.classList.add('preview-image-furniture');
        previewImage.file = file;

        const imageElement = document.createElement('img');
        imageElement.file = file;
        imageElement.classList.add('preview-images');
        previewImage.appendChild(imageElement);

        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.innerHTML = '&times;';
        previewImage.appendChild(deleteIcon);

        const reader = new FileReader();
        reader.onload = (event) => {
            imageElement.src = event.target.result;
        };
        reader.readAsDataURL(file);

        deleteIcon.addEventListener('click', () => {
            const index = selectedFiles.indexOf(file);
            if (index > -1) {
                selectedFiles.splice(index, 1);
                previewImage.remove();
                formData.delete('files');
            }
        });

        const fileSize = (file.size / 1024).toFixed(2);
        console.log(fileSize);

        previewContainer.appendChild(previewImage);

        previewImage.classList.add('preview-image-furniture');

        previewImage.addEventListener('mouseenter', () => {
            deleteIcon.style.display = 'flex';
        });

        previewImage.addEventListener('mouseleave', () => {
            deleteIcon.style.display = 'none';
        });

        // Left Arrow
        const leftArrowIcon = document.createElement('span');
        leftArrowIcon.classList.add('left-arrow');
        leftArrowIcon.innerHTML = '&#8630;';
        previewImage.appendChild(leftArrowIcon);

        // Right Arrow
        const rightArrowIcon = document.createElement('span');
        rightArrowIcon.classList.add('right-arrow');
        rightArrowIcon.innerHTML = '&#8631;';
        previewImage.appendChild(rightArrowIcon);

        leftArrowIcon.addEventListener('click', () => {
            rotateImage(imageElement, -45);
        });

        rightArrowIcon.addEventListener('click', () => {
            rotateImage(imageElement, 45);
        });

    });

    selectedFiles = totalFiles;

    formData = new FormData();
    selectedFiles.forEach((file) => {
        formData.append('files', file);
    });

    if (totalFiles.length > 0) {
        const marginTopDiv = document.querySelector('.announcement-services-fields-right_four');
        marginTopDiv.style.marginTop = '40px';
    }
});

function rotateImage(imageElement, degree) {
    const currentRotation = getCurrentRotation(imageElement);
    const newRotation = currentRotation + degree;
    imageElement.style.transform = `rotate(${newRotation}deg)`;
}


function getCurrentRotation(imageElement) {
    const transform = window.getComputedStyle(imageElement).getPropertyValue('transform');
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
        const values = matrix[1].split(', ');
        if (values.length === 6) {
            return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
        }
    }
    return 0;
}


// Credit and Discount

let discount = document.getElementById('discount');
let credit = document.getElementById('credit');

discount.addEventListener('click', function () {
    discount.value = discount.checked ? 1 : 2;
});

credit.addEventListener('click', function () {
    credit.value = credit.checked ? 1 : 2;
    console.log(credit.value);
});


const handleAnnouncementFurniture = () => {
    // const price = Number(document.querySelector('#price').value);
    const title = document.querySelector('#form-title').value;
    const description = document.querySelector('#desc').value;
    const userIdUpdated = localStorage.getItem('userId');
    const width = document.querySelector("#width").value;
    const length = document.querySelector("#length").value;
    const depth = inputDepth.value
    const height = inputHeight.value
    const allSizes = { width, length, depth, height }
    sizes.push(allSizes)
    let advertId;
    let add;
    console.log(addressName.value);
    if (addressName.value === localStorage.getItem('address')) {
        add = addressIdLocal;
        console.log(add, 'local');
    }
    else if (addressName.value === '') {
        add = ''
    }
    else {
        add = addressId
        console.log(add, 'global');
    }

    const formData = new FormData();
    formData.append("price", priceValue);
    formData.append("title", title);
    formData.append("featureId", typeId);
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("availableDiscount", discount.value);
    formData.append("addressId", add);
    formData.append("creditCash", credit.value);
    formData.append("countryId", latestcountryId);
    formData.append("userId", userIdUpdated);
    sizes.forEach((item) => {
        formData.append("sizes[]", item);
    });
    colorIds.forEach((item) => {
        formData.append("advertDetailColor.colorIds[]", item);
    });
    cityIds.forEach((item) => {
        formData.append("advertDetailCity.cityIds[]", item);
    });
    materialIds.forEach((item) => {
        formData.append("advertDetailMaterial.materialIds[]", item);
    });
    designIds.forEach((item) => {
        formData.append("advertDetailStyleOf.styleOfDesignIds[]", item);
    });
    productIds.forEach((item) => {
        formData.append("advertDetailFurnitureStatus.furStatusIds[]", item);
    });

    fetch("http://mebra.az/api/Adverts/CreateFurnitureAdvert", {
        method: "POST",
        body: formData,
    })
        .then(async (response) => {
            const content = await response.json();
            console.log(content);
            advertId = content.advertId;
            console.log(advertId);
            if (content.message === 'Elan uğurla yaradıldı.') {
                console.log(content.succeded);
                upLoadImages();
                Toastify({
                    text: "Elan uğurla yaradıldı",
                    style: {
                        background: "green",
                        width: '100%',
                    },
                }).showToast();
            } else if (content && content.length > 0) {
                content.forEach((error) => {
                    const field = error.field;
                    const errorMessage = error.errorMessage;
                    console.log(`${field}: ${errorMessage}`);
                    Toastify({
                        text: `${errorMessage}`,
                        style: {
                            background: "red",
                            width: '100%',
                        },
                    }).showToast();
                });
            }
            return content;
        })
        .catch((error) => {
            console.log(error);
        });

    function upLoadImages() {
        const formData = new FormData();
        const updatedUrl = 'http://mebra.az/api/Adverts/UploadAdvertImage';
        formData.append('advertId', advertId);
        selectedFiles.forEach((file) => {
            formData.append('files', file);
        });

        const headers = new Headers();

        fetch(updatedUrl, {
            method: 'POST',
            headers: headers,
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(formData);
                console.log(advertId);
                console.log(selectedFiles);
                console.log(data?.message);
                if (data?.message === "Şəkillər uğurla yükləndi") {
                    console.log(data?.message);
                    window.location.href = "end.html";
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

}