//Darkmode Variables

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

//Get and display information of members

const membersInfo = "https://ALatinWebDeveloper.github.io/wdd230/chamber/data/members.json";
const membersDiv = document.querySelector("#members");

async function getMembers() {

    response = await fetch(membersInfo);
    data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {

    members.members.forEach(member => {

        //Creating elements
        section = document.createElement('section');
        p = document.createElement('p');
        address = document.createElement('p');
        img = document.createElement('img');
        phone = document.createElement('p');
        website = document.createElement('p');
        membership = document.createElement('p');

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
}

//Grid and List buttons

const gridBtn = document.querySelector('#btnGrid');
const listBtn = document.querySelector('#btnList');

listBtn.addEventListener('click', displayList);
gridBtn.addEventListener('click', displayGrid);

function displayList() {

    membersDiv.classList.replace("gridFormat", 'listFormat');
}

function displayGrid() {

    membersDiv.classList.replace("listFormat", 'gridFormat');
}

getMembers();