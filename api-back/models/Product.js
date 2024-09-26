const {Schema,model} = require("mongoose")
const mongoosePagination = require("mongoose-paginate-v2")

const ProductSchema = new Schema ({
    title: {
        type : String, 
        required:true,
        trim:true
    },
    price: {
        type : Number, 
        required:true,
    },
    image: {
        type : String, 
        required:true,
    },
    stock: {
        type : Number, 
        required:true,
    },
    description: {
        type : String, 
        required:true,
    },
    category: {
        type : String, 
        required:true,
    },

    
})
ProductSchema.plugin(mongoosePagination)
module.exports = model("Product",ProductSchema)