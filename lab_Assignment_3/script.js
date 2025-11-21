const add_button = document.querySelector('.add_button');
const input_field = document.querySelector('.input_element');
const todo_list = document.querySelector('.list');
const all_button = document.querySelector('#ALL_button');
const active_button = document.querySelector('#ACTIVE_button');
const completed_button = document.querySelector('#COMPLETED_button');

add_button.addEventListener('click', add_tolist);
all_button.addEventListener('click', showAll);
active_button.addEventListener('click', showActive);
completed_button.addEventListener('click', showCompleted);

let todo_ArrayList = [];


function render_TodoList(filter = "all") {
    todo_list.innerHTML = '';

    for (let i = 0; i < todo_ArrayList.length; i++) {
        const todo = todo_ArrayList[i];

        // Apply filter condition
        if (filter === "active" && todo.completed) continue;
        if (filter === "completed" && !todo.completed) continue;

        let div = document.createElement('div');
        div.classList.add('todo-item');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function() {
            todo_ArrayList[i].completed = checkbox.checked;
            render_TodoList(filter); // re-render same filter
        });
        div.appendChild(checkbox);

        let li = document.createElement('li');
        li.textContent = todo.input;

        if (todo.completed) {
            li.style.textDecoration = 'line-through';
            li.style.color = 'gray';
        } else {
            li.style.textDecoration = 'none';
            li.style.color = 'black';
        }

        let remove_button = document.createElement('button');
        remove_button.textContent = "REMOVE";
        remove_button.addEventListener('click', remove_item(i));

        div.appendChild(li);
        div.appendChild(remove_button);
        todo_list.appendChild(div);
    }
}


function remove_item(index) {
    return function() {
        todo_ArrayList.splice(index, 1);
        render_TodoList(); // refresh full list after removal
    };
}


function add_tolist() {
    let new_todo = input_field.value.trim();
    if (new_todo === '') return;
    todo_ArrayList.push({ input: new_todo, completed: false });
    render_TodoList();
    input_field.value = '';
}


//  Filtered views
function showAll() {
    render_TodoList("all");
}

function showActive() {
    render_TodoList("active");
}

function showCompleted() {
    render_TodoList("completed");
}
