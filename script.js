
//Ide töltődik be a productList tömb
const productsContainer = document.querySelector(".products")

//ez olvassa ki a option value-ját 0-tól 3-ig
const dropdownListOption = document.querySelector(".custom-select > select > option").value

// Betöltésnél létrehozza az alap listát
function displayItems(array = []) {
    productsContainer.innerHTML = ""

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



const dropdownValueChange = (e) => {
    productsContainer.innerHTML = ""

    if (e.target.value * 1 === 0) {

        console.log("Ár szerint növekvő")

        displayItems(sortByPriceAscend(productList))

    } else if (e.target.value * 1 === 1) {

        console.log("Ár szerint csökkenő")

        displayItems(sortByPriceDescend(productList))

    } else if (e.target.value * 1 === 2) {
        console.log("ABC növekvő")

        displayItems(productList.sort(sortByName))

    } else if (e.target.value * 1 === 3) {
        console.log("ABC csökkenő")

        displayItems(productList.sort(sortByName).reverse())
    }
}


// ez indítja el a dropdown lista elem értékének kiolvasását végző függvényt
window.addEventListener("change", dropdownValueChange)
















































/* const productCardComponent = (name, image, currentPrice, previousPrice) => {
    return `
    <div class="product">
            <span class="image-container">
                <img
                    src="${image}">
            </span>
            <div class="product-data" data-identifier="6">
                <div class="product-name">${name}</div>
                <div class="product-price">${currentPrice.toLocaleString()} Ft</div>
                <div class="product-old-price">${previousPrice.toLocaleString()} Ft</div>
            </div>
        </div>
    `
}

const loadEvent = () => {
    const rootElement = document.getElementById("root")

    for (let product of products) {
        rootElement.insertAdjacentHTML("beforeend", productCardComponent(product.name, product.image, product.currentPrice, product.previousPrice))
    }
}

window.addEventListener("load", loadEvent)


const checkBox = document.querySelector(".sale")
const generatedItemList = document.querySelectorAll


const checkBoxCheck = () => {


}

checkBox.addEventListener("click", checkBoxCheck)

const clear = () => {
    const rootElement = document.getElementById("root")
    rootElement = []
}

window.addEventListener("click", clear) */