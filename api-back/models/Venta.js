const mongoose = require("mongoose");
const { Schema } = mongoose;

const VentaSchema = new Schema({
  buyer: {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },
  },
// imagen de referencia {maxi}
  producto: {
    name: {
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
  },
});

const Venta = mongoose.model("Venta", VentaSchema);

module.exports = Venta;
