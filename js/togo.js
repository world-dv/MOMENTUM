const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.id = "todoBtn";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

