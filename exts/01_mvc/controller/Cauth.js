const User = require("../model/user");

exports.auth = (req, res) => {
  if(req.body.id.trim() === User.userInfo().realId && req.body.pw.trim() === User.userInfo().realPw){
    res.send({auth: true, userid: User.userInfo().realId});
  }else{
    res.send({auth: false});
  }
};
