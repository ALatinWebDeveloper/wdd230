//Initialize variables for the script
const spotlightSection = document.querySelector('.spotlights');
const link = "https://ALatinWebDeveloper.github.io/wdd230/chamber/data/members.json";

async function getMembers() {

    let response = await fetch(link);
    let data = await response.json();


    console.log(data.gold);
    displaySpotlight(data);
}

const displaySpotlight = (data) => {

    console.log(data.members[1].silver);

    // Generate three unique random numbers between 1 and 10 (inclusive)
    function generateUniqueRandomNumbers() {
        const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of numbers from 1 to 10
        const uniqueNumbers = [];

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length); // Generate a random index
            const randomNum = numbers.splice(randomIndex, 1)[0]; // Remove the selected number from the array
            uniqueNumbers.push(randomNum); // Add the selected number to the result
        }

        return uniqueNumbers;
    }

    // Call the function to get three unique random numbers
    const result = generateUniqueRandomNumbers();
    console.log(`Three unique random numbers: ${result}`);


    const dataLength = data.length;
    let index = Math.random(0, 10);

    //Create Elements
    div = document.createElement('div');
    img = document.createElement('img');
    h3 = document.createElement('h3');
    p = document.createElement('p');

    //Setting attributes of img
    img.setAttribute('src', data.image);
    img.setAttribute('alt', `Profile picture of ${data.name}`);

    //Appending elements
    spotlightSection.appendChild(div);
    div.appendChild(img);
    spotlightSection.appendChild(h3);
    spotlightSection.appendChild(p);


}

getMembers();