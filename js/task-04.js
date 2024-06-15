document.addEventListener("DOMContentLoaded", () => {
    // Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului
    let counterValue = 0;

    // Selectați elementele butoanelor și span-ul valorii
    const valueElement = document.querySelector('#value');
    const decrementButton = document.querySelector('button[data-action="decrement"]');
    const incrementButton = document.querySelector('button[data-action="increment"]');

    // Adăugați handler-ul de click pentru butonul de decrementare
    decrementButton.addEventListener('click', () => {
        counterValue -= 1; // Scădeți valoarea contorului
        valueElement.textContent = counterValue; // Actualizați interfața
    });

    // Adăugați handler-ul de click pentru butonul de incrementare
    incrementButton.addEventListener('click', () => {
        counterValue += 1; // Măriți valoarea contorului
        valueElement.textContent = counterValue; // Actualizați interfața
    });
});