document.addEventListener("DOMContentLoaded", () => {
    const state = new StateManager({ todos: JSON.parse(localStorage.getItem("todos")) || [] });

    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    const clearCompleted = document.getElementById("clear-completed");
    const filterButtons = document.querySelectorAll(".filter-button");
    const selectAllButton = document.getElementById("toggle-all");

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(state.getState().todos));
    }

    function renderTodos() {
        todoList.innerHTML = "";
        const todos = state.getState().todos;

        todos.forEach((todo, index) => {
            const listItem = document.createElement("div");
            listItem.className = `todo-item ${todo.completed ? "completed" : ""}`;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.classList.add("todo-checkbox");
            checkbox.addEventListener("change", () => {
                todos[index].completed = checkbox.checked;
                state.setState({ todos });
                saveTodos();
                updateFooter();
            });

            const text = document.createElement("span");
            text.textContent = todo.text;
            text.classList.add("todo-text");

            text.addEventListener("dblclick", () => {
                const input = document.createElement("input");
                input.type = "text";
                input.value = todo.text;
                input.classList.add("edit-input");

                input.addEventListener("blur", () => {
                    if (input.value.trim() !== "") {
                        todos[index].text = input.value;
                        state.setState({ todos });
                        saveTodos();
                        renderTodos();
                    }
                });

                listItem.replaceChild(input, text);
                input.focus();
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", () => {
                todos.splice(index, 1);
                state.setState({ todos });
                saveTodos();
                renderTodos();
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(text);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        });

        updateFooter();
    }

    function updateFooter() {
        const todos = state.getState().todos;
        const activeCount = todos.filter(todo => !todo.completed).length;
        document.getElementById("todo-count").textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;

        clearCompleted.style.display = todos.some(todo => todo.completed) ? "inline-block" : "none";
    }

    addButton.addEventListener("click", () => {
        if (todoInput.value.trim() !== "") {
            state.setState({ todos: [...state.getState().todos, { text: todoInput.value, completed: false }] });
            saveTodos();
            todoInput.value = "";
            renderTodos();
        }
    });

    clearCompleted.addEventListener("click", () => {
        state.setState({ todos: state.getState().todos.filter(todo => !todo.completed) });
        saveTodos();
        renderTodos();
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".filter-button.active").classList.remove("active");
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            const todos = state.getState().todos;
            todoList.childNodes.forEach((item, index) => {
                if (filter === "all" || (filter === "active" && !todos[index].completed) || (filter === "completed" && todos[index].completed)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    selectAllButton.addEventListener("click", () => {
        const todos = state.getState().todos;
        const allCompleted = todos.every(todo => todo.completed);
        todos.forEach(todo => (todo.completed = !allCompleted));
        state.setState({ todos });
        saveTodos();
        renderTodos();
    });

    renderTodos();
});
