const CopyYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();

document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedString;

const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menuOptions");

menuButton.addEventListener("click", () => {
	menuButton.classList.toggle('open');
    menu.classList.toggle("open");
    
});