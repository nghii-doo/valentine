document.addEventListener("DOMContentLoaded", function () {
    const text = "p/s: I'm not a weatherman, but every time I'm with you, there's a 100% chance of me getting wet";
    let index = 0;
    const typingElement = document.querySelector(".typed-text");
    const gif = document.getElementById("gif");
    const video = document.getElementById("loveVideo");
    const caption = document.querySelector(".caption");

    gif.addEventListener("click", function () {
        gif.style.display = "none"; 
        caption.style.display = "none"; 
        video.style.display = "block"; 
    });

    // Typing effect
    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text[index];
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    // Floating hearts effect
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
});
