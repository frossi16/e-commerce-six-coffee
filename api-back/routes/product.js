const express = require("express");
const router = express.Router()
const ProductController = require("../controllers/productcControllers")


router.get("/all",ProductController.getAll)
router.get("/:id",ProductController.getOne)
router.get("/name/:name",ProductController.getAllByName)
router.post("/",ProductController.addOne)
router.put("/:id",ProductController.updateOne)
router.delete("/:id",ProductController.deleteOne)
router.get("/category/:category",ProductController.getAllByCategory)

router.get("/:id/reviews", ProductController.getReviews)
router.post("/:id/reviews", ProductController.addReviews)

//ariel
router.get("/searchByTitle/:title", ProductController.searchByTitle)

module.exports = router;