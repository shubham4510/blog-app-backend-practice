const express = require('express')
const router = express.Router()
const {createComment} = require('../controllers/commentController')
const {createPost} = require('../controllers/postController')
const {getAllPost} = require('../controllers/postController')
const {likePost,unlikePost} = require('../controllers/likeController')



router.post('/comments/create',createComment)
      .post('/posts/create', createPost)
      .get('/posts', getAllPost)
      .post('/likes/like',likePost)
      .post('/likes/unlike',unlikePost)







//Export
module.exports = router