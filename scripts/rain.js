document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain");
    const dropCount = 300;

    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.style.left = Math.random() * 100 + "vw"; 
        drop.style.animationDelay = Math.random() * 2 + "s"; 
        drop.style.animationDuration = 0.5 + Math.random() * 1 + "s"; 
        rainContainer.appendChild(drop);
    }
});