// login page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');


  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const nameError = document.getElementById('name_error');
    const emailError = document.getElementById('email_error');
    const passwordError = document.getElementById('password_error');
  
    const modal = document.getElementById('modal');
  
    function validateName() {
        const nameValue = nameInput.value.trim();
        const namePattern = /^[A-Za-z\s]+$/;
      
        if (nameValue === "") {
            nameError.textContent = "Name cannot be empty";
            nameError.style.display = "block";
            return false;
        } else if (!namePattern.test(nameValue)) {
            nameError.textContent = "Name can only contain letters and spaces";
            nameError.style.display = "block";
            return false;
        } else {
            nameError.style.display = "none";
            return true;
        }
    }
  
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        if (emailValue === "") {
            emailError.textContent = "Email cannot be empty";
            emailError.style.display = "block";
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Enter a valid email address";
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }

  
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        const minLength = 8;
      
        if (passwordValue === "") {
            passwordError.textContent = "Password cannot be empty";
            passwordError.style.display = "block";
            return false;
        } else if (passwordValue.length < minLength) {
            passwordError.textContent = `Password must be at least ${minLength} characters long`;
            passwordError.style.display = "block";
            return false;
        } else {
            passwordError.style.display = "none";
            return true;
        }
    }
  
    form.addEventListener('submit', function(e) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        // const isNumberValid = validateNumber();
        const isPasswordValid = validatePassword();
      
        if (isNameValid && isEmailValid &&  isPasswordValid) {
            e.preventDefault(); // Prevent form submission
            modal.style.display = "block"; // Show the modal

            // Automatically redirect after 2 seconds (2000 milliseconds)
            setTimeout(function() {
                window.location.href = 'index.html'; // Redirect to index page
            }, 2000);
        } else {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
  
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal if the user clicks outside of it
        }
    });
  
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
});





// signup page
document.addEventListener('DOMContentLoaded', function() {
    const form1 = document.getElementById('SignForm');


  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('number');
    const passwordInput = document.getElementById('password');
  
    const nameError = document.getElementById('name_error');
    const emailError = document.getElementById('email_error');
    const numberError = document.getElementById('number_error');
    const passwordError = document.getElementById('password_error');
  
    const modal = document.getElementById('modal');
  
    function validateName() {
        const nameValue = nameInput.value.trim();
        const namePattern = /^[A-Za-z\s]+$/;
      
        if (nameValue === "") {
            nameError.textContent = "Name cannot be empty";
            nameError.style.display = "block";
            return false;
        } else if (!namePattern.test(nameValue)) {
            nameError.textContent = "Name can only contain letters and spaces";
            nameError.style.display = "block";
            return false;
        } else {
            nameError.style.display = "none";
            return true;
        }
    }
  
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        if (emailValue === "") {
            emailError.textContent = "Email cannot be empty";
            emailError.style.display = "block";
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Enter a valid email address";
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }
  
    function validateNumber() {
        const numberValue = numberInput.value.trim();
        const numberPattern = /^[0-9]{10}$/;
      
        if (numberValue === "") {
            numberError.textContent = "Number cannot be empty";
            numberError.style.display = "block";
            return false;
        } else if (!numberPattern.test(numberValue)) {
            numberError.textContent = "Enter a valid 10-digit phone number";
            numberError.style.display = "block";
            return false;
        } else {
            numberError.style.display = "none";
            return true;
        }
    }
  
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        const minLength = 8;
      
        if (passwordValue === "") {
            passwordError.textContent = "Password cannot be empty";
            passwordError.style.display = "block";
            return false;
        } else if (passwordValue.length < minLength) {
            passwordError.textContent = `Password must be at least ${minLength} characters long`;
            passwordError.style.display = "block";
            return false;
        } else {
            passwordError.style.display = "none";
            return true;
        }
    }
  
    form1.addEventListener('submit', function(e) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isNumberValid = validateNumber();
        const isPasswordValid = validatePassword();
      
        if (isNameValid && isEmailValid && isNumberValid && isPasswordValid) {
            e.preventDefault(); // Prevent form submission
            modal.style.display = "block"; // Show the modal

            // Automatically redirect after 2 seconds (2000 milliseconds)
            setTimeout(function() {
                window.location.href = 'index.html'; // Redirect to index page
            }, 2000);
        } else {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
  
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal if the user clicks outside of it
        }
    });
  
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    numberInput.addEventListener('input', validateNumber);
    passwordInput.addEventListener('input', validatePassword);
});




//reset page
document.addEventListener('DOMContentLoaded', function() {
    const form2 = document.getElementById('ResetForm');


  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  
    const nameError = document.getElementById('name_error');
    const emailError = document.getElementById('email_error');
  
    const modal = document.getElementById('modal');
  
    function validateName() {
        const nameValue = nameInput.value.trim();
        const namePattern = /^[A-Za-z\s]+$/;
      
        if (nameValue === "") {
            nameError.textContent = "Name cannot be empty";
            nameError.style.display = "block";
            return false;
        } else if (!namePattern.test(nameValue)) {
            nameError.textContent = "Name can only contain letters and spaces";
            nameError.style.display = "block";
            return false;
        } else {
            nameError.style.display = "none";
            return true;
        }
    }
  
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        if (emailValue === "") {
            emailError.textContent = "Email cannot be empty";
            emailError.style.display = "block";
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Enter a valid email address";
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }
  
  

    form2.addEventListener('submit', function(e) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
      
        if (isNameValid && isEmailValid) {
            e.preventDefault(); // Prevent form submission
            modal.style.display = "block"; // Show the modal

            // Automatically redirect after 2 seconds (2000 milliseconds)
            setTimeout(function() {
                window.location.href = 'index.html'; // Redirect to index page
            }, 2000);
        } else {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
  
  
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal if the user clicks outside of it
        }
    });
  
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
});

