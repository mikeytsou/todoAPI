const express = require('express');
      router = express.Router();
      db = require('../models');

router.get('/', (req, res) => {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err) {
    res.send(err);
  });
});

router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then(function(newTodo) {
    res.json(newTodo);
  })
  .catch(function(err) {
    res.send(err);
  });
});

module.exports = router;