const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Server started on port 3000');
});