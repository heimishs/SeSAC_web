const User = require("../model/User");

// GET '/'

exports.main = (req, res) => {
  res.render("index");
};
