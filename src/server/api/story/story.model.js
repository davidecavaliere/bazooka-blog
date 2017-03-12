'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var StorySchema = new Schema({
  title: String,
  body: String,
  user_id : { type : mongoose.Schema.Types.ObjectId, ref : 'User' },
  date : { type : Date, default: Date.now() }
});

/**
 * Validations
 */
//
// // Validate empty title
// StorySchema
//   .path('title')
//   .validate(function(title) {
//     return title.length;
//   }, 'Title cannot be blank');
//
// // Validate empty body
// StorySchema
//   .path('body')
//   .validate(function(body) {
//     return body.length;
//   }, 'Body cannot be blank');


/**
 * Pre-save hook
 */
// StorySchema
//   .pre('save', function(next) {
//   });


/**
 * Methods
 */
// StorySchema.methods = {
// };

module.exports = mongoose.model('Story', StorySchema);
