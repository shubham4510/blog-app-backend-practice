const mongoose = require('mongoose')


//route handler

const commentSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", // This is the reference to the Post model
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
})





//export
module.exports = mongoose.model("Comment",commentSchema)