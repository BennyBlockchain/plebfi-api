const express = require("express");
const getPostsByUser = require("../controllers/post.controller");

const router = express.Router();

router.get("/:username", getPostsByUser);

module.exports = router;
