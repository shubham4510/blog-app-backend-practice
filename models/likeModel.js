const mongoose = require('mongoose')


//route handler

const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", // This is the reference to the Post model
    },
    user:{
        type:String,
        required:true,
    },
  
})





//export
module.exports = mongoose.model("Like",likeSchema)