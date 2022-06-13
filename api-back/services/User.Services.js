const User = require("../models/index"); //cambiar a '../models/User' y mover el bcryp de index 
const Bcrypt = require('bcrypt')
const passport = require('../passport/LocalAutentificacion')

class UserServices {
  static async getAll() {
    try {
      const allUser = await User.find();
      return { error: false, data: allUser };
    } catch (error) {
      return { error: true, data: "Usuarios no encontrados" };
    }
  }

  static async getOne(idUser) {
    try {
      const loginUser = await User.findById(idUser);
      return { error: false, data: loginUser };
    } catch (error) {
      return { error: true, data: "Usuario no encontrado" };
    }
  }

  static async createUser(body) {
    try {
      body.password = Bcrypt.hashSync(body.password, 10);
      await User.create(body);
      return { error: false, data: body };
    } catch (error) {
      console.log(error)
      return { error: true, data: error };
    }
  }

  static async getLogin(body) {
    try {
      const user = await User.findOne({ email: body.email }).exec();
      if (!user) {
        return { error: true, data: "El usuario no existe" };
      }
      user.comparePassword(body.password, (error, match) => {
        if (!match) {
          console.log(match);
          return { error: true, data: "Contraseña invalida" };
        }
      });
      return { error: false, data: "Usuario logueado" };
    } catch (error) {

    }
  }

  static async getUpdate(id, body) {
    try {
      await User.findByIdAndUpdate(id, body);
      return { error: false, data: `Usuario actualizado` };
    } catch (error) {
      return { error: true, data: "No se logro introducir los cambios" };
    }
  }

  static async removeUser(id) {
    try {
      await User.findByIdAndRemove(id);
      return { error: false, data: "Usuario eliminado con exito" };
    } catch (error) {
      return { error: true, data: "Surgio un error al eliminar el usuario" };
    }
  }
}

module.exports = UserServices;
