const express = require("express");
const session = require("express-session");
const { sequelize } = require("./models");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SS_SECRET, //필수 env에서 관리할것
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

// 라우터 연결
const indexRouter = require("./routers/index");
app.use("/", indexRouter);

// 404
app.get("*", (req, res) => {
  res.send("404");
});

// sync
sequelize
  .sync({ force: false })
  .then((res) => {
    app.listen(PORT, () => {
      console.log(PORT, "DB 서버시작성공");
    });
  })
  .catch((err) => {
    console.log("DB 연결에러", err);
  });
