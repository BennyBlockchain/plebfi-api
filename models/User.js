const mongoose = require("mongoose");
const Post = require("../models/Post");

const UserSchema = mongoose.Schema({
  username: String,
  posts: [Post],
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);

module.exports = User;
