var server = require('http').createServer();
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

  socket.on('auth:login', (credentials) => {
    console.log('trying login');
    console.log(credentials);
    // console.log('socket', socket);
    // TODO: check credentials and get User from db


    socket.emit('auth:login', credentials);
  });

  socket.on('auth:logout', user => {
    console.log('logging user out', user);
    socket.emit('auth:logout');
  });

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
