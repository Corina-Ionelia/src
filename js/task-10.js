function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = ''; // Clear previous boxes

    let size = 30;
    for (let i = 0; i < amount; i++) {
        const color = getRandomHexColor();
        const boxHTML = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
        boxesDiv.insertAdjacentHTML('beforeend', boxHTML);
        size += 10;
    }
}

function destroyBoxes() {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const amountInput = document.querySelector('input[type="number"]');

    createButton.addEventListener('click', function() {
        const amount = parseInt(amountInput.value);
        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    destroyButton.addEventListener('click', function() {
        destroyBoxes();
    });
});