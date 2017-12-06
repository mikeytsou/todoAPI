$(document).ready(function() {
  getTodos();
  postTodos();
  deleteTodos();
  updateTodos();
});

const getTodos = function() {
  $.getJSON('/api/todos')
  .then(addTodos)
  .catch(function(error) {
    console.log('ERROR: ', error);
  });
}

const postTodos = function() {
  $('#todoInput').keypress(function(event) {
    if(event.which === 13 && $(this).val() != '') {
      createTodo();
    }
  });
}

const deleteTodos = function() {
  $('.list').on('click', 'span', function(event) {
    event.stopPropagation();
    let todo = $(this).parent();

    deleteTodo(todo);
  });
}

const updateTodos = function() {
  $('.list').on('click', 'li', function() {
    let todo = $(this);

    updateTodo(todo);
  });
}

// HELPERS

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  let newTodo = $(`<li class="task">${todo.description}<span>X</span></li>`);
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);

  if(todo.completed) {
    newTodo.addClass('done');
  }

  $('.list').append(newTodo);
}

function createTodo() {
  let userInput = $('#todoInput').val();

  $.post('/api/todos', {description: userInput})
  .then(function(newTodo) {
    $('#todoInput').val('');
    addTodo(newTodo);
  })
  .catch(function(error) {
    console.log('ERROR: ', error)
  });
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

function updateTodo(todo) {
  let clickedTodo = todo.data('id');
  let isCompleted = !todo.data('completed');
  let updateData = {completed: isCompleted}

  $.ajax({
    url: `/api/todos/${clickedTodo}`,
    type: 'PUT',
    data: updateData
  })
  .done(function(updatedTodo) {
    todo.toggleClass('done');
    todo.data('completed', isCompleted);
  })
  .catch(function(error) {
    console.log('ERROR: ', error);
  });
}