const express = require('express')
const router = express.Router()

const postController = require('../controllers/post.controller')


router.get('/find/:id', postController.findOne)
router.post('/create', postController.createPost)
