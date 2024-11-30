const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./router/index");
app.use("/", indexRouter);

const authRouter = require("./router/auth");
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
