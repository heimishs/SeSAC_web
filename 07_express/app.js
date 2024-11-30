const express = require("express");

const app = express();
const PORT = 8000;

// static 폴더 설정 추가
// static 이라는 경로를 /public 대신에 사용할것이라고 지정
app.use("/static", express.static(__dirname + "/public"));

// middleware 설정추가
// 뷰엔진 설정
app.set("view engine", "ejs");
app.set("/views", "views");

// 메개변수 요청,응답
app.get("/", function (request, response) {
  // request 클라이언트가 서버에게 보내는 요청
  // response 서버가 클라이언트에게 보내는 응답
  // console.log(request)
  // response.send('hello express')
  response.render("test", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 춥다",
    },
  });
});

// get /login
app.get("/login", (req, res) => {
  res.render("login", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 춥다",
    },
  });
});
// get /register
app.get("/register", (req, res) => {
  res.render("register", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 춥다",
    },
  });
});

app.use((req, res) => {
  res.render("404");
});

// 정적 파일(이미지,css, js)을 불러올땐 설정이 별도로 필요함
app.listen(PORT, function () {
  console.log(`http://127.0.0.1:${PORT}`);
});
