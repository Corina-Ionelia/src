document.addEventListener("DOMContentLoaded", () => {
    const ingredients = [
        "Potatoes",
        "Mushrooms",
        "Garlic",
        "Tomatos",
        "Herbs",
        "Condiments",
    ];

    const ingredientsList = document.querySelector('#ingredients');

    const fragment = document.createDocumentFragment();

    ingredients.forEach(ingredient => {
        // Element <li>
        const li = document.createElement('li');

        li.textContent = ingredient;

        li.classList.add('item');

        fragment.appendChild(li);
    });

    ingredientsList.appendChild(fragment);

    console.log('Ingredientele au fost adăugate în listă.');
});