var server = require('http').createServer();

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
