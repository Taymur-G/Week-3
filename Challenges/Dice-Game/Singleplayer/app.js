const start = document.getElementById("start");
const retry = document.getElementById("retry");
const status = document.getElementById("status");
const won = document.getElementById("won");
const lose = document.getElementById("lose");
let count = 0;
let turns = 0;


start.addEventListener("click", () => {
    if (start.textContent == "Start Game") {
        status.textContent = "Game Started";
        start.textContent = "Roll";
        console.log("Game Started");
    }
});

start.addEventListener("click", () => {
    if (start.textContent == "Roll") {
        let score = document.getElementById("score");
        let img = document.getElementById("image");
        if (count < 20) {
            let result = parseInt((Math.random() * 6) + 1);
            console.log(`Player rolled a ${result}`);
            count += result;
            turns += 1;
            score.textContent = count;
            if (result == 1) {
                status.textContent = "You rolled a 1";
                img.src = "images/side-1.png";
                lose.style.display = 'block';
                start.textContent = "Retry";
                console.log("Player lost");
            }
            else if (result == 2) {
                status.textContent = "You rolled a 2";
                img.src = "images/side-2.png";
            }
            else if (result == 3) {
                status.textContent = "You rolled a 3";
                img.src = "images/side-2.png";
            }
            else if (result == 4) {
                status.textContent = "You rolled a 4";
                img.src = "images/side-4.png";
            }
            else if (result == 5) {
                status.textContent = "You rolled a 5";
                img.src = "images/side-5.png";
            }
            else if (result == 6) {
                status.textContent = "You rolled a 6";
                img.src = "images/side-6.png";
            }
        }
        else {
            won.style.display = 'block';
            console.log("Player Won!");
        }
    }
});

start.addEventListener("click", () => {
    if (start.textContent == "Retry") {
        let img = document.getElementById("image");
        start.textContent = "Start Game";
        status.textContent = "Awaiting for game to start...";
        score.textContent = 0;
        won.style.display = 'none';
        lose.style.display = 'none'
        img.src = '#';
        console.log("New Game Started");
    }
});