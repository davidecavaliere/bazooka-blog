var mongoose = require('mongoose');

var User = mongoose.Schema({
  name : String,
  role : { type : String, default : 'guest' }
});
