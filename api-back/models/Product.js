const {Schema,model} = require("mongoose")

const ProductSchema = new Schema ({
    title: {
        type : String, 
        required:true,
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

module.exports = model("Product",ProductSchema)