import "./styles.css";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

function syncThemeToggle() {
  const isLight = root.getAttribute("data-theme") === "light";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme",
  );
}

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // localStorage can be unavailable (e.g. private mode); fail gracefully.
  }
  syncThemeToggle();
});

syncThemeToggle();
