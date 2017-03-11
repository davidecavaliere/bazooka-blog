'use strict';

var Story = require('./story.model');

exports.register = function(socket) {
  socket.on('story:save', (story) => {
    console.log('saving new story', story);

    Story.findOneAndUpdate({ _id : story._id }, story, {
      upsert : true,
      new : true
    }, function(err, _story) {
      if (err) {
        console.error('story:save:error:moongose', err);
        socket.emit('story:save:error', err);
      }
      if (!story) {
        console.log('story:save', 'cannot find story');
        socket.emit('story:save:error', { error : 'cannot find story'});
      } else {

        console.log('story found', _story);

        socket.emit('story:save', _story);
      }

    })

  });

}
