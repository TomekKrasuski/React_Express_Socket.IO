const express = require('express');
const app = express();

const io = require('socket.io')();

io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    console.log(`client is subscribing to timer with interval ${interval}`);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

app.get('/', (req, res) => {
  io.emit('test', new Date());
  res.sendStatus(200);
});

const api_port = 5000;
app.listen(api_port, () => {
  console.log(`API listening on port ${api_port}`);
});
const socket_port = 8000;
io.listen(socket_port);
console.log(`Listening on port ${socket_port}`);
