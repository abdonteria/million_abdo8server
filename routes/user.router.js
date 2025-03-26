const express = require("express");
const router = express.Router();

// Controllers
const { userController } = require("../controllers/user.controller.js");

router.get("/test", userController);

module.exports = router;
