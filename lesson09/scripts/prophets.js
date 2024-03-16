const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    response = await fetch(url);
    data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        //create the elements
        card = document.createElement('section');
        fullName = document.createElement('h2');
        portrait = document.createElement('img');
        birth = document.createElement('p');
        death = document.createElement('p');

        //populating elements
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.name} prophet`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        birth.innerHTML = `<b>Born:</b> ${prophet.birthdate}`;

        if (prophet.death != null) {
            death.innerHTML = `<b>Deceased:</b> ${prophet.death}`;
        } else {
            death.innerHTML = `<b>Deceased:</b> N/A`;
        }
        

        

        //appending elements
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birth);
        card.appendChild(death);

        cards.appendChild(card);
    });
}

getProphetData();