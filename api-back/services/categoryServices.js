const Category = require("../models/Category");


class categoryServices {
  static async getAll() {
    try {
      const categories = await Category.find();
      return { error: false, data: categories };
    } catch (error) {
      return { error: true, data: "Categorias no encontradas" };
    }
  }

  static async removeCategory(id) {
    try {
      await Category.findByIdAndRemove(id);
      return { error: false, data: "Categoria eliminada con exito" };
    } catch (error) {
      return { error: true, data: "Surgio un error al eliminar la categoría" };
    }
  }

  static async createCategory(body) {
    try {
      await Category.create(body);
      return { error: false, data: body };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
    }
  }

  static async getUpdate(id, body) {
    try {
      await Category.findByIdAndUpdate(id, body);
      return { error: false, data: `Categoria actualizada` };
    } catch (error) {
      console.log(error);
      return { error: true, data: "No se logro introducir los cambios" };
    }
  }
}

module.exports = categoryServices;
