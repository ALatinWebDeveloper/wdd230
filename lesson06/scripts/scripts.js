const favchap = document.querySelector("#favchap");
const submitButton = document.querySelector("button");
const list = document.querySelector("#list");

chaptersArray = getChapterList() || [];

submitButton.addEventListener("click", function () {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	if (favchap.value != '') {



		displayList(favchap.value);
		chaptersArray.push(favchap.value);
		setChapterList();
		favchap.value = "";
		favchap.focus();
	}
	else {
		favchap.focus();
	};



	delBtn.addEventListener("click", function () {
		list.removeChild(li);
		favchap.focus();
		favchap.value = "";
	});
});

chaptersArray.forEach(chapter => {
	displayList(chapter);
});

function displayList(favchap) {
	li.textContent = favchap.value;
	delBtn.textContent = "❌";
	li.append(delBtn);
	list.append(li);
	favchap.focus();
	favchap.value = "";
};