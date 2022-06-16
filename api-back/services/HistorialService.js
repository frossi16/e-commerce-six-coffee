const Carrito = require("../models/Carrito.js");
const Historial = require("../models/Historial");

class HistoryService {
  static async getAll(id) {
    try {
      const carrito = await Carrito.find({ idUser: id });
      await Historial.create({ idUser: id, venta: carrito });
      await Carrito.deleteMany({ idUser: id });
      return { error: false, data: "Se realizo el historial" };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getUser(id) {
    console.log(id + '      id')
    try {
      const userHisto = await Historial.find({ idUser: id });
      console.log(userHisto + '      userHisto')
      return { error: false, data: userHisto };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = HistoryService;
