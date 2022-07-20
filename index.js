const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    msg: 'Testing Stackblits.com',
    version: '1.0.0',
    developer: 'Aaron Mineen',
  });
});

app.listen(3000, () => console.log(`http://localhost:3000`));
