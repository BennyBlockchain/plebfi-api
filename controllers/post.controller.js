const User = require("../models/User");

function getPostsByUser(req, res, next) {
  const { username } = req.params;
  User.find({ username: username })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.send(err));
}

module.exports = getPostsByUser;
