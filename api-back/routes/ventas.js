const express = require("express");
const router = express.Router();
const CartRoutes = require("../controllers/cartCotrollers");

router.get("/:id", CartRoutes.getItem);
router.post("/add", CartRoutes.itemCar);



module.exports = router;
