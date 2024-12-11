// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cindex");

// GET /user, 메인페이지 요청
router.get("/", controller.index);

module.exports = router;
