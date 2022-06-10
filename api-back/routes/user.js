const express = require("express");
const RoutersUser = require("../controllers/userCotrollers");

const router = express.Router();
const passport = require("passport");

router.get("/all", RoutersUser.getAll);
router.get("/:id", RoutersUser.getOne);
router.post("/register", RoutersUser.createUser);
router.post("/login",passport.authenticate("local"), RoutersUser.getLogin);
router.put("/:id", RoutersUser.getUpdate);
router.delete("/:id", RoutersUser.removeUser);

module.exports = router;
