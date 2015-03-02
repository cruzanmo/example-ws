'use strict';

var WebSocketServer = require('ws').Server
  , express = require('express')
  , app = express();

// Serve client JavaScript and HTML.
app.use(express.static(__dirname));
app.listen(8080, function () {
  console.log('Listening on port 8080.');
});

// Open WebSocket.
var wss = new WebSocketServer({
  port: 8000, 
  server: app
});
wss.on('connection', function(ws) {
  console.log('Connection open.');
  var message = 'Hi I am the server.';
  ws.send(message, function() {
    console.log('Message sent to client.');
  });
  ws.on('message', function(message) {
    console.log('Message received from client:', message);
    ws.send('Message received.');
  });
  ws.on('close', function() {
    console.log('Connection closed.');
  });
});