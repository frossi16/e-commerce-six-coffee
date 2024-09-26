const express = require("express");
const router = express.Router();
const RoutersUser = require("../controllers/userCotrollers");
const passport = require("passport");

router.get("/all", RoutersUser.getAll);
router.get("/:id", RoutersUser.getOne);
router.post("/register", RoutersUser.createUser);
router.post("/login", passport.authenticate("local"), RoutersUser.getLogin);
router.post("/logout", RoutersUser.getLogout);
router.put("/:id", RoutersUser.getUpdate);
router.put("/adminUpdate/:id", RoutersUser.getAdminUpdate);
router.delete("/:id", RoutersUser.removeUser);

module.exports = router;

// RoutersUser.getLogin
