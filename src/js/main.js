function adoptAPet() {
    window.location.href = "./src/pages/adoptables.html"
}

function back() {
    window.location.href = "../../index.html"
}

function viewSuccess() {
    window.location.href = "./src/pages/success.html"
}

let adoptModal = document.getElementById('apply-to-adopt');
let donateModal = document.getElementById('donation');

function handlerAdoption() {
    adoptModal.showModal();
}

function handlerDonation() {
    donateModal.showModal();
}

function closeAdoptModal() {
    adoptModal.close();
}

function cloaseDonateModal() {
    donateModal.close();
}