fpassword = document.querySelector('#pasword');
spassword = document.querySelector('#paswordConf');
alertText = document.querySelector("#alert");
rate = document.querySelector('#rate');

spassword.addEventListener("focusout", validatePassword);

function validatePassword() {

    console.log(fpassword.value);
    console.log(spassword.value);

    if (fpassword.value !== spassword.value) {

        fpassword.classList.toggle('notSimilar');
        spassword.classList.toggle('notSimilar');
        alertText.classList.replace("hide", "show");
        
        spassword.value = "";
    } else if (fpassword.value == spassword.value) {
        alertText.classList.replace("show", "hide");
    }
}

rating.addEventListener('change', displayRatingValue);
rating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rate.innerHTML = rating.value;
}