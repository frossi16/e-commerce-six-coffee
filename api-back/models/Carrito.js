const mongoose = require("mongoose");
const { Schema } = mongoose;

const CarritoSchema = new Schema({
    idUser:{
        type:String,
        required:true,
    },
   
  // posible guardado de la ventas {maxi}
  
  idProducto:{
    type:String
  },


  nameProducto: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    trim: true,
  },
  cant: {
    type: Number,
    required: true,
    trim: true,
  },
});

const carrito = mongoose.model("carrito", CarritoSchema);

module.exports = carrito;
