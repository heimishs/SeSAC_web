const express = require("express");
const app = express();

// 필수사항
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);

app.get("/", (req, res) => {
  res.send("get요청입니다");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("서버시작", PORT);
});
