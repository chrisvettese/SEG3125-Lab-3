const cartItemIndices = [];
const cartCounts = [];

function displayShoppingCart(cartElement) {
    cartElement.innerHTML = '<ul>';
    let totalPrice = 0.0;
    if (cartItemIndices.length === 0) {
        cartElement.innerHTML += '<li>Items added to the cart will appear here.</li>';
    } else {
        for (let i = 0; i < cartItemIndices.length; i++) {
            const count = cartCounts[i];
            let price = parseFloat(productList[cartItemIndices[i]].price) * count;
            totalPrice += price;
            price = price.toString();
            price = zeroify(price);
            const name = productList[cartItemIndices[i]].name;
            const deleteButton = '<button class="adjust-button" onclick="removeFromCart(' + i + ')">X</button>';
            const addButton = '<button class="adjust-button" onclick="increaseProduct(' + i + ')">+</button>';
            const subtractButton = '<button class="adjust-button" onclick="decreaseProduct(' + i + ')">-</button>';
            cartElement.innerHTML += '<li>' + count + ' x ' + name + ': $' + price + deleteButton + addButton + subtractButton + '</li>';
        }
    }
    totalPrice = totalPrice.toString();
    totalPrice = zeroify(totalPrice);

    cartElement.innerHTML += '</ul><br><br> Total price: $' + totalPrice;
}

function addToCart(index) {
    const cartIndex = cartItemIndices.indexOf(index);
    if (cartIndex >= 0) {
        cartCounts[cartIndex]++;
    } else {
        cartItemIndices.push(index);
        cartCounts.push(1);
    }
}

function increaseProduct(cartIndex) {
    cartCounts[cartIndex]++;
    displayShoppingCart(document.getElementById('cart-display'));
}

function decreaseProduct(cartIndex) {
    cartCounts[cartIndex]--;
    if (cartCounts[cartIndex] === 0) {
        cartItemIndices.splice(cartIndex, 1);
        cartCounts.splice(cartIndex, 1);
    }
    displayShoppingCart(document.getElementById('cart-display'));
}

function removeFromCart(cartIndex) {
    cartItemIndices.splice(cartIndex, 1);
    cartCounts.splice(cartIndex, 1);
    displayShoppingCart(document.getElementById('cart-display'));

}

function zeroify(priceStr) {
    if (priceStr[priceStr.length - 2] === '.') {
        priceStr += '0';
    } else if (!priceStr.includes('.')) {
        priceStr += '.00';
    }
    if (priceStr[priceStr.length - 3] !== '.') {
        const decimalIndex = priceStr.indexOf('.');
        priceStr = priceStr.substring(0, decimalIndex + 3);
    }
    return priceStr;
}