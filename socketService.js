module.exports = (io, socket) => {
  // console.log(socket)
  socket.on('chat message', (msg) => {
    console.log(msg)
    io.emit('chat message', msg);
  });
}