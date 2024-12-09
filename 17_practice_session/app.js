const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("static", express.static(__dirname + "/static"));

// 10분뒤 세션 종료하도록 설정

app.get("/", (req, res) => {
  res.render("index");
  //   로그인이 안된 유저라면 >{isLogin:fasle}
  //   로그인이 된 유저라면 >{isLogin:true, user:유저}
});

app.get("/login", (req, res) => {
  res.render("login");
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

//POST /login
app.post("/login", (req, res) => {
  //로그인시 세션을 연결
});

//get /logout
app.get("/logout", (req, res) => {
  //로그아웃 진행 세션 삭제
});

app.listen(PORT, () => {
  console.log();
});
