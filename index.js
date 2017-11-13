const express = require('express');
      app = express();

// ROUTES
      todoRoutes = require('./routes/todos');

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('hello from root route');
});

app.get('*', (req, res) => {
  res.send('PAGE NOT FOUND');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('CONNECTED TO PORT 3000');
});
