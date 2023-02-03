/* - - - - - - - Load the products from database - - - - - - - */

const productCardComponent = (name, image, currentPrice, previousPrice) => {
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


/* - - - - - - - Checkbox for discount products - - - - - - - */
const checkBox = document.querySelector(".sale")

// checkbox checked állapot tesztelése
const checkBoxCheck = () => {
    if (checkBox.checked === true) {
        // ha a product.previousPrice nem létezik akkor adjon hozzá egy display none állapotú css classt
        console.log("pipa")

        for (product of products) {
            if (product.previousPrice === "") {
                console.log(product)
            }
        }




    } else {
        console.log("nincs pipa :(")
    }
}

// ha a checkbox checked akkor fusson le a class toggle
checkBox.addEventListener("click", checkBoxCheck)