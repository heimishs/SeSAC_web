const express = require("express");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

// 암호화 안된 쿠키로사용
app.use(cookieParser());

app.set("view engine", "ejs");

// 오늘 하루만 유지하기 위해 다음날 00시 까지로 지정
const now = new Date();
const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // 다음날 00:00
// 쿠키설정값
const cookieConfig = {
  expires: midnight,
  httpOnly: true,
  signed: false,
};

app.get("/", (req, res) => {
  let localcookie = { popup: req.cookies.popup };
  res.render("index", localcookie);
});

app.post("/setCookie", (req, res) => {
  res.cookie("popup", true, cookieConfig);
  res.send(res.cookies);
});

app.listen(PORT, () => {
  console.log();
});
