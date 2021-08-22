const User = require("../models/User");

function getUsers(req, res, next) {
  User.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
}

function createUser(req, res, next) {
  const { username } = req.body;

  User.create({ username: username }, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.send(err);
    }
  });
}

module.exports = { getUsers, createUser };
