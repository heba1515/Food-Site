let form = document.querySelector("form");
let ganEmail = document.querySelector('#Email');
let password = document.querySelector('#password');

let ganEmailR = /^[a-z][\w\d_.]+(@gmail\.com)$/;
let passwordR = /^[a-zA-Z0-9._\-\\$*%#+\/()@]{6,10}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ganEmailV = ganEmail.value;
    let passwordV = password.value;

    let validEmail = ganEmailR.test(ganEmailV);
    let validPass = passwordR.test(passwordV);

    if (validEmail && validPass) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = "../htmlPages/home.html"; 
        }, 1500);

        ganEmail.value = "";
        password.value = "";
    } else {
        let errorMsg = "Invalid Email or Password!";
        if (!validEmail) {
            errorMsg = "Please enter a valid Gmail address.";
        } else if (!validPass) {
            errorMsg = "Password must be 6-10 characters long.";
        }

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMsg,
        });
    }
});
