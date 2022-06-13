const UserServices = require("../services/User.Services");
const passport = require('passport')


class RoutersUser {
  static async getAll(req, res) {
    const { error, data } = await UserServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getOne(req, res) {
    const { error, data } = await UserServices.getOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async createUser(req, res) {
    const { error, data } = await UserServices.createUser(req.body);
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async getLogin(req, res) {
    const { error, data } = await UserServices.getLogin(req.body);
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async getUpdate(req, res) {
    const { error, data } = await UserServices.getUpdate(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async removeUser(req, res) {
    const { error, data } = await UserServices.removeUser(req.params.id);
    if (error) {
      return res.status(400).send(data);
    }
    return res.status(202).send(data);
  }
}


module.exports = RoutersUser;
