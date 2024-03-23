//Initialize variables for the script
const spotlightSection = document.querySelector('.spotlights');
const baseUrl = 'https://ALatinWebDeveloper.github.io/wdd230/';
const link = "https://ALatinWebDeveloper.github.io/wdd230/chamber/data/members.json";

//Call the api and store the data as a json format in a variable named DATA
async function getMembers() {

    const response = await fetch(link);

    if (response.ok) {
        data = await response.json();

        displaySpotlight(data.members);
    }


}

// Shuffle the valid members so the diplay members would not repeat
function shuffleMembers(validMembers) {
    for (let i = validMembers.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        [validMembers[i], validMembers[randomNumber]] = [validMembers[randomNumber], validMembers[i]];
    }
    return validMembers;
}

const displaySpotlight = (data) => {

    //Filter the api for the members that have a membership level of Gold or Silver
    const validMembers = data.filter((member) => member.membership_level === "Gold" || member.membership_level === "Silver");

    //Store the random members so to use them as an index to search the necessary information in the api
    const randomMembers = shuffleMembers(validMembers).slice(0, 3);

    for (let i = 0; i < 3; i++) {

        //Create Elements
        div = document.createElement('div');
        logo = document.createElement('img');
        companyName = document.createElement('h3');
        description = document.createElement('p');
        quote = document.createElement('p');

        //Setting attributes of elements
        logo.setAttribute('src', randomMembers[i].image);
        logo.setAttribute('alt', `Profile picture of ${randomMembers[i].name}`);

        div.classList.add('member');

        companyName.textContent = randomMembers[i].name;
        description.textContent = randomMembers[i].description;
        quote.textContent = randomMembers[i].quote;


        //Appending elements
        spotlightSection.appendChild(div);
        div.appendChild(logo);
        div.appendChild(companyName);
        div.appendChild(description);
        div.appendChild(quote);

    }

}

getMembers();