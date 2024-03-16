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
    //console.table(weeks);
    weeks.lessons.forEach((week) => {
        li = document.createElement("li");

        li.textContent = `${week.lesson}. `;

        //populating elements
        length = week.links.length;
        lengthCounter = 0;

        week.links.forEach(link => {

            a = document.createElement("a");
            a.setAttribute("href", link.url);



            if (length != 1) {
                a.textContent = `${link.title} | `;
                
                if (lengthCounter != 0 ){ 
                    a.textContent = `${link.title}`;  
                }
            } else {
                a.textContent = `${link.title}`;
            }

            lengthCounter += 1;

            card.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(a);
        });
    });

}

getLinks();