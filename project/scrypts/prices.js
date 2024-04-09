const url = "https://ALatinWebDeveloper.github.io/wdd230/project/data/pricing.json";
const tbody = document.querySelector("tbody");

async function getPrices() {

    let response = await fetch(url);
    let data = await response.json();

    displayPrices(data.rentalTypes);
}

const displayPrices = (data) => {

    
    /*Creating the variables necessary*/

    data.forEach(rentalData => {
        
        let tr = document.createElement("tr");
        let rentalType = document.createElement("td");
        let capacity = document.createElement("td");

        let reservHalfDay = document.createElement("td");
        let reservFullDay = document.createElement("td");

        let WalkInHalfDay = document.createElement("td");
        let WalkInFullDay = document.createElement("td");

        /*Populating elements*/

        rentalType.textContent = rentalData.vehicle;
        capacity.textContent = rentalData.capacity;
        reservHalfDay.textContent = rentalData.halfDay.reservation;
        reservFullDay.textContent = rentalData.fullDay.reservation;
        WalkInHalfDay.textContent = rentalData.halfDay.walkIn;
        WalkInFullDay.textContent = rentalData.fullDay.walkIn;

        /*Appending elements*/

        tbody.appendChild(tr);
        tbody.appendChild(rentalType);
        tbody.appendChild(capacity);
        tbody.appendChild(reservHalfDay);
        tbody.appendChild(reservFullDay);
        tbody.appendChild(WalkInHalfDay);
        tbody.appendChild(WalkInFullDay);
    });

}

getPrices();