const express = require("express");
const RoutersVentas = require("../controllers/ventaControllers");

const router = express.Router();
const CartRoutes = require("../controllers/cartCotrollers");

router.get("/:id", CartRoutes.getItem);
router.post("/add", CartRoutes.itemCar);

router.get("/all", RoutersVentas.getAll);

module.exports = router;
