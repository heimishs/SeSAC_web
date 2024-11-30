const User = require("../model/User");

exports.getUser = (req, res) => {
  console.log(User.userInfo());
  res.render("user", { UserInfo: User.userInfo() });
  // res.render("user", { ...User.userInfo()});
};
