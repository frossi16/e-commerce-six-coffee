const Cart = require("../models/CarritoPosta.js");
const Products = require("../models/Product.js");

class CartServices {
  static async getItem(body) {
    try {
      const user = await Cart.find({ idUser: body });
      console.log("esto es el user", user);
      if (!user) {
        return { error: true, data: "algo salio mal" };
      }
      return { error: false, data: user };
    } catch (error) {
      console.log("ESTO ES UN ERROR", error);
      return { error: true, data: error };
    }
  }

  static async itemCar(body) {
    try {
      const producto = await Products.find({ id: body.idProducto });
      if (producto[0].stock < body.cant) {
        return { error: true, data: "Stock no disponible" };
      }
      await Cart.create(body);
      return { error: false, data: "se agrego al carrito" };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }
}

module.exports = CartServices;
