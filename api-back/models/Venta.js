const mongoose = require("mongoose");
const { Schema } = mongoose;

const VentaSchema = new Schema({
  buyer: {
    name: {
      type: String,
      equired: true,
      trim: true,
    },

    lastName: {
      type: String,
      equired: true,
      trim: true,
    },
  },

  producto: {
    name: {
      type: String,
      equired: true,
      trim: true,
    },

    price: {
      type: Number,
      equired: true,
      trim: true,
    },
    cant: {
      type: Number,
      equired: true,
      trim: true,
    },
  },
});

const Venta = mongoose.model("Venta", VentaSchema);

module.exports = Venta;
