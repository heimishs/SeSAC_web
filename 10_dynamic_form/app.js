const { render } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
// 1. 뷰폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API
app.get("/", (req, res) => {
  res.render("index");
});

// AJAX 요청
app.get("/ajax", (req, res) => {
  // body-parset 설정해야 req.query를 읽을 수 있음
  console.log(req.query);
  res.send(req.body);
});

app.post("/ajax", (req, res) => {
  // body-parset 설정해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
});

// axios 요청
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 실습
app.get("/practice", (req, res) => {
  res.render("practice");
});

// axios 요청
app.get("/practice_result", (req, res) => {
  res.send(req.query);
});

// fetch
app.get("/fetch", (req, res) => {
  // 클라이언트에서 .txet() 사용
  // 클라이언트에서 .json() 사용
  res.send(req.query);
});

app.get("/api", (req, res) => {
  res.render("api");
});
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/login", (req, res) => {
  res.render("login");
});
const user = { id: "admin", pw: "admin123" };
app.post("/login_auth", (req, res) => {
  if (req.body.id === user.id && req.body.pw === user.pw) {
    console.log("로그인성공");
    res.send({ auth: true, id: user.id });
  } else {
    console.log("로그인실패");
    res.send({ auth: false });
  }
});

app.listen(PORT, () => {
  console.log("http://127.0.0.1:", PORT);
});
