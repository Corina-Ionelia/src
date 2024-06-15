document.addEventListener("DOMContentLoaded", () => {
    // Selectăm elementul input
    const validationInput = document.querySelector('#validation-input');

    // Adăugăm un handler pentru evenimentul blur
    validationInput.addEventListener('blur', () => {
        // Obținem lungimea necesară din atributul data-length
        const requiredLength = parseInt(validationInput.dataset.length, 10);
        // Obținem lungimea actuală a valorii input-ului
        const currentLength = validationInput.value.length;

        if (currentLength === requiredLength) {
            validationInput.classList.add('valid');
            validationInput.classList.remove('invalid');
        } else {
            validationInput.classList.add('invalid');
            validationInput.classList.remove('valid');
        }
    });
});