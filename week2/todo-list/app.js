const input = document.getElementById("todo-input");
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const savedTodos = localStorage.getItem('todos');

let todos = [];

function render() {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.innerText = todo.text;
        if (todo.done) {
            li.classList.add('done');
        } else {
            li.classList.remove('done');
        }

        li.addEventListener('click', () => doneCheck(todo.id));

        const delBtn = document.createElement('button');
        delBtn.innerText = '삭제';
        delBtn.classList.add('delete-btn');

        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
        });

        li.appendChild(delBtn);
        todoList.appendChild(li);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const text = input.value;

    if (text === '') return;

    const newTodo = {
        id: Date.now(),
        text: text,
        done: false
    };

    todos.push(newTodo);
    render();
    input.value = '';
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}

function doneCheck(id) {
    todos = todos.map((todo) => {
        if (todo.id === id) return {...todo, done: !todo.done}
        else return todo;
    });
    render();
}

if (savedTodos) {
    todos = JSON.parse(savedTodos);
    render();
}

addBtn.addEventListener('click', addTodo);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});