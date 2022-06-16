const mongoose = require("mongoose");
const { Schema } = mongoose;

const HistorialSchema = new Schema({
    idUser:{
        type:String,
        required:true,
    },
    //revisar segun la pag de internet
    venta:{
        type:[Object],
        default: undefined,
    }
});

const Historial = mongoose.model("historial", HistorialSchema);

module.exports = Historial;
