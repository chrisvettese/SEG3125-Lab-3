const cartItemIndices = [];
const cartCounts = [];

function displayShoppingCart(cartElement) {
    cartElement.innerHTML = '<ul>';
    let totalPrice = 0.0;
    for (let i = 0; i < cartItemIndices.length; i++) {
        const count = cartCounts[i];
        let price = parseFloat(productList[cartItemIndices[i]].price) * count;
        totalPrice += price;
        price = price.toString();
        price = zeroify(price);
        const name = productList[cartItemIndices[i]].name;
        cartElement.innerHTML += '<li>' + count + ' x ' + name + ': $' + price + '</li>';
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

function zeroify(priceStr) {
    if (priceStr[priceStr.length - 2] === '.') {
        priceStr += '0';
    }
    else if (!priceStr.includes('.')) {
        priceStr += '.00';
    }
    return priceStr;
}