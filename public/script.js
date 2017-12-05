$(document).ready(function() {
  getTodos();
});

const getTodos = function() {
  $.getJSON('/api/todos')
  .then(addTodos)
  .catch()

  function addTodos(todos) {
    todos.forEach(function(todo) {
      let newTodo = $(`<li class="task">${todo.description}</li>`);

      if(todo.completed) {
        newTodo.addClass('done')
      }

      $('.list').append(newTodo);
    });
  }
}