import "./styles.css";

const app = document.querySelector(".app");

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const nav = document.createElement("nav");
nav.className = "nav";

const navList = document.createElement("ul");
navList.className = "nav__list";

links.forEach((link) => {
  const item = document.createElement("li");
  item.className = "nav__item";

  const anchor = document.createElement("a");
  anchor.className = "nav__link";
  anchor.href = link.href;
  anchor.textContent = link.label;

  item.appendChild(anchor);
  navList.appendChild(item);
});

nav.appendChild(navList);
app.prepend(nav);

if ("loading" in HTMLImageElement) {
  document.querySelectorAll("img[data-src]").forEach((img) => {
    img.addEventListener("load", () => {
      img.classList.add("img--loaded");
    });
    img.src = img.dataset.src;
  });
} else {
  document.querySelectorAll("img[data-src]").forEach((img) => {
    img.addEventListener("error", () => {
      img.classList.add("img--error");
    });
    img.src = img.dataset.src;
  });
}
