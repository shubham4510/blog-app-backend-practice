const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

exports.createComment = async (req,res) =>{
    try {
        //fetch data from req body
        const {post,user,body} = req.body;
        //create a comment object
        const comment = new Comment({post,user,body})

        //save the new comment into the database
        const saveComment = await comment.save();
        //find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: saveComment._id } },
            { new: true }
          ).populate("comments").exec();

          return  res.status(200).json({
            post:updatedPost,
        })


    } catch (error) {
        return res.status(500).json({
            error:"Error while creating comment",
        })
    }
}