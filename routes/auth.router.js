const express = require("express");
const router = express.Router();
const { checkUsername } = require("../controllers/auth.controller");

router.post("/check-username", checkUsername);

module.exports = router;
