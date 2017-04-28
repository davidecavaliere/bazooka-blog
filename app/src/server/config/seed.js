var User = require('../api/user/user.model');


User.find({}).remove(function() {
  console.log('Seeding db');

  User.create({
    name : 'Test',
    role : 'user',
    email : 'test@test.com',
    provider : 'local',
    password : 'test'
  }, function(err, raw) {
    if (err) return console.error(err);
    console.log('user created successfully', raw);
  });
})
