document.addEventListener("DOMContentLoaded", () => {
    // Selectăm elementele input și span
    const fontSizeControl = document.querySelector('#font-size-control');
    const text = document.querySelector('#text');

    // Setăm dimensiunea inițială a textului
    text.style.fontSize = `${fontSizeControl.value}px`;

    // Adăugăm un handler pentru evenimentul input
    fontSizeControl.addEventListener('input', () => {
        // Actualizăm dimensiunea textului
        text.style.fontSize = `${fontSizeControl.value}px`;
    });
});