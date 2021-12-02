const myHeading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    myHeading.style.color = input.value;
    input.value = "";
});