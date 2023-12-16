document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            validateForm();
        } else {
            alert('High five! Form submitted successfully.');
        }
    });

    function validateForm() {
        const emailInput = document.getElementById('email');
        const countryInput = document.getElementById('country');
        const zipcodeInput = document.getElementById('zipcode');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');

        validateInput(emailInput);
        validateInput(countryInput);
        validateInput(zipcodeInput);
        validateInput(passwordInput);
        validateInput(confirmPasswordInput);
    }

    function validateInput(input) {
        if (!input.checkValidity()) {
            input.reportValidity();
        }
    }
});