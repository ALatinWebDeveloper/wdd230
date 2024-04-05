//Menu display button

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", displayMenu);

export function displayMenu() {
    const menuOpenImg = document.querySelector(".shown");
    const menuCloseImg = document.querySelector(".hidden");

    
    menuOpenImg.classList.replace('shown', 'hidden');
    menuCloseImg.classList.replace('hidden', 'shown');
    menu.classList.toggle('hidden');
};