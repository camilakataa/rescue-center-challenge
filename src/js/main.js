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

