const express = require('express')
const appRoutes = express()
const user = require('../routes/user')
const productsRouter = require("./product")
const carritoCompra = require('../controllers/carrito.routes') // reedirijo la ruta al controller{maxi}
appRoutes.use('/carrito', carritoCompra)
appRoutes.use('/user', user)
appRoutes.use("/products", productsRouter);

module.exports = appRoutes






