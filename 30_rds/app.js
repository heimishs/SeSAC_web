const express = require("express");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

const port = 8080;
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userModel = require("./models/User");
console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  "XZrjs158990!#",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const User = userModel(sequelize);

app.get("/api", (req, res) => {
  res.send("hello");
});

app.post("/api/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    console.log(user);
    res.json(user);
  } catch (err) {
    res.send("서버에러");
    console.log(err);
  }
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("테이블 생성 완료");
    app.listen(port, () => {
      console.log(`http://127.0.0.1:${port}`);
    });
  })
  .catch((err) => {
    console.log("sequelize err!!", err);
  });

/*
- 로컬에서 RDS 로 연결 시도시 timeout
3306 포트로 인바운드 설정을 허용해놨음에도 접근이 되지 않는 이유는
rds 설정이 public access를 허용 하지 않았기 때문
EC2 에서만 RDS로 접근할 수 있음

개발환경에서의 DB는 로컬 DB, 배포할때의 db는 RDS로 설정

*/
