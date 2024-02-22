const CopyYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();
const darkMode = document.querySelector("#darkMode");
const darkPcMode = document.querySelector("#darkPcMode");
const main = document.querySelector('main');
const footer = document.querySelector('footer');

document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedString;

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