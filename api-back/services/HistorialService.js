const Carrito = require("../models/Carrito.js");
const Historial = require("../models/Historial");
const User = require("../models/User");
const transportador = require("../passport/Nodemail");

class HistoryService {
  static async getAll(id) {
    console.log("esto es el ",id)
    try {
      const userEmail = await User.findById({_id: id });
      const carrito = await Carrito.find({ idUser: id });
      await Historial.create({ idUser: id, venta: carrito });
      await Carrito.deleteMany({ idUser: id });
      await transportador.sendMail({
        from: `"Six Coffe " <sixcofee@gmail.com>`,
        to: userEmail.email,
        html: `<h1>Muchas gracias ${userEmail.name}</h1>\n
        <p>Se confirmo tu compra</p>`,
      });
      return { error: false, data: "Se realizo el historial" };
    } catch (error) {
      console.log("error",error);
      return { error: true, data: error };
    }
  }

  static async getUser(id) {
    try {
      const userHisto = await Historial.find({ idUser: id });
      return { error: false, data: userHisto };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

module.exports = HistoryService;
