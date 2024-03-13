//Show and hide the tiers of the Join form

const membership = document.querySelectorAll('input[type="radio"]');
let tier = document.querySelectorAll('.membTier');
let message = document.querySelector(".tierMessage");

membership.forEach(element => {
    element.addEventListener('change', () => {
        if (element.value == 'np') {

            message.classList.replace('show', 'hidden');
            tier[0].classList.replace('hidden', 'show');

            tier[1].classList.replace('show', 'hidden');
            tier[2].classList.replace('show', 'hidden');
            tier[3].classList.replace('show', 'hidden');

        } else if (element.value == 'bronze') {

            message.classList.replace('show', 'hidden');
            tier[1].classList.replace('hidden', 'show');

            tier[0].classList.replace('show', 'hidden');
            tier[2].classList.replace('show', 'hidden');
            tier[3].classList.replace('show', 'hidden');

        } else if (element.value == 'silver') {

            message.classList.replace('show', 'hidden');
            tier[2].classList.replace('hidden', 'show');

            tier[0].classList.replace('show', 'hidden');
            tier[1].classList.replace('show', 'hidden');
            tier[3].classList.replace('show', 'hidden');

        } else if (element.value == 'gold') {

            message.classList.replace('show', 'hidden');
            tier[3].classList.replace('hidden', 'show');

            tier[1].classList.replace('show', 'hidden');
            tier[2].classList.replace('show', 'hidden');
            tier[0].classList.replace('show', 'hidden');
        }
    });
});

//DarkMode

const darkMode = document.querySelector("#darkMode");
const darkPcMode = document.querySelector("#darkPcMode");
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menuOptions");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle('open');
    menu.classList.toggle("open");

});

darkMode.addEventListener("click", () => {
    main.classList.toggle("dark");
    footer.classList.toggle("dark");
});

darkPcMode.addEventListener("click", () => {
    main.classList.toggle("dark");
    footer.classList.toggle("dark");
});

//get the date when the form was submited


let date = document.querySelector("#date");
const joinDate = Date.now();
date.value = joinDate;