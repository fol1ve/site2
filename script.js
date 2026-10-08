const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

// Мобильное меню

if (menuButton && nav) {
menuButton.addEventListener("click", () => {
nav.classList.toggle("open");
document.body.classList.toggle("menu-open");
});
}

// Закрытие мобильного меню после перехода

document.querySelectorAll(".nav a").forEach(link => {
link.addEventListener("click", () => {
if (nav) {
nav.classList.remove("open");
}

```
    document.body.classList.remove("menu-open");
});
```

});

// Фильтрация меню

const categoryButtons = document.querySelectorAll(".category");
const menuCards = document.querySelectorAll(".menu-card");

categoryButtons.forEach(button => {

```
button.addEventListener("click", () => {

    categoryButtons.forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    menuCards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }

    });

});
```

});

// Кнопки "Добавить"

const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(button => {

```
button.addEventListener("click", () => {

    if (button.classList.contains("added")) {

        button.classList.remove("added");
        button.textContent = "Добавить";

    } else {

        button.classList.add("added");
        button.textContent = "Добавлено ✓";

    }

});
```

});

// Закрытие мобильного меню при переходе на ПК

window.addEventListener("resize", () => {

```
if (window.innerWidth > 800) {

    if (nav) {
        nav.classList.remove("open");
    }

    document.body.classList.remove("menu-open");

}
```

});

// Плавная прокрутка

document.querySelectorAll('a[href^="#"]').forEach(link => {

```
link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
        return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
        return;
    }

    event.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});
```

});
