const baseURL = "https://ALatinWebDeveloper.github.io/wdd230/";
const linksURL = "https://ALatinWebDeveloper.github.io/wdd230/data/links.json";
const card = document.querySelector(".card");

async function getLinks() {

    response = await fetch(linksURL);
    data = await response.json();

    displayLinks(data);
}

const displayLinks = (weeks) => {

    ul = document.createElement("ul");
    //create elements
    console.table(weeks);
    weeks.lessons.forEach((week) => {
        li = document.createElement("li");

        //populating elements

        week.links.forEach(link => {

            a = document.createElement("a");
            a.setAttribute("href", link.url);

            console.table(link);

            a.textContent = `${link.title} - `;

            card.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(a);
        });
    });

}

getLinks();