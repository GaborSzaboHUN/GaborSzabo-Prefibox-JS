/* - - - - - - - - LOAD THE PRODUCTS - - - - - - - - */

const productsContainer = document.querySelector(".products")

function displayItems(arr) {
    arr.forEach(product =>

        productsContainer.innerHTML += `
        <div class="product">
            <span class="image-container">
                <img
                    src="${product.image}">
            </span>
            <div class="product-data" data-identifier="6">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.currentPrice.toLocaleString()} Ft</div>
                <div class="product-old-price">${product.previousPrice ? product.previousPrice.toLocaleString() + " Ft" : ""} </div>
            </div>
        </div>
        `
    )
}

window.addEventListener("load", displayItems(productList))




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

    clearSearchBar()
}

dropdownList.addEventListener("change", dropdownValueChange)



/* - - - - - - - - CHECKBOX FOR DISCOUNT PRODUCTS - - - - - - - - */

const checkBox = document.querySelector("input[type='checkbox']")

const checkBoxCheck = () => {
    productsContainer.innerHTML = ""

    if (checkBox.checked === true) {
        const discountProducts = productList.filter(product => product.previousPrice !== "")
        displayItems(discountProducts)

    } else {
        displayItems(productList)

    }

    clearSearchBar()
}

checkBox.addEventListener("change", checkBoxCheck)




/* - - - - - - - - SEARCH BAR - - - - - - - - */

const searchInput = document.querySelector(".search-input")

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()

    const filteredProducts = productList.filter(product => {
        return product.name.toLowerCase().includes(value)
    })

    productsContainer.innerHTML = ""
    if (filteredProducts.length) {
        displayItems(filteredProducts)
    } else {
        productsContainer.innerHTML = `<div class="product-name">Nem találtunk a keresésnek megfelelő terméket :(</div>`
    }
})

function clearSearchBar() {
    searchInput['lastElementChild'].value = ""
}