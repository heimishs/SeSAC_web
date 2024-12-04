// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/user", controller.index);
router.get("/user/signup", controller.signup);
router.post("/user/signup", controller.signup_Add);
router.get("/user/signin", controller.signin);
router.post("/user/signin", controller.signin_auth);
router.get("/user/profile/:id", controller.profile);
router.get("/user/profile/edit", controller.profile_edit);
router.get("/user/profile/delete", controller.profile_delete);

module.exports = router;
