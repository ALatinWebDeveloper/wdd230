const bannerImg = document.querySelector('#bannerDiv');
const closeBtn = document.querySelector('#close');
const todayDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = todayDate.getDay();


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


if (dayOfWeek >= 1 && dayOfWeek <= 3) {

    bannerImg.classList.add('show');
} else {
    // It's not Monday, Tuesday, or Wednesday
    console.log('Today is not one of the specified days.');
}

closeBtn.addEventListener('click', close);

function close() {

    console.log('log');
    bannerImg.classList.replace("show", 'hidden');
}