const Venta = require("../models/Venta");


class ventasServices {
  static async getAll() {
    try {
      const allVentas = await Venta.find();
      return { error: false, data: allVentas };
    } catch (error) {
      return { error: true, data: "Ventas no encontradas" };
    }
  }

}

module.exports = ventasServices;
