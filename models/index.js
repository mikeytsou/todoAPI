const mongoose = require('mongoose');

// const url = process.env.DATABASEURL || 'mongodb://localhost/todo_api';
const url = process.env.DATABASEURL || 'mongodb://mtsou:todoapi@ds129776.mlab.com:29776/todo_api';
// mongodb://mtsou:todoapi@ds129776.mlab.com:29776/todo_api
mongoose.set('debug', true);
mongoose.connect(url);
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
