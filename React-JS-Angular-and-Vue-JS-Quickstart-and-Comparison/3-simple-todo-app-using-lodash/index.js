// => Logs the number of milliseconds it took for the deferred invocation.
_.defer(function(stamp) {
    console.log(`number of milliseconds it took for the deferred invocation ${_.now() - stamp}`);
  }, _.now());

console.log(_.now());

let inputEl = $('input');
let buttonEl = $('button');
let ulEl = $('ul');

let todos = [];
buttonEl.click(addTodo);

function addTodo() {
    let userInput = inputEl.val();
    if (userInput.trim() == '') {
        return;
    }
    console.log('User input value: ' + userInput);
    let newTodo = initNewTopo(userInput)
    todos.push(newTodo);
    
    // let todoLi = createLiTodo(userInput);
    $('<li>' + userInput + '</li>')
        .appendTo(ulEl)
        .attr('dataset-id', newTodo.id)
        .click(removeTodo);

    pointBackToInput();
}

function initNewTopo(userInput) {
    return {
        id: _.uniqueId(),
        value: userInput
    };
}

function pointBackToInput() {
    inputEl.focus();
    inputEl.val('');
}

function removeTodo(event) {
    let clickedLi = $(this);
    let clickedLiId = clickedLi.attr('dataset-id');
    console.log(clickedLiId);
    for (let i = 0; i < todos.length; i++) {
        if (todos[i]['id']== clickedLiId) {
            todos.splice(i, 1);
            break;
        }
    }
    console.log(todos);
    clickedLi.remove();
}