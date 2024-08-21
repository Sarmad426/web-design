// Title switching

// Switching title
window.addEventListener("blur", () => {
  document.title = "Come back";
});
// Reverting it back to original title
window.addEventListener("focus", () => {
  document.title = "Color theme";
});

const theme = localStorage.getItem("theme");

if (theme === "dark") {
  const darkButton = document.querySelector(".dark");
  darkButton.remove();
} else {
  const lightButton = document.querySelector(".light");
  lightButton.remove();
}

const button = document.querySelector("button");

button.onclick = () => {
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  window.location.reload();
};

/* Theme toggling */

// Setting the default theme
if (!theme) localStorage.setItem("theme", "light");

if (theme === "dark") {
  document.body.className = "dark";
  document.body.classList.remove("light");
} else {
  document.body.className = "light";
  document.body.classList.remove("dark");
}
