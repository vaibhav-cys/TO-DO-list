const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const newTodo = newTodoInput.value.trim();

  if (newTodo) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      todoItem.classList.toggle('completed');
    });

    const label = document.createElement('label');
    label.innerText = newTodo;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoList.appendChild(todoItem);

    newTodoInput.value = ''; // Clear input field
  }
});