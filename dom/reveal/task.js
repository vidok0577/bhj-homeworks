const reveal = document.querySelectorAll(".reveal");

document.addEventListener("scroll", () => {
    reveal.forEach((el) => {
        if (isVisible(el)) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    })
})

function isVisible(element) {
    const {top, bottom} = element.getBoundingClientRect()
    if (top < 0) {
        return false;
    }
    if (bottom > window.innerHeight) {
        return false;
    }
    return true;
}