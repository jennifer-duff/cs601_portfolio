const form = document.forms["contact-form"];
const formWrapper = document.getElementById("form-wrapper");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formWrapper.innerHTML = "<p id='success-msg'>Thanks for your message!</p>"
});