let windChill = document.querySelector("#windChill");

let speed = 15;
let temperature = 20;
let resultado = 35.74 + 0.6215 * temperature - 35.75 * (speed ** 0.16) + 0.4275 * temperature * (speed ** 0.16);
resultado = resultado.toFixed(2);

if (speed >= 3.0 && temperature <= 50) {
    windChill.innerHTML = `${resultado} 🌬️❄️`;
} else {
    windChill.innerHTML = "N/A 🌬️❄️";
}

//weather script

const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const city = document.querySelector('.city');
const date = document.querySelector('#date');
const each = document.querySelector('.each');
const currentDate = document.querySelector('#currentDate');
const currentDescription = document.querySelector('#currentDescription');
const currentIcon = document.querySelector('#currentIcon');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=7.47&lon=-61.89&units=imperial&appid=4b4c6e4532fb6171e49d451cc6d556eb';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    i = 0;
    data.list.forEach(element => {

        let iconSrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
        const inputDate = data.list[i].dt_txt;
        const formattedDate = extractMonthAndDay(inputDate);

        function extractMonthAndDay(dateString) {
            const [datePart] = dateString.split(' ');
            const [year, month, day] = datePart.split('-');
            const monthName = new Date(`${year}-${month}-01`).toLocaleString('default', { month: 'short' });
            return (`${monthName} ${day}`);
        }

        if (i <= 7) {

            iconSrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;

            currentDate.textContent = formattedDate;
            currentIcon.setAttribute('src', iconSrc);
            currentDescription.textContent = element.weather[0].description;
            currentTemp.textContent = `${data.list[i].main.temp}°F`;

            i = i + 8;

        } else if (i <= 28 && i >= 7) {
            
            iconSrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;

            //Create Elements
            divDisplay = document.createElement('div');
            dayDisplay = document.createElement('p');
            imgDisplay = document.createElement('img');
            tempDisplay = document.createElement('p');
            

            //Set attributes


            dayDisplay.textContent = formattedDate;
            imgDisplay.setAttribute('src', iconSrc);
            tempDisplay.textContent = `${data.list[i].main.temp}°F`;


            //Display


            each.appendChild(divDisplay);
            divDisplay.appendChild(dayDisplay);
            divDisplay.appendChild(imgDisplay);
            divDisplay.appendChild(tempDisplay);

            i = i + 7;
        }
    });

    city.textContent = `${data.city.name}, ${data.city.country}`;
}

apiFetch();