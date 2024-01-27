const CopyYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();

document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedString;


let footer = document.getElementsByTagName('p')[2];
footer.innerHTML += ' © ' + CopyYear;

const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");
const map = document.querySelector("#map");

menuButton.addEventListener("click", () => {
	menuButton.classList.toggle('open');
    menu.classList.toggle("open");
    map.classList.toggle("notDisplayed");
});