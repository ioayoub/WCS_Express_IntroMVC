// locahost:8000/api/post/1
const postModel = require("../models/Post.model");

const findOne = async (req, res) => {
  try {
    const post = await postModel.findOne(id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error while creating post" });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    await postModel.create(title, content);
    res.status(201).json({ status: 201, message: "post created" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Error while creating post" });
  }
};

module.exports = {
  findOne,
  createPost,
};
