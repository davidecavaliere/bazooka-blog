
// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
  console.info('CONNECTED', socket.id);

  // Insert sockets below
require('../api/user/user.socket').register(socket);
require('../api/story/story.socket').register(socket);

}


module.exports = function (socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.handshake.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function (socket) {

    console.log('query', socket.handshake.query.user);

    socket.user = socket.handshake.query.user;

    console.log('user', socket.user);


    socket.address = socket.handshake.address !== null ?
            socket.handshake.address.address + ':' + socket.handshake.address.port :
            process.env.DOMAIN;

    socket.connectedAt = new Date();

    // Call onDisconnect.
    socket.on('disconnect', function () {
      onDisconnect(socket);
      console.info('[%s] DISCONNECTED', socket.id);
    });

    // Call onConnect.
    onConnect(socket);


  });
};


/*

var User = require('./api/user/user.model')

function* itemsGenerator(n = 0) {

  let item = {
    title : `title ${n}`,
    date : new Date(),
    text  : `body ${n}`,
  }

  if (n === 0) return item;

  yield item;
  yield* itemsGenerator(--n);

}

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bazooka-dev');
var db = mongoose.connection;

db.on('error', (err) => {
  console.log('error connecting with db');
});

db.once('open', () => {
  console.log('connected to db');
});

var io = require('socket.io')(server);
io.on('connection', socket => {
  console.log('client conneted: ', socket.id);


  socket.on('stories:list', () => {
    console.log('got stories:list event');
    let items = [];
    let itemsFactory = itemsGenerator(5);
    let i = itemsFactory.next();

    while (!i.done) {

      items.push(i.value);
      i = itemsFactory.next();
    }
    console.log('stories fetched', items);

    socket.emit('stories:listed', items);
  });
});

server.listen(3003);
 */
