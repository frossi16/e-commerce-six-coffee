const express = require("express");
const router = express.Router();
const CartRoutes = require("../controllers/cartCotrollers");
const RoutersVentas = require("../controllers/ventaControllers");

router.get("/:id", CartRoutes.getItem);
router.post("/add", CartRoutes.addItemCar);
router.put("/", CartRoutes.getUpdate);
router.delete("/removeItem", CartRoutes.getRemove);

// router.get("/all", RoutersVentas.getAll);

module.exports = router;