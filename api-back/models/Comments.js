const {Schema,model} = require("mongoose")

const CommentSchema = new Schema ({
    comment: {
        type : String, 
        required:true,
    },
    productId: {
        type : String, 
        required:true,
    },
    puntuation : {
        type: Number,
        required: true,
    }
    
})

module.exports = model("Comment",CommentSchema)