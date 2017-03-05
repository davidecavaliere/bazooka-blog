/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var mongoose = require('mongoose');
var config = require('./config/environment');

console.log('config object', config);

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

var server = require('http').createServer();
var socketio = require('socket.io')(server, {
  serveClient: true,
  // path: '/socket.io-client',
  transports : ['websocket']
});

require('./config/socketio')(socketio);

// Start server
server.listen(config.port, '0.0.0.0', function () {
  console.info('Socket server listening on %d, in %s mode', config.port, config.mode);
});

// Expose app
exports = module.exports = server;
