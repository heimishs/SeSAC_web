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
    res.send("");
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
  User.profile(req.params.id, (result) => {
    res.render("profile", result);
  });
};

// 수정처리
exports.profile_edit = (req, res) => {
  User.profile_edit(req.body, () => {
    res.send("");
  });
};

exports.profile_delete = (req, res) => {
  console.log(req.body.userid);
  User.profile_delete(req.body.userid, () => {
    res.send("");
  });
};
