const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

  if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
  
}

/*

const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const emailError = document.querySelector("#mail + span.error");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");
const message = document.getElementById('message')
 


email.addEventListener('input', (event) => {
     // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }

})



document.getElementById('submitButton').addEventListener('click', checkPassword);


function checkPassword() {
    let pass = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirm-password').value;
    

    if (pass.length != 0) {
        if (pass === confirmPass) {
        message.textContent = "Passwords match";
        message.style.backgroundColor = '#3ae374'
    
    }
    else {
        message.textContent = "Passwords don't match"
        message.style.backgroundColor = '#ff4d4d'
        
    };
}
else {
   
    message.textContent = "Please enter password";
}
}


form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
      
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  
    // Set the styling appropriately
    emailError.className = "error active";
  }







/* 
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

*/