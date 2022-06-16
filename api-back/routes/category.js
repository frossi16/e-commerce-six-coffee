<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryControllers");
=======
const express = require('express')
const CategoryController = require("../controllers/categoryControllers");
const router = express.Router();
>>>>>>> origin/categories2


router.get("/", CategoryController.getAll);
router.delete("/:id", CategoryController.removeCategory);
router.post("/", CategoryController.createCategory);
router.put("/:id", CategoryController.getUpdate);

module.exports = router;