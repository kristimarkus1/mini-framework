# 🎀 Mini JavaScript Framework

## 📌 Introduction
This project is a **custom JavaScript framework** designed to handle:
- **Virtual DOM Rendering** 🎨
- **State Management** 🔄
- **Custom Event Handling** 🎭
- **Routing System** 🌍
- **TodoMVC Implementation** ✅

It follows the principles of modern JavaScript frameworks and allows users to build dynamic applications efficiently.

---

## 🚀 Features
### 🔹 1. Virtual DOM Rendering
Instead of directly modifying the DOM, this framework uses a **virtual DOM** to create elements and render them efficiently.

```js
const app = new MyFramework("app");
const vdom = app.createElement("h1", {}, ["Hello, World!"]);
app.render(vdom);
```
✅ **Expected Output:** A rendered `<h1>Hello, World!</h1>`

### 🔹 2. State Management
Manages global state and updates components efficiently.

```js
const state = new StateManager({ count: 0 });
state.subscribe(newState => console.log("Updated State:", newState));
state.setState({ count: 5 });
```
✅ **Expected Output:** Console logs state updates dynamically.

### 🔹 3. Event Handling
Custom event system that listens and triggers events.

```js
const events = new EventManager();
events.on("customEvent", data => console.log("Event triggered:", data));
events.trigger("customEvent", { message: "Hello!" });
```
✅ **Expected Output:** Console logs event messages.

### 🔹 4. Routing System
Manages **URL changes** and synchronizes state accordingly.

```js
const routes = {
    "/": () => "<h1>Home Page</h1>",
    "/about": () => "<h1>About Page</h1>",
    "/404": () => "<h1>Page Not Found</h1>"
};
new Router(routes);
```
✅ **Expected Output:** Navigating to `/#/about` shows `"About Page"`.

### 🔹 5. TodoMVC Example
Implements a **To-Do List App** with add & delete functionalities.

```js
// Adding a Todo
document.getElementById("addTodo").addEventListener("click", () => {
    const newTodo = document.getElementById("newTodo").value;
    state.setState({ todos: [...state.getState().todos, newTodo] });
    render();
});
```
✅ **Expected Output:** Users can add and delete todos dynamically.

---

## 📂 Project Structure
```
mini-framework/
│── framework/
│   ├── framework.js  
│   ├── router.js     
│   ├── state.js      
│   ├── events.js     
│── todomvc/          
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│── README.md   
```

---

## 🔥 How to Run
### 🖥️ 1. Open in Browser
Simply open `index.html` in any browser.

### 🛠️ 2. Test in Developer Console
To manually test features:
```js
const appTest = new MyFramework("app");
const vdom = appTest.createElement("h1", {}, ["Framework Test"]);
appTest.render(vdom);
```
### 🎯 3. Run TodoMVC
- Open `todomvc/index.html`
- Add & remove todos dynamically

---

## 🎨 Customization
### 🌸 Update Styles
Modify `styles.css` for a personalized UI.

### ⚙️ Extend Functionalities
Modify `framework.js` to add more features like:
- Components
- Async State Handling
- Advanced Event System

---

## 🏆 Conclusion
This mini-framework is designed for **learning & experimentation** with JavaScript **framework concepts**. If you find any issues or have ideas for improvements, feel free to modify and extend it! 🎉🚀

---

💖 **Happy Coding!** 😃

