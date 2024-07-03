const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.getElementsByClassName("dropdown__item");

dropdownValue.addEventListener("click", () => dropdownList.classList.add("dropdown__list_active"));

Array.from(dropdownItem).forEach((el) => el.onclick = clickMenuItem);

function clickMenuItem() {
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.toggle("dropdown__list_active");
    return false;
}