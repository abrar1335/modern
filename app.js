//navigation
const toggle = document.getElementById('toggle');
const cancel = document.getElementById('cancel');
const navlink =document.getElementById('navlink');

toggle.addEventListener('click', () => {
    navlink.style.right = '0px';
    toggle.style.display = 'none';
    cancel.style.display = 'unset'
});

cancel.addEventListener('click', () => {
    navlink.style.right = '-300px';
    cancel.style.display = 'none';
    toggle.style.display = 'unset'
});



function hideButtonsOnWidth() {
    if (window.innerWidth >= 769) {
        toggle.style.display = 'none';
        cancel.style.display = 'none';
    } else {
        toggle.style.display = 'unset'; // या 'block' यदि आप इसे डिफ़ॉल्ट रूप से दिखाना चाहते हैं
        cancel.style.display = 'none';  // अगर आप इसे दिखाना चाहते हैं तो इसे भी unset कर सकते हैं
    }
}

// Initial check
hideButtonsOnWidth();

// Check on window resize
window.addEventListener('resize', hideButtonsOnWidth);




// slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};
let refreshInterval = setInterval(()=> {next.click()}, 3000);   
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
};

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
});
window.onresize = function(event) {
    reloadSlider();
};


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');

    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('msg');

    const nameError = document.getElementById('name_error');
    const numberError = document.getElementById('number_error');
    const emailError = document.getElementById('email_error');
    const msgError = document.getElementById('msg_error');

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

    function validateMsg() {
        const msgValue = msgInput.value.trim();

        if (msgValue === "") {
            msgError.textContent = "Message cannot be empty";
            msgError.style.display = "block";
            return false;
        } else {
            msgError.style.display = "none";
            return true;
        }
    }

    form.addEventListener('submit', function(e) {
        const isNameValid = validateName();
        const isNumberValid = validateNumber();
        const isEmailValid = validateEmail();
        const isMsgValid = validateMsg();

        if (isNameValid && isNumberValid && isEmailValid && isMsgValid) {
            // Form is valid
            alert("message send successfully!");
            // Optionally handle form submission (e.g., send data to server)
        } else {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });

    nameInput.addEventListener('input', validateName);
    numberInput.addEventListener('input', validateNumber);
    emailInput.addEventListener('input', validateEmail);
    msgInput.addEventListener('input', validateMsg);
});

