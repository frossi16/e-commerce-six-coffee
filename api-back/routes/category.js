const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryControllers");



router.get("/", CategoryController.getAll);
router.delete("/:id", CategoryController.removeCategory);
router.post("/", CategoryController.createCategory);
router.put("/:id", CategoryController.getUpdate);

module.exports = router;