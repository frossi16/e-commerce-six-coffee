const CategoryServices = require('../services/categoryServices')

class CategoryController {
  static async getAll(req, res) {
    const { error, data } = await CategoryServices.getAll();
    if (error) {
      return res.status(401).send(data);
    }
    res.status(200).send(data);
  }

  static async removeCategory(req, res) {
    const { error, data } = await CategoryServices.removeCategory(req.params.id);
    if (error) {
      return res.status(400).send(data);
    }
    return res.status(202).send(data);
  }

  static async createCategory(req, res) {
    const { error, data } = await CategoryServices.createCategory(req.body);
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async getUpdate(req, res) {
    const { error, data } = await CategoryServices.getUpdate(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }
}

module.exports = CategoryController;