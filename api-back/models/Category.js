const {Schema,model} = require("mongoose")

const CategorySchema = new Schema ({
    categoryName: {
        type : String, 
        required:true,
    },  
})

module.exports = model("Category",CategorySchema)