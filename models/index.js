const mongoose = require('mongoose');

// 'mongodb://localhost/todo_api';
// 'mongodb://mtsou:todoapi@ds129776.mlab.com:29776/todo_api';
const url = process.env.DATABASEURL;
mongoose.set('debug', true);
mongoose.connect(url);
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
