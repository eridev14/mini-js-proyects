const _email_inp = document.querySelector(".email__input");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const _email_check = document.querySelector(".email__check");
const _email__valid = document.querySelector(".email__validation");

_email_inp.addEventListener("input", (e) => {
    let text = e.target.value;

    if (text.match(emailRegex)) {
        _email__valid.textContent = "Your Email Address is valid.";
        _email__valid.style.color = "#9bff3d";
        _email_check.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`;
        _email_check.style.color = "#9bff3d";
    } else {
        _email__valid.textContent = "Please Enter Valid Email Address.";
        _email__valid.style.color = "#ff3d3d";
        _email_check.innerHTML = `<ion-icon name="close-circle-outline"></ion-icon>`;
        _email_check.style.color = "#ff3d3d";
    }

    if (text === "") {
        _email__valid.textContent = "Please Enter Email.";
        _email__valid.style.color = "rgb(61, 200, 255)";
        _email_check.innerHTML = ``;
    }
});