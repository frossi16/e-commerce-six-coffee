const express = require("express");
const appRoutes = express();
const user = require("../routes/user");
const productsRouter = require("./product");
const carritoCompra = require("./ventas"); // reedirijo la ruta al controller{maxi}
const Historials = require("../models/Historial");
const CarritoPosta = require('../models/CarritoPosta.js')



// prueba de confirmacion de venta del historial {maxi}
// appRoutes.post("/prueba/:id", async (req, res) => {
//   const carrito = await CarritoPosta.find({idUser:req.params.id})
//     await Historials.create({
//         idUser:req.params.id,
//         venta:carrito});
//        await CarritoPosta.deleteMany({idUser:req.params.id})
//   res.send("todo joya pa");
// });

// appRoutes.get("/prueba/:id", async (req, res) => {
//   const prueba = await Historials.find({ idUser:req.params.id });
//   res.send(prueba);
// });

appRoutes.use("/carrito", carritoCompra);
appRoutes.use("/user", user);
appRoutes.use("/products", productsRouter);

module.exports = appRoutes;
