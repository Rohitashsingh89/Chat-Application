const express = require('express');

const { login, logout, printLoggedInUsers, register } = require("../Controller/auth.js");

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/logged-in-users", printLoggedInUsers)

module.exports = router;
