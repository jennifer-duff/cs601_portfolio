const form = document.forms["contact-form"];
const formWrapper = document.getElementById("form-wrapper");

form.addEventListener("submit", (event) => {
    // I've purposfully stopped form submission here, since this site is live 
    // and I don't want people to actuallyy be able to contact me
    event.preventDefault();
    formWrapper.innerHTML = "<p id='success-msg'>Thanks for your message!</p>"
});