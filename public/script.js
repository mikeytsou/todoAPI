$(document).ready(function() {
  getTodos();
  postTodos();
});

const getTodos = function() {
  $.getJSON('/api/todos')
  .then(addTodos)
  .catch(function(error) {
    console.log('ERROR: ', error);
  })
}

const postTodos = function() {
  $('#todoInput').keypress(function(event) {
    if(event.which === 13) {
      createTodo();
    }
  });

  function createTodo() {
    let userInput = $('#todoInput').val();

    $.post('/api/todos', {description: userInput})
    .then(function(newTodo) {
      $('#todoInput').val('');
      addTodo(newTodo);
    })
    .catch(function(error) {
      console.log('ERROR: ', error)
    })
  }
}

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  let newTodo = $(`<li class="task">${todo.description}</li>`);

  if(todo.completed) {
    newTodo.addClass('done')
  }

  $('.list').append(newTodo);
}