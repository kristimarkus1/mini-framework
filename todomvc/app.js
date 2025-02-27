const app = new MyFramework("app");
const state = new StateManager({ todos: [] });

function render() {
    const currentTodos = state.getState().todos;

    const vdom = app.createElement("div", {}, [
        app.createElement("h1", {}, ["To-Do"]),
        app.createElement("input", { id: "newTodo", type: "text", placeholder: "New todo..." }),
        app.createElement("button", { id: "addTodo" }, ["Add"]),
        app.createElement("ul", {}, currentTodos.map((todo, index) => 
            app.createElement("li", {}, [
                todo,
                app.createElement("button", { class: "deleteTodo", "data-index": index }, ["Delete"])
            ])
        ))
    ]);

    app.render(vdom);

    // Reattach event listeners after rendering
    document.getElementById("addTodo").addEventListener("click", () => {
        const newTodoInput = document.getElementById("newTodo");
        const newTodo = newTodoInput.value.trim();
        if (newTodo) {
            state.setState({ todos: [...currentTodos, newTodo] });
            newTodoInput.value = ""; // Clear input after adding
            render(); // Re-render the updated UI
        }
    });

    document.querySelectorAll(".deleteTodo").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("data-index"));
            const newTodos = [...state.getState().todos];
            newTodos.splice(index, 1);
            state.setState({ todos: newTodos });
            render();
        });
    });
}

document.addEventListener("DOMContentLoaded", render);
