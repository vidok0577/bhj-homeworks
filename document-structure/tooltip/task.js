const tooltip = document.querySelectorAll(".has-tooltip");
let activeHint = 0;

tooltip.forEach((element) => {
    const newHint = document.createElement("div");
    newHint.textContent = element.title;
    newHint.classList.add("tooltip");
    element.after(newHint);
    element.addEventListener("click", (event) => {
        event.preventDefault();
        if (activeHint === event.target.nextSibling) {
            activeHint.classList.toggle("tooltip_active");
            return;
        }
        if (activeHint) activeHint.classList.remove("tooltip_active");
        hint = event.target.nextSibling;
        positionLeft = element.getBoundingClientRect().left;
        hint.style.cssText = `position: absolute; left: ${positionLeft}px`;
        // если position оставить фиксед как в css,
        // то при прокрутке окна, подсказка висит в воздухе
        hint.classList.add("tooltip_active");
        activeHint = hint;
    })
});
