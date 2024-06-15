document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

    nameInput.addEventListener('input', () => {
        console.log('Input event triggered');
        if (nameInput.value.trim() === '') {
            nameOutput.textContent = 'Anonymous';
            console.log('Input is empty. Setting nameOutput to "Anonymous"');
        } else {
            nameOutput.textContent = nameInput.value;
            console.log(`Setting nameOutput to "${nameInput.value}"`);
        }
    });
});