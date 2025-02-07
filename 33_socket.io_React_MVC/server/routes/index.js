const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// Get /api
router.get("/", controller.main);

module.exports = router;
