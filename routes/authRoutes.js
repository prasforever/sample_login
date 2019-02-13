const passport = require("passport");
const _ = require("lodash");
var User = require("../models/User");

module.exports = app => {
  // Register User
  app.post("/api/register", function(req, res) {
    var password = req.body.password;
    var password2 = req.body.password2;

    if (password == password2) {
      var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        Country: req.body.Country,
        Skills: req.body.Skills
      });

      User.createUser(newUser, function(err, user) {
        if (err) throw err;
        res
          .send(
            _.pick(user, [
              "username",
              "email",
              "firstName",
              "lastName",
              "dateOfBirth",
              "Country",
              "Skills"
            ])
          )
          .end();
      });
    } else {
      res
        .status(500)
        .send('{errors: "Passwords don\'t match"}')
        .end();
    }
  });

  // Login User
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.send(
      _.pick(req.user, [
        "username",
        "email",
        "firstName",
        "lastName",
        "dateOfBirth",
        "Country",
        "Skills"
      ])
    );
  });

  // Get current user
  app.get("/api/user", function(req, res) {
    res.send(
      _.pick(req.user, [
        "username",
        "email",
        "firstName",
        "lastName",
        "dateOfBirth",
        "Country",
        "Skills"
      ])
    );
  });

  // Logout
  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
