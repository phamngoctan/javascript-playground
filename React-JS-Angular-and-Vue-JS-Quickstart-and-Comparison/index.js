let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
let ulEl = document.querySelector('ul');

let todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    let userInput = inputEl.value;
    if (userInput.trim() == '') {
        return;
    }
    console.log('User input value: ' + userInput);
    let newTodo = {
        id: Math.random(),
        value: userInput
    }
    todos.push(newTodo);
    
    let todoLi = createLiTodo();
    todoLi.textContent = userInput;
    todoLi.dataset.id = newTodo.id;

    ulEl.appendChild(todoLi);
    pointBackToInput();
}

function createLiTodo() {
    let todoLi = document.createElement('li');
    todoLi.addEventListener('click', removeTodo);
    return todoLi;
}

function pointBackToInput() {
    inputEl.focus();
    inputEl.value = '';
}

function removeTodo(event) {
    let clickedLi = event.target;
    let clickedLiId = clickedLi.dataset.id;
    console.log(clickedLiId);
    todos.forEach((todo, i) => {
        if (todo.id == clickedLiId) {
            todos.splice(i, 1);
            break;
        }
    })
    console.log(todos);
    clickedLi.parentNode.removeChild(clickedLi);
}