const input = document.getElementById("input");
const button = document.getElementById("showhide-btn");
const submit = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
});

button.addEventListener("click", () => {
    let list = document.getElementsByTagName("ul")[0];
    if (list.style.display != 'none') {
        list.style.display = 'block';
        button.textContent = "Show"
    }
    else if (list.style.display == 'block') {
        list.style.display = 'none';
        button.textContent = "Hide"
    }
});