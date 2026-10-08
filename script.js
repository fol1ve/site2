const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section[id]");

/* MOBILE MENU */

menuButton.addEventListener("click", () => {
nav.classList.toggle("open");
document.body.classList.toggle("menu-open");
});

navLinks.forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("open");
document.body.classList.remove("menu-open");
});
});

/* ACTIVE NAVIGATION */

function updateActiveLink() {
let currentSection = "";

```
sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionBottom
    ) {
        currentSection = section.id;
    }
});

navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
    }
});
```

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

/* HEADER BACKGROUND */

const header = document.querySelector(".header");

function updateHeader() {
if (window.scrollY > 30) {
header.style.background = "rgba(12, 12, 12, 0.94)";
} else {
header.style.background = "rgba(12, 12, 12, 0.8)";
}
}

window.addEventListener("scroll", updateHeader);

/* CLOSE MOBILE MENU WHEN RESIZING */

window.addEventListener("resize", () => {
if (window.innerWidth > 800) {
nav.classList.remove("open");
document.body.classList.remove("menu-open");
}
});

/* PROJECT HOVER */

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

```
project.addEventListener("mouseenter", () => {
    project.style.zIndex = "2";
});

project.addEventListener("mouseleave", () => {
    project.style.zIndex = "1";
});
```

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

```
anchor.addEventListener("click", function(event) {

    const target = document.querySelector(
        this.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});
```

});
