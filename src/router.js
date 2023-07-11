const express = require("express");
const router = express.Router();

const postRoutes = require('./routers/posts.route')

router.use("/post", postRoutes)

module.export = router;
