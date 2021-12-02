const qKey = document.getElementById("qKey");

qKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})