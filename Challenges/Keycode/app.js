const key = document.getElementById("key");
const which = document.getElementById("which");
const code = document.getElementById("code");
const h1Code = document.getElementById("h1Code")



document.addEventListener("keydown", (event) => {
    let keyOutput = event.key;
    let whichOutput = event.which;
    let codeOutput = event.code;
    h1Code.textContent = whichOutput;
    key.textContent = keyOutput;
    which.textContent = whichOutput;
    code.textContent = codeOutput;
    if (codeOutput == "Space") {
        h1Code.textContent = "Space";
        key.textContent = "Space";
    }
});