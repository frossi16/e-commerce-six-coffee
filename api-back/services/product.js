const Product = require("../models/Product");

class ProductServices {
  static async getAll(params) {
    console.log(params);
    try {
      const data = await Product.find(params).exec();
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: page not found",
      };
    }
  }

  static async getOne(id) {
    try {
      const data = await Product.findById(id).exec();
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: product not found",
      };
    }
  }
  static async addOne(body) {
    console.log(Product);
    try {
      await Product.create(body);
      return {
        error: false,
        data: body,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        data: error,
      };
    }
  }
  static async updateOne(id, body) {
    try {
      await Product.findByIdAndUpdate(id, body);
      return {
        error: false,
        data: "product updated successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: product not found, changes couldn't be made",
      };
    }
  }
  static async deleteOne(id) {
    try {
      const result = await Product.findByIdAndDelete(id);
      return {
        error: false,
        data: "product deleted successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error: couldn't delete product, it doesn't exist.",
      };
    }
  }
}

module.exports = ProductServices;