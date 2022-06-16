const ProductServices = require("../services/product");

class ProductController {
  static async getAll(req, res) {
    const { error, data } = await ProductServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getAllByCategory(req, res) {
    const { error, data } = await ProductServices.getAll({
      category: req.params.category,
    });

    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getAllByName(req, res) {
    const { error, data } = await ProductServices.getAll({
      name: req.params.name,
    });


    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getOne(req, res) {
    const { error, data } = await ProductServices.getOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async addOne(req, res) {
    const { error, data } = await ProductServices.addOne(req.body);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  static async updateOne(req, res) {
    const { error, data } = await ProductServices.updateOne(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async deleteOne(req, res) {
    const { error, data } = await ProductServices.deleteOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getReviews(req, res) {
    const { error, data } = await ProductServices.getReviews(req.params.id);
    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }

  static async addReviews(req, res) {
    const { error, data } = await ProductServices.addReviews(req.body);

    if (error) {
      return res.status(500).send({ message: data.message });
    }
    res.status(201).send(data);
  }


  //ariel
  static async searchByTitle(req, res) {
    const { title } = req.params;

    const { error, response } = await ProductServices.searchByTitle(title);

    if (error) {
      return res.status(404).send(response);
    }
    res.status(200).send(response);
  }

}

module.exports = ProductController;
