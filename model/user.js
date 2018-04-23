var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/my_db");

var userSchema = mongoose.Schema({
   first_name: String,
   last_name: String,
   email: String,
   phone_number: Number,
   message: String
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// get all the users
User.find({}, function(err, users) {
   if (err) throw err;

   // object of all the users
   console.log(users);
});

// make this available to our users in our Node applications
module.exports = User;




