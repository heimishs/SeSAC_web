const express = require("express");
const controller = require("../controller/Cauth");
const router = express.Router();

router.post("/", controller.auth);



module.exports = router;
