document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const background = document.querySelector('.background');
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');

    // Ascunderea modalului inițial
    modal.style.display = 'none';

    // Afisarea modalului la apasare pe buton
    document.getElementById('showModalButton').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Ascunderea modalului
    document.getElementById('closeModalButton').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Toggle pentru vizualizarea parolei
    showPasswordCheckbox.addEventListener('change', function() {
        const type = this.checked ? 'text' : 'password';
        passwordInput.type = type;
    });

    // Ascunderea modalului atunci când se face clic în afara acestuia
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Gestionarea trimiterii formularului
    document.querySelector('.login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validare formular
        if (!email || !password) {
            alert('Te rog să completezi toate câmpurile.');
            return;
        }

        // Simulare trimitere date către server (afisare in consolă)
        console.log('Email:', email);
        console.log('Password:', password);

        // Resetarea formularului
        this.reset();
    });
});