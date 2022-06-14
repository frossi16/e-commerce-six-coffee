const ventasServices = require("../services/ventas");

class RoutersVentas {

    static async getAll(req, res) {
      const { error, data } = await ventasServices.getAll();
      if (error) {
        return res.status(404).send(data);
      }
      res.status(200).send(data);
    }
  
  }
  
  module.exports = RoutersVentas;
  