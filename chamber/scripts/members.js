//Darkmode Variables

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

//Get and display information of members

const membersInfo = "https://ALatinWebDeveloper.github.io/wdd230/chamber/data/members.json";
const membersDiv = document.querySelector("#members");

async function getMembers() {

    let response = await fetch(membersInfo);
    let data = await response.json();

    displayMembers(data);
};

const displayMembers = (members) => {

    members.members.forEach(member => {

        //Creating elements
        let section = document.createElement('section');
        let p = document.createElement('p');
        let address = document.createElement('p');
        let img = document.createElement('img');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');

        //Populating elements
        p.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;
        membership.textContent = member.membership;

        img.setAttribute('src', member.image);
        img.setAttribute('alt', `Profile picture of ${member.name}`);

        //Arming the card

        membersDiv.appendChild(section);
        section.appendChild(p);
        section.appendChild(img);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(membership);
    });
};

//Grid and List buttons

const gridBtn = document.querySelector('#btnGrid');
const listBtn = document.querySelector('#btnList');

listBtn.addEventListener('click', displayList);
gridBtn.addEventListener('click', displayGrid);

function displayList() {

    membersDiv.classList.replace("gridFormat", 'listFormat');
};

function displayGrid() {

    membersDiv.classList.replace("listFormat", 'gridFormat');
};

getMembers();