const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터
const indexRouter = require("./routers");
app.use("/", indexRouter);

// sync
sequelize
  .sync({ force: false })
  .then((res) => {
    app.listen(PORT, () => {
      console.log(PORT);
    });
  })
  .catch((err) => {
    console.log("DB 연결에러", err);
  });
