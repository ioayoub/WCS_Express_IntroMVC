const express = require("express");
const router = express.Router();

const postController = require("../controllers/post.controller.js");

router.get("/find/:id", postController.findOne);
router.post("/create", postController.createPost);

module.exports = router;
