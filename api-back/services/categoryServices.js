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

  static async addCategory(body){
    console.log(body)
    try{
      await Category.create(body)
      return {error:false, data:body}
    } catch(error){
      console.log(error + ' error de add category')
      return {error: true, data: error}
    }
  }

  static async updateOne(id, body){
    try{
      await Category.findByIdAndUpdate(id, body)
      return {
        error: false,
        data: "category updated"
      }
    }catch(error){
      console.log(error + " error de update category")
      return {
        error: true,
        data: "error 404: category not found, changes couldn't be made"
      }
    }
  }
}



module.exports = categoryServices;
