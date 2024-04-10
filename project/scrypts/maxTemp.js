const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&units=imperial&appid=4b4c6e4532fb6171e49d451cc6d556eb';
const currentWeather = document.querySelector(".currentWeather");
const weatherInfo = document.querySelector(".weatherInfo");
const forecast = document.querySelector(".forecast");


async function getTemp() {

    let response = await fetch(url);
    let data = await response.json();

    displayMaxTemp(data.list);
    displayTemp(data.list);
}

const displayMaxTemp = (data) => {

    let tempDiv = document.querySelector(".maxTemp");
    const maxTemp = data[0].main.temp_max;
    let p = document.createElement("p");
    p.textContent = `ALERT: The maximum temperature is ${maxTemp}`;
    tempDiv.appendChild(p);
}

/*Displaying the temperature for the weather section*/

const displayTemp = (data) => {
    
    const humidity = data[0].main.humidity;
    const currentDate = data[0].dt_txt;
    const currentTemp = data[0].main.temp;
    const currentDescription = data[0].weather[0].description;
    descriptionCap = currentDescription.charAt(0).toUpperCase() + currentDescription.slice(1);
    currentIcon = `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
    currentShortDate = monthAndDay(currentDate);

    /*Creating elements for the current weather*/

    dayDisplay = document.createElement('p');
    humidityDisplay = document.createElement('p');
    descriptionDisplay = document.createElement('p');
    imgDisplay = document.createElement('img');
    tempDisplay = document.createElement('p');

    /*populating elements for the current weather*/

    descriptionDisplay.innerHTML = `<b>Description:</b><br>${descriptionCap}`;
    humidityDisplay.innerHTML = `<b>Humidity:</b><br>${humidity}%`;
    dayDisplay.innerHTML = `<b>Date:</b><br>${currentShortDate}`;
    imgDisplay.setAttribute('src', currentIcon);
    imgDisplay.setAttribute('alt', 'Weather icon taken from api');
    tempDisplay.innerHTML = `<b>Temperature:</b><br>${currentTemp}°F`;

    /*Appending elements for the current weather*/

    currentWeather.appendChild(tempDisplay);
    currentWeather.appendChild(imgDisplay);
    
    weatherInfo.appendChild(dayDisplay);
    weatherInfo.appendChild(humidityDisplay);
    weatherInfo.appendChild(descriptionDisplay);

    /*Getting and displaying the weather of the next 4 days*/
    
    data.forEach(element => {

    
    const inputDate = element.dt_txt;
    const formattedDate = monthAndDay(inputDate);
    let hour = getHour(inputDate);

        if ((hour == 15) && (currentShortDate != formattedDate)) {
            temp = element.main.temp;
            weatherIcon = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;

            //Create Elements

            divDisplay = document.createElement('div');
            dayDisplay = document.createElement('p');
            imgDisplay = document.createElement('img');
            tempDisplay = document.createElement('p');

            //Setting attributes

            dayDisplay.textContent = formattedDate;
            imgDisplay.setAttribute('src', weatherIcon);
            imgDisplay.setAttribute('alt', 'Weather icon taken from api');
            tempDisplay.textContent = `${temp}°F`;

            //Display forecast

            forecast.appendChild(divDisplay);
            divDisplay.appendChild(dayDisplay);
            divDisplay.appendChild(imgDisplay);
            divDisplay.appendChild(tempDisplay);

        }
    })
    
}

function monthAndDay(dateString) {
    const [datePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const monthName = new Date(`${year}-${month}-01`).toLocaleString('default', { month: 'short' });

    return (`${monthName} ${day}`);
}

function getHour(dateString) {
    let hourString = new Date(dateString);
    let hour = hourString.getHours();
    return hour;
}

getTemp();