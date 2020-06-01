var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const socketService = require('./socketService')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socketService(io, socket)
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});