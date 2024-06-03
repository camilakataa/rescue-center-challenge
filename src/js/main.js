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

function setError(index) {
    inputsDonate[index].style.border = '1px solid red';
    spansDonate[index].style.display = 'block';
}

function removeError(index) {
    inputsDonate[index].style.border = '1px var(--purple-light) solid';
    spansDonate[index].style.display = 'none';
}

let emailDonationValidation = () => {
    if (regexEmail.test(inputsDonate[0].value)) {
        removeError(0);
        isValidEmail = true;
    } else {
        setError(0);
    }
}

let moneyDonationValidation = () => {
    if(Number(inputsDonate[1].value) > 0) {
        removeError(1);
        isValidMoney = true;
    } else {
        setError(1);
    }
}