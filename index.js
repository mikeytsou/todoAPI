const express = require('express');
      bodyParser = require('body-parser');
      app = express();

// ROUTES
      todoRoutes = require('./routes/todos');

// APP CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);


// SERVER
app.get('*', (req, res) => {
  res.send('PAGE NOT FOUND');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('CONNECTED TO PORT 3000');
});
