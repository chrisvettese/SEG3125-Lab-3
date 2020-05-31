let showPreferences = false;
let showCategories = false;

const preferenceCheckbox = document.getElementById('preference-checkbox');
preferenceCheckbox.style.display = 'none';
const categoryCheckbox = document.getElementById('category-checkbox');
categoryCheckbox.style.display = 'none';

document.getElementById('body').addEventListener('click', e => closeSelections(e));

function checkboxSelect(dropdown) {
    if (dropdown === 'preferences') {
        showPreferences = !showPreferences;
        if (showPreferences) {
            preferenceCheckbox.style.display = 'block';
        } else {
            preferenceCheckbox.style.display = 'none';
        }
    } else {
        showCategories = !showCategories;
        if (showCategories) {
            categoryCheckbox.style.display = 'block';
        } else {
            categoryCheckbox.style.display = 'none';
        }
    }
}

function closeSelections(event) {
    let parentId = event.target.parentElement.id;

    if (event.target.id !== 'preferences' && event.target.id !== 'preference-checkbox' && parentId !== 'preference-checkbox') {
        showPreferences = false;
        preferenceCheckbox.style.display = 'none';
    }
    if (event.target.id !== 'categories' && event.target.id !== 'category-checkbox' && parentId !== 'category-checkbox') {
        showCategories = false;
        categoryCheckbox.style.display = 'none';
    }

    const target = event.target.htmlFor;
    if (preferences.includes(target) || categories.includes(target)) {
        displayProducts();
    }
}