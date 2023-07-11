const express = require("express");
const router = express.Router();

const postRoutes = require('./routers/posts.route.js')

router.use("/post", postRoutes)

module.exports = router;
