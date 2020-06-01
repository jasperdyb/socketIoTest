module.exports = (io, socket) => {
  // console.log(socket)
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
}