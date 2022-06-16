const HistoryService = require("../services/HistorialService");

class HistoryRouter {
  static async getAll(req, res) {
    const { error, data } = await HistoryService.getAll(req.params.id);
    if (error) {
      return res.status(401).send(data);
    }
    res.status(201).send(data);
  }

  static async getUser(req, res) {
    const { error, data } = await HistoryService.getUser(req.params.id);
    if (error) {
      return res.status(401).send(data);
    }
    return res.status(201).send(data);
  }
}

module.exports = HistoryRouter;
