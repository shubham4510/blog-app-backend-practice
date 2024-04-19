const Post = require('../models/postModel')
const Like = require('../models/likeModel')

exports.likePost = async (req,res) =>{
    try {
        const {post,user} = req.body
        const like = new Like({post,user})
        const savedLike =  await like.save()

        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec()

     return   res.json({
            post:updatePost
        })
    } catch (error) {
        return res.status(400).json({
            error:"Error while liking post"
        })
    }
}

exports.unlikePost = async (req,res) =>{
    try {

        const {post,like} = req.body

        //find and delete the like
        const deletedLike = await Like.findOneAndDelete({post,_id:like})
        const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
      
     return   res.json({
            post:updatePost
        })
    } catch (error) {
        return res.status(400).json({
            error:"Error while unliking post"
        })
    }
}