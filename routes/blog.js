const express = require('express')
const router = express.Router()
const {createComment} = require('../controllers/commentController')
const {createPost} = require('../controllers/postController')
const {getAllPost} = require('../controllers/postController')


//Import Controller

router.post('/comments/create',createComment)
      .post('/posts/create', createPost)
      .post('/posts/get', getAllPost)



//Mapping Create




//Export
module.exports = router