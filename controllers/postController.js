const Post = require('../models/postModel')

exports.createPost = async (req,res) =>{
    try {
        const {title,body} = req.body
        const post = new Post({
            title,body
        })
        const savedPost = await post.save()
        res.json({
            post:savedPost
        })
    } catch (error) {
        return res.status(400).json({
            error:"Error while creating Post"
        })
    }
}

exports.getAllPost = async (req,res)=>{
    try {
        const allPost = await Post.find()

        res.status(200).json({
            success:true,
            post:allPost,
        })
    } catch (error) {
        return res.status(400).json({
            error:"Error while fetching all Post"
    })
    }}