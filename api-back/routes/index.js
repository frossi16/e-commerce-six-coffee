const express = require("express");
const appRoutes = express();
const user = require("../routes/user");
const productsRouter = require("./product");
const carritoCompra = require("./carrito"); // reedirijo la ruta al controller{maxi}
const HistorialRoutes = require("./historialRoutes");
const RoutersVentas = require("./carrito");
const categoryRouter = require ("./category")

appRoutes.use("/category", categoryRouter)
appRoutes.use("/carrito", carritoCompra);
appRoutes.use("/user", user);
appRoutes.use("/products", productsRouter);
appRoutes.use("/ventas", RoutersVentas);
appRoutes.use("/historial", HistorialRoutes);

module.exports = appRoutes;