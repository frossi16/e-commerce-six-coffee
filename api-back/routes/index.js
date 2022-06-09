const express = require('express')
const appRoutes = express()
const user = require('../routes/user')
const carritoCompra = require('../controllers/carrito.routes') // reedirijo la ruta al controller{maxi}
appRoutes.use('/carrito',carritoCompra)
appRoutes.use('/user', user)


module.exports=appRoutes












