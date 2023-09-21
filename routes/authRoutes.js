const express = require("express");
const router = express.Router();

const { validateHash } = require("../controllers/authController");

router.post("/auth/validate", validateHash);

module.exports = router;
