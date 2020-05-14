const express = require('express');

//create the server
const app = express();
const port = process.env.PORT || 4003;


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/pages.html', (request, response) => {
  response.sendFile(__dirname + '/pages.html');
});

app.get('/admin.html', (request, response) => {
  response.sendFile(__dirname + '/admin.html');
});

app.get('/scripts/service.js', (request, response) => {
  response.sendFile(__dirname + '/scripts/service.js');
});

app.get('/scripts/configuration.js', (request, response) => {
  response.sendFile(__dirname + '/scripts/configuration.js');
});

// start the server
app.listen(port, () => console.log('Listening on port ' + port));
