// LOGICA CARRITO DE COMPRAS
const CartServices = require("../services/cartServices");

class CartRoutes {
  static async getItem(req, res) {
    const { error, data } = await CartServices.getItem(req.params.id);
    if (error) {
      return res.status(401).send(error);
    }
    res.status(200).send(data);
  }

  static async addItemCar(req, res) {
    const { error, data } = await CartServices.addItemCar(req.body);
    if (error) {
      return res.status(401).send(error);
    }
    return res.status(201).send(data);
  }

  static async getUpdate(req, res) {
    const { error, data } = await CartServices.getUpdate(
      req.body,
      // req.params.id
    );
    if (error) {
      return res.status(401).send(error);
    }
    return res.status(201).send(data);
  }

  static async getRemove(req, res) {
    const { error, data } = await CartServices.getRemove(req.params);
    console.log(error, '   err', data)
    if (error) {
      return res.status(401).send(error);
    }
    return res.status(201).send(data);
  }
}

module.exports = CartRoutes;
