const categories = {
    fruits: 'fruits',
    vegetables: 'vegetables',
    dairy: 'dairy',
    meat: 'meat',
    beverages: 'beverages',
    baking: 'baking'
};
const preferences = ["vegetarian", "gluten-free", "organic"];

const productList = [];

add('Apple', '0.80', 'resources/apple.jpg', true, true, true, categories.fruits);
add('Orange', '0.99', 'resources/orange.jpg', true, true, false, categories.fruits);
add('Watermelon', '2.00', 'resources/watermelon.jpg', true, true, true, categories.fruits);
add('Carrots', '3.50', 'resources/carrots.jpg', true, true, true, categories.vegetables);
add('Celery', '0.99', 'resources/celery.jpg', true, true, false, categories.vegetables);
add('Broccoli', '1.50', 'resources/broccoli.jpg', true, true, false, categories.vegetables);
add('Skim Milk', '4.99', 'resources/milk.jpg', true, true, false, categories.dairy);
add('Cheddar Cheese', '2.20', 'resources/cheese.jpg', true, true, false, categories.dairy);
add('Unsalted Butter', '6.99', 'resources/butter.jpg', true, true, true, categories.dairy);
add('Chicken Breast', '5.50', 'resources/chicken.png', false, true, false, categories.meat);
add('Salmon Fillet', '3.35', 'resources/salmon.jpg', false, true, true, categories.meat);
add('Steak', '6.50', 'resources/steak.jpg', false, true, false, categories.meat);
add('Coca Cola', '1.99', 'resources/coke.jpg', true, true, false, categories.beverages);
add('Sprite', '1.99', 'resources/sprite.jpg', true, true, false, categories.beverages);
add('Pepsi', '1.99', 'resources/pepsi.jpg', true, true, false, categories.beverages);
add('Flour', '2.33', 'resources/flour.jpg', true, false, false, categories.baking);
add('Brown Sugar', '3.15', 'resources/sugar.jpg', true, true, false, categories.baking);
add('Baking Powder', '2.75', 'resources/bakingpowder.jpg', true, true, false, categories.baking);

Array.from(document.getElementsByClassName('preference-checkboxes')).forEach(checkbox => {
    checkbox.addEventListener('change', () => displayProducts());
});
Array.from(document.getElementsByClassName('category-checkboxes')).forEach(checkbox => {
    checkbox.addEventListener('change', () => displayProducts());
});

function add(name, price, image, vegetarian, glutenFree, organic, category) {
    productList.push({
        name: name,
        price: price,
        image: image,
        vegetarian: vegetarian,
        'gluten-free': glutenFree,
        organic: organic,
        category: category
    })
}

function displayProducts() {
    const productListElem = document.getElementById('product-list');
    const searchText = document.getElementById('search').value.toLowerCase();
    const preferenceCheckboxes = Array.from(document.getElementsByClassName('preference-checkboxes'));
    const categoryCheckboxes = Array.from(document.getElementsByClassName('category-checkboxes'));

    const preferencesChecked = preferenceCheckboxes.map(checkbox => checkbox.checked);
    const categoriesChecked = categoryCheckboxes.map(checkbox => checkbox.checked);
    const preferences = preferenceCheckboxes.map(checkbox => checkbox.id);
    const categories = categoryCheckboxes.map(checkbox => checkbox.id);

    const preferencesOn = preferencesChecked.includes(true);
    const categoriesOn = categoriesChecked.includes(true);

    productListElem.innerHTML = '';
    productLoop:
        for (let i = 0; i < productList.length; i++) {
            const product = productList[i];
            if (product.name.toLowerCase().includes(searchText)) {
                if (preferencesOn) {
                    for (let j = 0; j < preferences.length; j++) {
                        if (preferencesChecked[j] && !product[preferences[j]]) {
                            continue productLoop;
                        }
                    }
                }
                if (categoriesOn) {
                    for (let j = 0; j < categories.length; j++) {
                        if (!categoriesChecked[j] && product.category === categories[j]) {
                            continue productLoop;
                        }
                    }
                }
                productListElem.innerHTML += '<li>' + product.name + '</li>'
            }
        }
}

displayProducts();