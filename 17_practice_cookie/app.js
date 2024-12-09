const express = require("express");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

// TODO 쿠기 미들웨어 설정
app.get("/", (req, res) => {
  // 쿠키값 가져오기 및 인덱스에 보내기
  // res.render("index",{popup:쿠키값})
  res.render("index");
});

app.post("/set-cookie", (req, res) => {
  res.send("쿠키 생성 성공");
});

app.listen(PORT, () => {
  console.log();
});
