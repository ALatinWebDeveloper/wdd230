//Copyright and Last Visit date VARIABLES
const CopyYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();

export function displayCopyYear() {
    let copyrightYear = document.createElement('p');
    let footer = document.querySelector("footer");
    footer.appendChild(copyrightYear);
    copyrightYear.innerHTML += ' © ' + CopyYear;
}

export function displayModified(lastModifiedString) {
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedString;
};

displayModified(lastModifiedString);
displayCopyYear();

//Menu display button

const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menuOptions");

menuButton.addEventListener("click", displayMenu);

export function displayMenu() {

    menuButton.classList.toggle('open');
    menu.classList.toggle("open");
};

//Darkmode Variables

const darkMode = document.querySelector("#darkMode");
const darkPcMode = document.querySelector("#darkPcMode");
const body = document.querySelector('body');
const footer = document.querySelector('footer');

darkMode.addEventListener("click", darkModeMobile);

export function darkModeMobile() {

    body.classList.toggle("dark");
    footer.classList.toggle("dark");

    let members = document.querySelectorAll('section');


    members.forEach(member => {

        member.classList.toggle('darkMember');
    });
};

darkPcMode.addEventListener("click", darkModePc);

export function darkModePc() {

    body.classList.toggle("dark");
    footer.classList.toggle("dark");

    let members = document.querySelectorAll('section');


    members.forEach(member => {

        member.classList.toggle('darkMember');
    });
};

// Number of visits

const message = document.querySelector("#message");
const msToDays = 84600000;
let twoDays = msToDays * 2;

let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
let nbrVisits = Number(window.localStorage.getItem("nbrVisits-ls")) || 0;

let diff = (Date.now() - lastVisit);

if (nbrVisits == 0) {

    message.textContent = "Welcome! Let us know if you have any questions.";

} else if (diff < msToDays) {

    //message.textContent = "Back so soon! Awesome!";

}

else {
    daysAgo = ((Date.now() / msToDays) - lastVisit).toFixed(0);

    if ((diff > msToDays) && (diff < twoDays)) {
        diff = diff / msToDays;
        message.textContent = `You last visited ${diff.toFixed(0)} day ago`;
    } else {
        diff = diff / msToDays;
        message.textContent = `You last visited ${diff.toFixed(0)} days ago`;
    }
}

nbrVisits++;

lastVisit = Date.now();


localStorage.setItem("nbrVisits-ls", nbrVisits);
localStorage.setItem("lastVisit-ls", lastVisit);