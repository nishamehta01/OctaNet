document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.getElementById("todo-list");
    const addTodoBtn = document.getElementById("add-todo-btn");
    const newTodoInput = document.getElementById("new-todo");

    addTodoBtn.addEventListener("click", addTask);

    function addTask() {
        const taskText = newTodoInput.value.trim();
        if (taskText === "") return;

        const taskElement = createTaskElement(taskText);
        todoList.appendChild(taskElement);

        newTodoInput.value = "";
    }

    function createTaskElement(taskText) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const todoValue = document.createElement("input");
        todoValue.type = "text";
        todoValue.value = taskText;
        todoValue.classList.add("todo_value");
        todoValue.readOnly = true;

        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todo_checkbox");
        todoCheckbox.addEventListener("change", () => {
            if (todoCheckbox.checked) {
                todoValue.style.textDecoration = "line-through";
            } else {
                todoValue.style.textDecoration = "none";
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(todoDiv);
        });

        todoDiv.appendChild(todoCheckbox);
        todoDiv.appendChild(todoValue);
        todoDiv.appendChild(deleteBtn);

        return todoDiv;
    }
});
