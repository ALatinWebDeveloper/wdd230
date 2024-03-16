//Get and display information of members

const membersInfo = "https://ALatinWebDeveloper.github.io/wdd230/chamber/data/members.json";
const membersDiv = document.querySelector("#members");

async function getMembers() {

    response = await fetch(membersInfo);
    data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {

    console.table(members);
}

getMembers();