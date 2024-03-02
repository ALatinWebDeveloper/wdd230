const CopyYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();

document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedString;

//Set copyright Year
let copyrightYear = document.createElement('p');
let footer = document.querySelector("footer");
footer.appendChild(copyrightYear);
copyrightYear.innerHTML += ' © ' + CopyYear;

const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");
const map = document.querySelector("#map");
map.html

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle('open');
    menu.classList.toggle("open");
    map.classList.toggle("notDisplayed");
});

const section = document.createElement('section');
const h3 = document.createElement('h3');
h3.textContent = 'Relief Society';

section.appendChild(h3);

// Number of visits

const visitDisplay = document.querySelector(".visits");
let nbrVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (nbrVisits != 0) {
    visitDisplay.textContent = nbrVisits;
} else {
    visitDisplay.textContent = `This is your first visit. 🥳 Thank you!`;
}

nbrVisits++;

localStorage.setItem("nbrVisits-ls", nbrVisits);