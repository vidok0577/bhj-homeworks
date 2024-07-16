const form = document.getElementsByTagName("input")[0];
const tasksList = document.getElementById("tasks__list");
const btn = document.getElementById("tasks__add");

btn.addEventListener("click", action);

form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") action(event);
    });

function action(event) {
    event.preventDefault();
    textInput = document.getElementById("task__input").value;
    if (textInput) createTask(textInput);
    form.value = "";
}

function createTask(textTask) {
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const taskRemove = document.createElement("a");

    outerDiv.classList.add("task");

    innerDiv.classList.add("task__title");
    innerDiv.textContent = textTask;

    taskRemove.setAttribute("href", "#");
    taskRemove.classList.add("task__remove");
    taskRemove.innerHTML = `&times;`;
    taskRemove.addEventListener("click", (event) => {
        event.target.closest("div.task").remove();
    })
    
    outerDiv.append(innerDiv, taskRemove);
    tasksList.append(outerDiv);
}