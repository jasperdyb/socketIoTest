module.exports = (io, socket) => {
  // console.log(socket)
  socket.on('chat', (msg) => {
    console.log('socketService', msg)
    io.emit('chat', msg);
  });
}