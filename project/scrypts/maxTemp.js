const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&units=imperial&appid=4b4c6e4532fb6171e49d451cc6d556eb';

async function getTemp() {

    let response = await fetch(url);
    let data = await response.json();

    displayTemp(data.list);
}

const displayTemp = (data) => {

    let tempDiv = document.querySelector(".maxTemp");
    const maxTemp = data[0].main.temp_max;
    let p = document.createElement("p");
    p.textContent = `ALERT: The maximum temperature is ${maxTemp}`;
    tempDiv.appendChild(p);
}

getTemp();