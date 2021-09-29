// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameInput = document.querySelector('.name');

let lastNameInput = document.querySelector('.lastName');
let emailInput = document.querySelector('.email');
let addressInput = document.querySelector('.address');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

let errCharName = document.querySelector('.errCharName');
let errLettersLastName = document.querySelector('.errLettersLastName');
let errCharLastName = document.querySelector('.errCharLastName');
let errCharPhone = document.querySelector('.errCharPhone');
let errEmail = document.querySelector('.errCharEmail');
let errCharAddress = document.querySelector('.errCharAddress');

// Exercise 9
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    let validFirstNameLength = false;
    let validFirstNameMatch = false;

    let validLastNameLength = false;
    let validLastNameMatch = false;

        //Name
            //Check character number to be at least 3
    if( nameInput.value.length < 3 ){
        errCharName.classList.add('invalid')
        errCharName.classList.remove('valid')
        validFirstNameLength = false;
        console.log("length unvalid");
    }else{
        errCharName.classList.remove('invalid')
        errCharName.classList.add('valid')
        validFirstNameLength = true;
        console.log("length valid");
    }
            //Check that the input value has only letters
    if( nameInput.value.match(/[^a-zA-Z]/g)){
        errorName.style.display = "block";
        validFirstNameMatch = false;
        console.log("char unvalid");

    }else{
        errorName.style.display = "none";
        validFirstNameMatch = true;
        console.log("char valid");

    }
            //colors the input text or field when the 2 conditions are true
    if(validFirstNameLength === true && validFirstNameMatch === true){
        nameInput.classList.remove('inputErr')
        nameInput.classList.add('inputVal')
        console.log("valid");

    }else{
        nameInput.classList.add('inputErr')
        nameInput.classList.remove('inputVal')
        console.log("unvalid");
    }


        //Last Name
            //Check character number to be at least 3
    if( lastNameInput.value.length < 3 ){
        errCharLastName.classList.add('invalid')
        errCharLastName.classList.remove('valid')
        validLastNameLength = false;

    }else{
        errCharLastName.classList.remove('invalid')
        errCharLastName.classList.add('valid')
        validLastNameLength = true;

    }
            //Check that the input value has only letters        
    if( lastNameInput.value.match(/[^a-zA-Z]/g)){
        errLettersLastName.classList.add('invalid')
        errLettersLastName.classList.remove('valid')
        validLastNameMatch = false;
    }else{
         errLettersLastName.classList.remove('invalid')
         errLettersLastName.classList.add('valid')
         validLastNameMatch = true;
    }

            //colors the input text or field when the 2 conditions are true
    if(validLastNameLength === true && validLastNameMatch === true){
        lastNameInput.classList.remove('inputErr')
        lastNameInput.classList.add('inputVal')
        console.log("valid");

    }else{
        lastNameInput.classList.add('inputErr')
        lastNameInput.classList.remove('inputVal')
        console.log("unvalid");
    }



        //Phone Number
            //Check character number to be at least 3, since it's demanded by the exercice but never gets into play because the next condition is more strict, I have it here disabled
    // if( phone.value.length < 3 ){
    //     errCharPhone.classList.add('invalid')
    //     errCharPhone.classList.remove('valid')
    // }else{
    //     errCharPhone.classList.remove('invalid')
    //     errCharPhone.classList.add('valid')
    // }
            //Check that the input value has only letters
    if( phone.value.match(/^[6-8][0-9]{8}$/)){
        errorPhone.style.display = "none";
        phone.classList.remove('inputErr')
        phone.classList.add('inputVal')
    }else{
        errorPhone.style.display = "block";
        phone.classList.add('inputErr')
        phone.classList.remove('inputVal')
    }
    
    
        //Password
    if( password.value.match(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{3,}$/)){
        errorPassword.style.display = "none";
        password.classList.remove('inputErr')
        password.classList.add('inputVal')
    }else{
        errorPassword.style.display = "block";
        password.classList.add('inputErr')
        password.classList.remove('inputVal')
    }


        //Email
    if( emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        errEmail.style.display = "none";
        emailInput.classList.remove('inputErr')
        emailInput.classList.add('inputVal')
    }else{
        errEmail.style.display = "block";
        emailInput.classList.add('inputErr')
        emailInput.classList.remove('inputVal')
    }
    

        //Address
            //Check character number to be at least 3
    if( addressInput.value.length < 3 ){
        errCharAddress.classList.add('invalid')
        errCharAddress.classList.remove('valid')
        addressInput.classList.add('inputErr')
        addressInput.classList.remove('inputVal')

    }else{
        errCharAddress.classList.remove('invalid')
        errCharAddress.classList.add('valid')
        addressInput.classList.remove('inputErr')
        addressInput.classList.add('inputVal')

    }
}

document.querySelector(".form").addEventListener("keyup", validate);