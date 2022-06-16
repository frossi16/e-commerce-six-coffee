const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const HistoryRouter = require("../controllers/historyRouter");
=======
const HistoryRouter = require("../controllers/historyController");
>>>>>>> origin/categories2

router.post("/:id", HistoryRouter.getAll);
router.get("/:id", HistoryRouter.getUser);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> origin/categories2
