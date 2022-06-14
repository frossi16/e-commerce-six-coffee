// LOGICA CARRITO DE COMPRAS
const CartServices = require('../services/cartServices')

class CartRoutes {
  static async getItem(req, res) {
    const { error, data } = await CartServices.getItem(req.params.id);
    if (error) {
      return res.status(401).send(data);
    }
    res.status(200).send(data);
  }

  static async itemCar(req,res){
    const {error,data} = await CartServices.itemCar(req.body)
    if(error){
      return res.status(401).send(data)
    }
    return res.status(201).send(data)
  }
}

module.exports = CartRoutes;  
