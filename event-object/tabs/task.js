const tabs = Array.from(document.getElementsByClassName("tab"));
const tabsContent = Array.from(document.getElementsByClassName("tab__content"));

let active = 0;

tabs.forEach((element, index) => {
    element.addEventListener("click", clickTab);
});

function clickTab() {
    tabs[active].classList.remove("tab_active");
    tabsContent[active].classList.remove("tab__content_active");
    active = tabs.indexOf(this);
    tabs[active].classList.add("tab_active");
    tabsContent[active].classList.add("tab__content_active");
}