//index con varias rutas
//esto es solo provisorio, en el marge vuela 
const express = require("express");
const router = express.Router();
const routerUser = require('./routerUser.js')

router.use('/user', routerUser)

router.get("/", (req, res, next) => {
    res.send("Servidor corriendo en el puerto http://localhost:3030");
});

module.exports = router; 