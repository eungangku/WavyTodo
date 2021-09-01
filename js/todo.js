const todoForm = document.querySelector("#todo-form");
const todoUl = document.querySelector("#todo-ul");

let todos = []

function saveToLocal(todos) {
    const stringTodoObj = JSON.stringify(todos);
    localStorage.setItem("todos", stringTodoObj);
}

function deleteTodo(event) {
    const parentLi = event.path[1];
    const parentLiId = parentLi.id;
    console.log(parentLiId);
    todos = todos.filter((item) => {
        return parseInt(parentLiId) !== item.id;
    });
    parentLi.remove();
    saveToLocal(todos);
}

function addTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    // const button = document.createElement("button");
    span.addEventListener("click", deleteTodo);
    // button.innerText = "❌";
    span.innerText = newTodoObj.text;

    li.appendChild(span);
    // li.appendChild(button);
    todoUl.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = event.target[0].value;

    // Todo localstorage 저장
    const nowDate = new Date;
    const time = nowDate.getTime();
    const newTodoObj = {
        id: time,
        text: newTodo,
    }
    event.target[0].value = "";

    addTodo(newTodoObj); // paint todo
    todos.push(newTodoObj); // todos array에 추가
    saveToLocal(todos); // localStorage 저장
}

todoForm.addEventListener("submit", handleTodoSubmit);

function init() {
    const getTodosStr = localStorage.getItem("todos");
    const getTodosArray = JSON.parse(getTodosStr);

    getTodosArray.forEach((item) => {
        addTodo(item);
        todos.push(item);
    });
}

init();