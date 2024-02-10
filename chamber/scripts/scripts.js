const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menuOptions");

menuButton.addEventListener("click", () => {
	menuButton.classList.toggle('open');
    menu.classList.toggle("open");
    
});