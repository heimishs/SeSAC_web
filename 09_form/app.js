const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 > 응답 */
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/getForm", function (req, res) {
  // query로 폼데이터를 확인할 수 있다
  console.log(req.query);
  // res.send("get 요청 성공");
  // title "GET"
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});

// form validation post 요청
app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("js유효성검사");
});

// 실습문제
// practice1 으로 갔을때, practice1.ejs 화면을 보여주기
// practice2 으로 갔을때, practice2.ejs 화면을 보여주기
// practice1, practice2 ejs에는 각각 get, post를 통한 폼 요청이 있고
// 결과창에는 practice_result.ejs 를 공통으로 사용

// 1 /practice 에 대하 get 요청

// 2. /practice2 에 대한 get 요청

// 3. 주소지정 form get 요청

// 4. 주소지정 form post 요청

app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

app.get("/practice_result", (req, res) => {
  res.render("practice/practice_result", {
    name: req.query.name,
    sex: req.query.sex,
    date_year: req.query.year,
    date_mon: req.query.mon,
    date_day: req.query.day,
    hb: req.query.hb,
    color: req.query.color,
    number: req.query.number,
    msg: "fighting!",
  });
});

app.post("/practice_result", (req, res) => {
  console.log(req.body);
  res.render("practice/practice_result", {
    name: req.body.name,
    sex: req.body.sex,
    date_year: req.body.year,
    date_mon: req.body.mon,
    date_day: req.body.day,
    hb: req.body.hb,
    color: req.body.color,
    number: req.body.number,
    msg: "fighting!",
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
