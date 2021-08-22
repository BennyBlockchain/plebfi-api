const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

const Post = mongoose.models.posts || mongoose.model("posts", PostSchema);

module.export = Post;
