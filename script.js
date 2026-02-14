const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 1;
let noSize = 1;

noBtn.addEventListener("click", () => {
    yesSize += 0.25;
    noSize -= 0.1;

    if (noSize < 0.3) noSize = 0.3;

    yesBtn.style.transform = `scale(${yesSize})`;
    noBtn.style.transform = `scale(${noSize})`;
});

yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";
});

/* ❤️ VÍC srdíček + hned start */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";

    const duration = Math.random() * 3 + 2; // 2–5 sekund
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// vytvoří hned při načtení hodně srdíček
for (let i = 0; i < 25; i++) {
    createHeart();
}

// pak generuje ještě víc průběžně
setInterval(createHeart, 120);
