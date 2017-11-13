const express = require('express');
      router = express.Router();
      db = require('../models');

// LIST
router.get('/', (req, res) => {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err) {
    res.send(err);
  });
});

// CREATE
router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then(function(newTodo) {
    res.json(newTodo);
  })
  .catch(function(err) {
    res.send(err);
  });
});

// SHOW
router.get('/:todoId', (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo) {
    res.json(foundTodo);
  })
  .catch(function(err) {
    res.send(err);
  });
});

// UPDATE
router.put('/:todoId', (req, res) => {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(function(todo) {
    res.json(todo);
  })
  .catch(function(err) {
    res.send(err);
  });
})

module.exports = router;