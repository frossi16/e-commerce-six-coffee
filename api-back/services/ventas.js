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

  static async createVenta(body) {
    console.log(body)
    try {
      await Venta.create(body);
      return { error: false, data: body };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

}

module.exports = ventasServices;
