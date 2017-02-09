var server = require('http').createServer();

var io = require('socket.io')(server);
io.on('connection', client => {
  console.log('client');
});

server.listen(3003);
