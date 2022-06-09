const express = require("express");
const router = express.Router();
const productsRouter = require("./product")

router.use("/products",productsRouter);

module.exports = router;