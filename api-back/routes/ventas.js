const express = require("express");
const RoutersVentas = require("../controllers/ventaControllers");

const router = express.Router();
const CartRoutes = require("../controllers/cartCotrollers");

/* Trae los items del carrito */
router.get("/:id", CartRoutes.getItem);

/* Esta ruta permite modifcar las cantidades agregadas al carrito */
router.post("/add", CartRoutes.itemCar);


/* router.get("/all", RoutersVentas.getAll); */

module.exports = router;
