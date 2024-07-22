const form = document.getElementsByTagName("input")[0];
const tasksList = document.querySelector(".tasks__list");
const btn = document.getElementById("tasks__add");

btn.addEventListener("click", action);

function action(event) {
    event.preventDefault();
    const textInput = document.getElementById("task__input").value;
    if (textInput.trim()) createTask(textInput);
    form.value = "";
}

function createTask(textTask) {
    tasksList.insertAdjacentHTML('beforeend', `
        <div class="task">
          <div class="task__title">
            ${textTask}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    const task = tasksList.lastElementChild;
    task.lastElementChild.addEventListener("click", (event) => {
        event.target.closest("div.task").remove();
    });
}