const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

// Do not use app.listen(); instead, export the app
module.exports = app;
