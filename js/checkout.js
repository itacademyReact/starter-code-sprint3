// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.name');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var lastName = document.querySelector('.last-name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorLastName = document.getElementById('errorLastName');  
var errorAddress = document.getElementById('errorAddress');  
var errorEmail = document.getElementById('errorEmail');  

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    this.validateField(this.password, this.errorPassword, 'password');
    this.validateField(this.phone, this.errorPhone, 'onlyNumbers');
    this.validateField(this.firstName, this.errorName, 'onlyCharts');
    this.validateField(this.lastName, this.errorLastName, 'onlyCharts');
    this.validateField(this.email, this.errorEmail, 'email');
    this.validateField(this.address, this.errorAddress);
}

function validateField(fild, fildMessage, typeExtraValidate) {
    var isInvalid = false;
    if (!fild.value) {
        isInvalid = true;
        fildMessage.innerHTML = 'Camp obligatori';
    }
    if (fild.value && fild.value.length < 3) {
        isInvalid = true;
        fildMessage.innerHTML = 'Ha de tenir almenys 3 caràcters.';
    } else if (fild.value) {
        fildMessage.classList = [];
        fild.style.border = 'none';
    }
    if (fild.value && typeExtraValidate === 'onlyNumbers') {
        if (!parseInt(fild.value)) {
            isInvalid = true;
            fildMessage.innerHTML = 'El telèfon ha de contenir només números.';
        }
    }
    if (fild.value && typeExtraValidate === 'onlyCharts') {
        if (parseInt(fild.value)) {
            isInvalid = true;
            fildMessage.innerHTML = 'El nom i cognoms han de contenir només lletres.';
        }
    }
    if (fild.value && typeExtraValidate === 'password') {
        let hasNumber = false;
        let hasChart = false;
        fild.value.split('').forEach(element => {
            if (parseInt(element)) {
                hasNumber = true;
            } else {
                hasChart = true;
            }
        });
        if (!hasNumber || !hasChart) {
            isInvalid = true;
            fildMessage.innerHTML = "La contrasenya ha d'incloure números i lletres.";
        }
    }
    if (fild.value && typeExtraValidate === 'email') {
        if (!fild.value.includes('@') || !fild.value.includes('.')) {
            isInvalid = true;
            fildMessage.innerHTML = "L'email ha de tenir format d'email.";
        }
    }
    if (isInvalid) {
        fildMessage.classList = ['display-error-message'];
        fild.style.border = 'solid 1px red';
    }
}
