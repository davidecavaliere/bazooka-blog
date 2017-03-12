'use strict';

var Story = require('./story.model');
var mongoose = require('mongoose');

exports.register = function(socket) {

  socket.on('story:index', () => {
    // var userId = mongoose.Types.ObjectId(socket.user._id);
    // console.log('userid', userId);
    Story.find({ }, function(err, stories) {
      if (err) {
        console.error('story:save:error:moongose', err);
        return socket.emit('story:save:error', err);
      }
      console.log('found stories', stories);
      socket.emit('story:index', stories);
    })
  });

  socket.on('story:save', (story) => {

    story.user_id = socket.user._id;
    console.log('saving story', story);

    Story.create(story, function(err, document) {
      if (err) {
        console.error('story:save:error:moongose', err);
        return socket.emit('story:save:error', err);
      }

      console.log('new story created', document);
      socket.emit('story:save', document);
    });

  });

}
