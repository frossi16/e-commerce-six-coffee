const express = require("express");
const CategoryController = require("../controllers/categoryControllers");
const router = express.Router();
const passport = require("passport");

router.get("/", CategoryController.getAll);
router.delete("/:id", CategoryController.removeCategory);
router.put("/:id", CategoryController.updateOne);
router.post("/", CategoryController.addOne);


module.exports = router;