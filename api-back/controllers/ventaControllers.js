const ventasServices = require("../services/ventas");

class RoutersVentas {

    static async getAll(req, res) {
      const { error, data } = await ventasServices.getAll();
      if (error) {
        return res.status(404).send(data);
      }
      res.status(200).send(data);
    }
    
    static async createVenta(req, res) {
      const { error, data } = await ventasServices.createVenta(req.body);
      if (error) {
        return res.status(400).send(data);
      }
      res.status(201).send(data);
    }

  }
  
  module.exports = RoutersVentas;
  