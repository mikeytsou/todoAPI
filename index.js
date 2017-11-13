const express = require('express');
      mongoose = require('mongoose');
      app = express();

// MONGO SETUP
const url = process.env.DATABASEURL || 'mongodb://localhost/todo_api';
mongoose.set('debug', true);
mongoose.connect(url);
mongoose.Promise = Promise;


app.listen(process.env.PORT || 3000, () => {
  console.log('CONNECTED TO PORT 3000');
});