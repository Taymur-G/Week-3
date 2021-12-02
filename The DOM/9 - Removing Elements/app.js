const input = document.getElementById("input");
const submit = document.getElementById("submit");
const remove = document.getElementById("remove");

submit.addEventListener("click", () => {
    let list = document.getElementsByTagName("ul")[0];
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
});

remove.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    let list = document.getElementsByTagName("ul")[0];
    list.removeChild(lastItem);
})