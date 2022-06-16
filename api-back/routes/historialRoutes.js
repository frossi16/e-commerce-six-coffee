const express = require("express");
const router = express.Router();
const HistoryRouter = require("../controllers/historyController");

router.post("/:id", HistoryRouter.getAll);
router.get("/:id", HistoryRouter.getUser);

module.exports = router;