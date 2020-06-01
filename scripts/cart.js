const cartItemIndices = [];
const cartCounts = [];

function displayShoppingCart() {

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