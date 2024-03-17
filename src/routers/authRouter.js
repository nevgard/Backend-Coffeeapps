const express = require("express");
const router = express.Router();

const { Login, getMe, Logout } = require("../controllers/AuthLogin");

router.post("/login", Login);
router.get("/me", getMe);
router.delete("/logout", Logout);

module.exports = router;
