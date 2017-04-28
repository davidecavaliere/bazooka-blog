'use strict';

var User = require('./user.model');

exports.register = function(socket) {
  socket.on('auth:login', (credentials) => {
    console.log('trying login', credentials);
    // console.log('socket', socket);
    // TODO: check credentials and get User from db



    User.findOne({ email : credentials.email }, function(err, user) {
      if (err) {
        console.error('auth:login:error:moongose', err);
        socket.emit('auth:login:error', err);
      }
      if (!user) {
        console.log('auth:login', 'wrong email');
        socket.emit('auth:login:error', { error : 'auth error'});
      } else {

        console.log('user found', user);

        var allow = false;

        if (credentials.password) {
          allow = user.authenticate(credentials.password);
        } else {
          allow = true;

          // TODO check loggedIn
          // if (user.loggedIn) {
          //
          // } else {
          //   socket.emit('auth:login:error', {error : 'auth error'})
          // }
        }

        if (allow) {
          socket.user = user;
          user.lastLoggedIn = new Date();
          user.save();
          User.findOne({ _id : user._id }, '-hashedPassword -salt', function(err, doc) {
            // shouldn't get error here
            socket.emit('auth:login', doc);
          })
        } else {
          console.log('auth:login:error:invalid-password');
          socket.emit('auth:login:error', {error : 'auth error'})
        }


      }

    })

  });

  socket.on('auth:logout', user => {
    console.log('logging user out', user);
    socket.emit('auth:logout');
  });

}
