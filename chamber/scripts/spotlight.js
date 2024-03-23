//Initialize variables for the script
const spotlightSection = document.querySelector('.spotlights');
const baseUrl = 'https://ALatinWebDeveloper.github.io/wdd230/';
const link = "https://ALatinWebDeveloper.github.io/wdd230/chamber/data/members.json";

async function getMembers() {

    const response = await fetch(link);

    if (response.ok) {
        data = await response.json();

        displaySpotlight(data.members);
    }


}

const displaySpotlight = (data) => {

    const validMembers = data.filter((member) => member.membership_level === "Gold" || member.membership_level === "Silver");

    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * validMembers.length);

        //Create Elements
        div = document.createElement('div');
        logo = document.createElement('img');
        companyName = document.createElement('h3');
        description = document.createElement('p');
        quota = document.createElement('p');

        //Setting attributes of elements
        logo.setAttribute('src', data[randomIndex].image);
        logo.setAttribute('alt', `Profile picture of ${data[randomIndex].name}`);

        companyName.textContent = data[randomIndex].name;
        description.textContent = data[randomIndex].description;
        quota.textContent = data[randomIndex].quota;

        //Appending elements
        spotlightSection.appendChild(div);
        div.appendChild(logo);
        div.appendChild(companyName);
        div.appendChild(description);

    }




}

getMembers();