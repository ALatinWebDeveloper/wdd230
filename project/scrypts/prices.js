const url = "https://ALatinWebDeveloper.github.io/wdd230/project/data/prices.json";
const table = document.querySelector("#pricetbl");

async function getPrices() {

    let response = await fetch(url);
    let data = await response.json();

    displayPrices(data);
}

const displayPrices = (data) => {

    console.table(data);
}

getPrices();