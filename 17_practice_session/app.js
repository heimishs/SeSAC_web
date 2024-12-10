const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("static", express.static(__dirname + "/static"));

//body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 10분뒤 세션 종료하도록 설정
app.use(
  session({
    secret: "secret Key", //필수 env에서 관리할것
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

const data = {
  isLogin: null,
  user: null,
};

app.get("/", (req, res) => {
  //   로그인이 안된 유저라면 >{isLogin:fasle}
  //   로그인이 된 유저라면 >{isLogin:true, user:유저}
  data.isLogin = req.session.isLogin;
  data.user = req.session.user;
  console.log("/세션", req.session);

  res.render("index", data);
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
  if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
    console.log("로그인성공");
    req.session.user = req.body.id;
    req.session.isLogin = true;
    data.isLogin = true;
    data.user = req.body.id;
    res.render("index", data);
  } else {
    res.send("로그인실패");
  }
});

//get /logout
app.get("/logout", (req, res) => {
  //로그아웃 진행 세션 삭제

  req.session.destroy((err) => {
    if (err) throw err;

    data.isLogin = false;
    data.user = null;
    res.render("index", data);
  });
});

app.listen(PORT, () => {
  console.log();
});
