document
  .getElementById("confetti-button")
  .addEventListener("click", createConfetti);

function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  const confettiCount = 100;
  const colors = ["#ff0", "#f0f", "#0ff", "#ff00ff", "#00ffff"];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
    confetti.style.setProperty("--y", `${Math.random() * 200 + 200}px`);
    confetti.style.setProperty("--r", `${Math.random() * 360}deg`);
    confettiContainer.appendChild(confetti);

    // Remove confetti after animation is complete
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}
