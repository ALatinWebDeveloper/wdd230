const favchap = document.querySelector("#favchap");
const submitButton = document.querySelector("button");
const list = document.querySelector("#list");

submitButton.addEventListener("click", function (){
    const li = document.createElement("li");
	const delBtn = document.createElement("button");
	if (favchap.value != '') {

		li.textContent = favchap.value;
		delBtn.textContent = "❌";
		li.append(delBtn);
		list.append(li);
        favchap.focus();
        favchap.value = "";
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

