var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const { Schema } = mongoose;

// User Schema
var UserSchema = new Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  password: String,
  Country: String,
  Skills: String
});

var User = (module.exports = mongoose.model("users", UserSchema));

module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByUsername = function(username, callback) {
  var query = { username: username };
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
