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

}

module.exports = categoryServices;
