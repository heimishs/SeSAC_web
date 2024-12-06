const express = require("express");
const db = require("./models");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(__dirname + "/static"));

// 라우터 연결
const indexRouter = require("./routers/index");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((res) => {
  console.log("DB 연결성공");
  app.listen(PORT, () => {
    console.log(`${PORT}서버시작`);
  });
});
