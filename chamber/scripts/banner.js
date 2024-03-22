const bannerImg = document.querySelector('#bannerDiv');
const closeBtn = document.querySelector('#close');
const todayDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = todayDate.getDay();

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

//Display banner depending on the day of the week

if (dayOfWeek >= 1 && dayOfWeek <= 3) {

    bannerImg.classList.add('show');
} else {
    // It's not Monday, Tuesday, or Wednesday
    bannerImg.classList.add('hidden');
}

//Close banner function

closeBtn.addEventListener("click", close);

function close() {


    bannerImg.classList.replace("show", "hidden");
}