const mongoose = require('mongoose');

const url = process.env.DATABASEURL || 'mongodb://localhost/todo_api';
mongoose.set('debug', true);
mongoose.connect(url);
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
