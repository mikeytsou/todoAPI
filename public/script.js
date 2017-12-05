$(document).ready(function() {
  getTodos();
  postTodos();
  deleteTodos();
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

const deleteTodos = function() {
  $('.list').on('click', 'span', function() {
    let todo = $(this).parent();

    deleteTodo(todo);
  });
}

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  let newTodo = $(`<li class="task">${todo.description}<span>X</span></li>`);
  newTodo.data('id', todo._id);

  if(todo.completed) {
    newTodo.addClass('done')
  }

  $('.list').append(newTodo);
}

function deleteTodo(todo) {
  let clickedTodo = todo.data('id');

  $.ajax({
    url: `/api/todos/${clickedTodo}`,
    type: 'DELETE'
  })
  .done(function(data) {
    todo.remove();
  })
  .catch(function(error) {
    console.log('ERROR: ', error);
  });
}