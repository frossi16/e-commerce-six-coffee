const express = require("express");
const router = express.Router()
const RoutersVentas = require("../controllers/ventaControllers")


router.get("/all",RoutersVentas.getAll)





module.exports = router;