import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function testData(value) {
  socket.on('test', timestamp => value(null, timestamp));
}
export { subscribeToTimer, testData };
