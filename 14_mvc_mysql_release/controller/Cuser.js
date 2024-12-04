// TODO: 컨트롤러 코드

const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

// 회원가입
exports.signup_Add = (req, res) => {
  console.log(req.body);
  User.signup(req.body, (result) => {
    console.log(result);
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

// 로그인처리
exports.signin_auth = (req, res) => {
  User.signin(req.body, (result) => {
    res.send(result);
  });
};

exports.profile = (req, res) => {
  // :id값
  console.log(req.params.id);
  User.profile(req.params.id, (result) => {
    console.log("가져온값", result);
    res.render("profile", result);
  });
};

exports.profile_edit = (req, res) => {
  res.send("수정");
};

exports.profile_delete = (req, res) => {
  res.send("수정");
};
