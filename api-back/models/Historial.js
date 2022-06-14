const mongoose = require("mongoose");
const { Schema } = mongoose;

const HistorialSchema = new Schema({
    idUser:{
        type:String,
        required:true,
    },
    venta:{
        type:Object
    }
});

const Historial = mongoose.model("historial", HistorialSchema);

module.exports = Historial;
