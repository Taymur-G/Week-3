const aKey = document.getElementById("aKey")
const sKey = document.getElementById("sKey")
const dKey = document.getElementById("dKey")
const fKey = document.getElementById("fKey")
const gKey = document.getElementById("gKey")
const hKey = document.getElementById("hKey")
const jKey = document.getElementById("jKey")
const kKey = document.getElementById("kKey")
const lKey = document.getElementById("lKey")

aKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
});

sKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
});

dKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
});

fKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
});

gKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
});

hKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
});

jKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
});

kKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
});

lKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
});


document.addEventListener("keydown", (event) => {
    let keyPressed = event.which;
    if (keyPressed == 65) {
        document.getElementById("boom").pause();
        document.getElementById("boom").currentTime = 0;
        document.getElementById("boom").play();
    }
    else if (keyPressed == 83) {
        document.getElementById("clap").pause();
        document.getElementById("clap").currentTime = 0;
        document.getElementById("clap").play();
    }
    else if (keyPressed == 68) {
        document.getElementById("hihat").pause();
        document.getElementById("hihat").currentTime = 0;
        document.getElementById("hihat").play();
    }
    else if (keyPressed == 70) {
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
        document.getElementById("kick").play();
    }
    else if (keyPressed == 71) {
        document.getElementById("openhat").pause();
        document.getElementById("openhat").currentTime = 0;
        document.getElementById("openhat").play();
    }
    else if (keyPressed == 72) {
        document.getElementById("ride").pause();
        document.getElementById("ride").currentTime = 0;
        document.getElementById("ride").play();
    }
    else if (keyPressed == 74) {
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
        document.getElementById("snare").play();
    }
    else if (keyPressed == 75) {
        document.getElementById("tink").pause();
        document.getElementById("tink").currentTime = 0;
        document.getElementById("tink").play();
    }
    else if (keyPressed == 76) {
        document.getElementById("tom").pause();
        document.getElementById("tom").currentTime = 0;
        document.getElementById("tom").play();
    }
});