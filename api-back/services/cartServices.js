const Cart = require("../models/Carrito.js");
const Products = require("../models/Product.js");

class CartServices {
  static async getItem(id) {
    try {
      const user = await Cart.find({ idUser: id });
      if (!user) {
        return { error: true, data: "algo salio mal" };
      }
      return { error: false, data: user };
    } catch (error) {
      console.log("ESTO ES UN ERROR", error);
      return { error: true, data: error };
    }
  }

  static async addItemCar(body) {
    try {
      const producto = await Products.find({ _id: body.idProducto });
      if (producto[0].stock < body.cant) {
        return { error: true, data: "Stock no disponible" };
      }
      const produCart = await Cart.find({
        idUser: body.idUser,
        idProducto: body.idProducto,
      });

      if (produCart[0]) {
        await Cart.findOneAndUpdate(
          { idUser: body.idUser, idProducto: body.idProducto },
          { cant: produCart[0].cant + body.cant }
        );

        if (produCart[0].cant > producto[0].stock) {
          return { error: true, data: "Stock no disponible" };
        } else {
          return { error: false, data: "se agrego al carrito" };
        }
      }
      await Cart.create(body);
      return { error: false, data: "se agrego al carrito" };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getUpdate(body) {
    try {
      await Cart.findOneAndUpdate(
        { idUser: body.idUser, idProducto: body.idProducto },
        { cant: body.cant }
      );
      return { error: false, data: "Carrito actualizado" };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getRemove(body) {
    try {
      await Cart.findOneAndDelete({
        idUser: body.idUser,
        idProducto: body.idProducto,
      });
      return { error: false, data: "Se elimino del carrito" };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getUpdate(body) {
    try {
      await Cart.findOneAndUpdate(
        { idUser: body.idUser, idProducto: body.idProducto },
        { cant: body.cant }
      );
      return { error: false, data: "Carrito actualizado" };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getRemove(body) {
    try {
      await Cart.findOneAndDelete({
        idUser: body.idUser,
        idProducto: body.idProducto,
      });
      return { error: false, data: "Se elimino del carrito" };
    } catch (error) {

      return { error: true, data: error };
    }
  }
}

module.exports = CartServices;
