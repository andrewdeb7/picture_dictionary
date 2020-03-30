const express = require('express');

//create the server
const app = express();
const port = process.env.PORT || 4003;


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// start the server
app.listen(port, () => console.log('Listening on port ' + port));
