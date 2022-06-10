const express = require("express");
const router = express.Router()

const ventastCtrl = require("../controllers/product")



router.get("/ventas", ventastCtrl);





module.exports = router;