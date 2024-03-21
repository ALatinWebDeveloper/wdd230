import { darkModePc, darkModeMobile, displayMenu, displayModified } from './scripts.js';

//Display the last modified date

const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();
displayModified(lastModifiedString);

//Display menu function

const menu = document.querySelector("#menuOptions");
const menuButton = document.querySelector("#menuButton");

menuButton.addEventListener("click", displayMenu);
menu.addEventListener("click", displayMenu);

//Darkmode Variables

const darkMode = document.querySelector("#darkMode");
const darkPcMode = document.querySelector("#darkPcMode");


darkMode.addEventListener("click", darkModeMobile);

darkPcMode.addEventListener("click", darkModePc);

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

//get the date when the form was submited


let date = document.querySelector("#date");
const joinDate = Date.now();
date.value = joinDate;