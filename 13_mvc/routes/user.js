const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET / user
router.get("/", controller.getUser);
// router.post('/aa', controller.a)
// router.post('/login', controller.login)

module.exports = router;
