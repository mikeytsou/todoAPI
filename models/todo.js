const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: 'Name cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
