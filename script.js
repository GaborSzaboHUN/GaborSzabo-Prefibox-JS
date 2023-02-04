/* - - - - - - - - LOAD THE PRODUCTS - - - - - - - - */

const productsContainer = document.querySelector(".products")

function displayItems() {

    for (product of productList) {
        productsContainer.innerHTML += `
        <div class="product">
            <span class="image-container">
                <img
                    src="${product.image}">
            </span>
            <div class="product-data" data-identifier="6">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.currentPrice.toLocaleString()} Ft</div>
                <div class="product-old-price">${product.previousPrice.toLocaleString()} Ft</div>
            </div>
        </div>
        `
    }
}

window.addEventListener("load", displayItems)



/* - - - - - - - - DROPDOWN SORTING - - - - - - - - */
const dropdownList = document.querySelector(".custom-select")

function sortByPriceAscend(arr) {
    arr.sort((a, b) => a.currentPrice - b.currentPrice)
    return arr
}

function sortByPriceDescend(arr) {
    arr.sort((a, b) => b.currentPrice - a.currentPrice)
    return arr
}

function sortByName(a, b) {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
}

// - Display products according to the dropdown sorting
const dropdownValueChange = (e) => {
    productsContainer.innerHTML = ""

    if (e.target.value * 1 === 0) {
        displayItems(sortByPriceAscend(productList))

    } else if (e.target.value * 1 === 1) {
        displayItems(sortByPriceDescend(productList))

    } else if (e.target.value * 1 === 2) {
        displayItems(productList.sort(sortByName))

    } else if (e.target.value * 1 === 3) {
        displayItems(productList.sort(sortByName).reverse())
    }
}

dropdownList.addEventListener("change", dropdownValueChange)



/* - - - - - - - - CHECKBOX FOR DISCOUNT PRODUCTS - - - - - - - - */

const checkBox = document.querySelector("input[type='checkbox']")


const checkBoxCheck = () => {
    productsContainer.innerHTML = ""

    if (checkBox.checked === true) {

        const discountProducts = productList.filter(product => product.previousPrice !== "")
        console.log(discountProducts)

        for (product of discountProducts) {
            productsContainer.innerHTML += `
            <div class="product">
                <span class="image-container">
                    <img
                        src="${product.image}">
                </span>
                <div class="product-data" data-identifier="6">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.currentPrice.toLocaleString()} Ft</div>
                    <div class="product-old-price">${product.previousPrice.toLocaleString()} Ft</div>
                </div>
            </div>
            `
        }


    } else {

        displayItems(productList)

    }

}

checkBox.addEventListener("change", checkBoxCheck)