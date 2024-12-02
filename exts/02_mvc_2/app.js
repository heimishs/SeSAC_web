const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 불러오기
const indexRouter = require("./router");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.send("page not found");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
