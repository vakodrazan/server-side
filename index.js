console.log('Greetings from Node and index.js! 🙃');

// We need Express to act as our application server
const express = require('express');

// Let's create a new App
const app = express();

// We want express to run on this port
const port = 3000;

app.get('/', (request, response) => {
  console.log('Request: /');
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`app is running here: http://localhost:${port}`);
});