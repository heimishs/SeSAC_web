const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const app = express();
const PORT = 8080;
const SECRET = "YPzUO1TJ5Md1MYxb";

app.set("view engine", "ejs");
app.use("static", express.static(__dirname + "/static"));

//body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userInfo = {
  id: "cocoa",
  pw: "1234",
  name: "코코아",
  age: 18,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // jwt 발급
      const token = jwt.sign({ id }, SECRET); //sign(페이로드, 비밀키)
      console.log("토큰", token);
      // jwt 는 클라이언트에서 관리하기 때문에
      // 클라이언트에게 토큰을 보내주어야함
      res.send({
        result: true,
        token,
      });
    } else {
      res.send({ message: "로그인 정보가 올바르지 않습니다", result: false });
    }
  } catch (err) {
    console.log("get login error:", err);
    res.status(500).send({ message: "서버에러" });
  }
});

app.post("/token", (req, res) => {
  try {
    // console.log(req.headers.authorization); //Bearer t.t.t
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      try {
        const auth = jwt.verify(token, SECRET);
        // 검증값 { id: 'cocoa', iat: 1733894230 }
        console.log("검증값", auth);
        if (auth.id === userInfo.id) {
          res.send({ result: true, mame: userInfo.name });
        } else {
          console.log("토큰인증 에러");
          res
            .status(401)
            .send({ result: true, message: "인증된 회원이 아닙니다" });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      res.redirect("/");
    }

    console.log(token);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(PORT);
});
