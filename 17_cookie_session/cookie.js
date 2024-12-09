const express = require("express");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

// 암호화 안된 쿠기
// app.use(cookieParser());
// 암호화된 쿠키
app.use(cookieParser("keys")); //실제로 암호화 쿠키를 사용한다면 비밀키도 .env에서 관리하는것이 좋다

app.set("view engine", "ejs");

// 쿠키설정값
const cookieConfig = {
  /*
        maxAge : 쿠키의 수명, 1000 1초
        expires: 만료날짜 GMT 시간 설정
        httpOnly: 프론트에서 document.cookie로 접속하는 것을 차단 http: 통신으로만 접근가능하게
        path: '/' , '/abc/ 등 원하는 경로에서 쿠키설정가능
        secure: 웹 브라우저와 웹서버와 https로 통신할 경우에만 쿠기 전송
        signed: 쿠키 암호화 여부(true/false)
    */

  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  signed: true,
};

const cookieConfig2 = {
  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: "/abc",
};

app.get("/abc", (req, res) => {
  res.cookie("abc-page", "abc page", cookieConfig2);
  res.render("cookie-another");
});

app.get("/", (req, res) => {
  res.render("cookie");
});

app.get("/getCookie", (req, res) => {
  //   console.log(req.cookies); 일반쿠키
  console.log(req.signedCookies); //암호화 쿠키
  res.send(req.signedCookies);
});
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~", cookieConfig);
  res.send("쿠키 설정완료");
});
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~~~", cookieConfig);
  res.send("쿠키 설정완료");
});

app.listen(PORT, () => {
  console.log();
});

/*

ver1 암호화하지 않았을때
- 미들웨어 >> app.use(cookieParser())
- 쿠키설정 >> res.cookie(쿠키이름, 쿠키값, 쿠키옵션객체)
- 쿠키확인 >> req.cookies 객체에서 확인
- 쿠키삭제 >> res.clearCookie(쿠키이름, 쿠키값, 쿠키옵션객체)
- clearCookie(), cookie()는 응답완료를 하지 않음
  이후에 render, send, redirect, end 등으로 응답 완료 작업을 해야함
- 삭제할때는 이름, 값, 옵션이 일치해야 삭제할수있음


ver2 암호화 했을때
- 미들웨어 >> app.use(cookieParser('임의 문자열'))
- 쿠키설정 >> res.cookie(쿠키이름, 쿠키값, 쿠키옵션객체)
- 쿠키옵션 객체의 signed 값이 true
- 쿠키확인 >> req.signedCookie 객체에서 확인
- 쿠키삭제 >> res.clearCookie(쿠키이름, 쿠키값, 쿠키옵션객체)


*/
