const CopyYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleDateString();

document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedString;


let footer = document.getElementsByTagName('p')[2];
footer.innerHTML += ' © ' + CopyYear;