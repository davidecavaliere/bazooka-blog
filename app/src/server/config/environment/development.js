'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mode : 'development',
  mongo : {
    uri : 'mongodb://localhost/bazooka-dev'
  },

  seedDB : true,

  datadir : './client/assets/data_dir'
};
