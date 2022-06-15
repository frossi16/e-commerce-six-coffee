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

}

module.exports = CategoryController;  
