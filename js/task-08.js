document.addEventListener("DOMContentLoaded", () => {
    // login
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // câmpurile de email și parolă
        const emailInput = this.elements['email'];
        const passwordInput = this.elements['password'];

        // câmpurile sunt goale
        if (emailInput.value.trim() === '' || passwordInput.value === '') {
            alert('Please fill in all fields');
        } else {
            // Creăm un obiect 
            const formData = {
                email: emailInput.value,
                password: passwordInput.value
            };
            console.log(formData);
            // Resetăm 
            loginForm.reset();
        }
    });
});