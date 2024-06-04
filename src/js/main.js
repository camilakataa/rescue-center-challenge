function adoptAPet() {
    window.location.href = "./src/pages/adoptables.html"
}

function back() {
    window.location.href = "../../index.html"
}

function viewSuccess() {
    window.location.href = "./src/pages/success.html"
}

const adoptModal = document.getElementById('apply-to-adopt');
const donateModal = document.getElementById('donation');
const dialogs = document.getElementsByClassName('dialogs');

function handlerAdoption() {
    adoptModal.showModal();
}

function handlerDonation() {
    donateModal.showModal();
}

function closeAdoptModal() {
    adoptModal.close();
}

function closeDonateModal() {
    donateModal.close();
}

adoptModal.addEventListener('click', (event) => {
    if (event.target == adoptModal) {
        adoptModal.close();
    }
})

donateModal.addEventListener('click', (event) => {
    if (event.target == donateModal) {
        donateModal.close();
    }
})

const regexEmail = /\S+@\S+\.\S+/;
const emailSubmit = document.getElementById('email-input');
const spanEmail = document.getElementById('submit-span');
const emailSubmitButton = document.getElementById('submit-email');

emailSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (regexEmail.test(emailSubmit.value)) {
        viewSuccess();
    } else {
        spanEmail.style.display = 'block';
    }
})

const inputsDonate = document.querySelectorAll('.donate-item');
const spansDonate = document.querySelectorAll('.donate-error');
const donationButton = document.getElementById('donate-modal-button');
let isValidEmail = false;
let isValidMoney = false;

donationButton.addEventListener('click', (e) => {
    e.preventDefault();
    emailDonationValidation();
    moneyDonationValidation();

    if (isValidEmail && isValidMoney) {
        viewSuccess()
    }
    
})

function setErrorDonate(index) {
    inputsDonate[index].style.border = '1px solid red';
    spansDonate[index].style.display = 'block';
}

function removeErrorDonate(index) {
    inputsDonate[index].style.border = '1px var(--purple-light) solid';
    spansDonate[index].style.display = 'none';
}

let emailDonationValidation = () => {
    if (regexEmail.test(inputsDonate[0].value)) {
        removeErrorDonate(0);
        isValidEmail = true;
    } else {
        setErrorDonate(0);
    }
}

let moneyDonationValidation = () => {
    if(Number(inputsDonate[1].value) > 0) {
        removeErrorDonate(1);
        isValidMoney = true;
    } else {
        setErrorDonate(1);
    }
}

const inputsAdopt = document.querySelectorAll('.adopt-item');
const spansAdopt = document.querySelectorAll('.adopt-error');
const adoptForm = document.getElementById('adoptForm');
const adoptButton = document.getElementById('wanna-adopt');

let isValidEmailAdopt = false;
let isValidName = false;

adoptForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isValidEmailAdopt && isValidName) { 
        viewSuccess()
    }
})

adoptButton.addEventListener('click', (e) => {
    emailAdoptionValidation();
    nameAdoptionValidation();
})

function setErrorAdopt(index) {
    inputsAdopt[index].style.border = '1px solid red';
    spansAdopt[index].style.display = 'block';
}

function removeErrorAdopt(index) {
    inputsAdopt[index].style.border = '1px var(--purple-light) solid';
    spansAdopt[index].style.display = 'none';
}

let emailAdoptionValidation = () => {
    if (regexEmail.test(inputsAdopt[0].value)) {
        removeErrorAdopt(0);
        isValidEmailAdopt = true;
    } else {
        setErrorAdopt(0);
    }
}

let nameAdoptionValidation = () => {
    if(inputsAdopt[1].value != '') {
        removeErrorAdopt(1);
        isValidName = true;
    } else {
        setErrorAdopt(1);
    }
}