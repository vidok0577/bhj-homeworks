const content = document.querySelector(".book__content");
const fs = document.querySelector(".book__controls");

fs.onclick = change;

const dictProperty = {
    "font-size": ["font-size_", document.querySelector(".font-size_active")],
    "color": ["color_", document.querySelector('[class*="text_color_"]', ".color_active")],
    "background": ["color_", document.querySelector('[class*="bg_color_"]', ".color_active")]};

const dictBookProperty = {"font-size": "book_fs-", "color": "book_color-", "background": "book_bg-"};


function change() {
    event.preventDefault();
    const el =  event.target;
    if (el.nodeName === "A") {
        prop = dictProperty[dictKey = el.closest("div").classList.value.split("_").at(-1)];
        prop[1].classList.remove(prop[0] + "active");
        prop[1] = el;
        prop[1].classList.add(prop[0] + "active");
        changeClassList(dictBookProperty[dictKey],  Object.values(el.dataset)[0]);
    }
}

function changeClassList(classString, dataset) {
    for (let index = 0; index < content.classList.length; index++) {
        if (content.classList[index].includes(classString)) {
            content.classList.remove(content.classList[index]);
            break;
        }
    }
    if (dataset !== undefined) content.classList.add(classString + dataset);
}