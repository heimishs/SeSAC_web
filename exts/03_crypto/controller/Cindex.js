// TODO: 컨트롤러 코드

const { Op } = require("sequelize");
const { User } = require("../models");
const session = require("express-session");
const crypto = require("crypto");

// GET /user
exports.index = (req, res) => {
  res.render("index", {
    islogin: req.session.islogin,
    id: req.session.code,
    name: req.session.name,
  });
};
exports.login = (req, res) => {
  // 로그인 상태 체크
  if (req.session.islogin) {
    res.redirect("/");
  } else {
    res.render("login");
  }
};
exports.signup = (req, res) => {
  // 로그인 상태 체크
  if (req.session.islogin) {
    res.redirect("/");
  } else {
    res.render("signup");
  }
};

// 로그인 로직
exports.auth_login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { userid: req.body.id },
    });

    if (user) {
      const { id, pw, name, userid, salt } = user.dataValues;

      if (userid === req.body.id && Dencoding(req.body.pw, salt, pw)) {
        // 세션 저장
        req.session.code = id;
        req.session.name = name;
        req.session.userid = userid;
        req.session.islogin = true;

        // 성공 응답
        return res.json({ success: true });
      } else {
        // 패스워드 미일치
        return res.json({ message: "아이디 및 패스워드가 일치하지않습니다." });
      }
    } else {
      // 아이디 미일치
      return res.json({ message: "아이디 및 패스워드가 일치하지않습니다." });
    }
  } catch (err) {
    console.error("/auth_login controller ERROR", err);
    return res.status(500).send("Server Error");
  }
};

// 회원생성 로직
exports.create_signup = async (req, res) => {
  try {
    // 암호화진행 후 객체의 패스워드를 수정
    const en_data = Encoding(req.body.pw);
    req.body.pw = en_data.en_password;
    req.body.salt = en_data.en_slat;
    // DB에 암호화된 계정을 추가
    const newUser = await User.create(req.body);
    // 메인 경로로 리다이렉트
    res.redirect("/");
  } catch (err) {
    console.log("/create_signup controller ERROR", err);
    res.status(500).send("Server Error");
  }
};

// 로그아웃 세션삭제
exports.logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log("/logout > session.destroy controller ERROR", err);
        res.status(500).send("Server Error");
      } else {
        res.clearCookie("connect.sid"); // 세션 쿠키도 같이삭제
        res.send({});
      }
    });
  } catch (err) {
    console.log("/logout controller ERROR", err);
    res.status(500).send("Server Error");
  }
};

// 패스워드 암호화
function Encoding(password) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 10000;
  const keylen = 64;
  const digest = "sha512";

  try {
    const passwordEncoding = crypto.pbkdf2Sync(
      password,
      salt,
      iterations,
      keylen,
      digest
    );

    return { en_password: passwordEncoding.toString("base64"), en_slat: salt };
  } catch (err) {
    console.log("Encoding controller ERROR", err);
  }
}

// 로그인 패스워드 암호화 진행 후 검증
function Dencoding(password, db_salt, db_password) {
  const iterations = 10000;
  const keylen = 64;
  const digest = "sha512";

  try {
    const passwordEncoding = crypto.pbkdf2Sync(
      password,
      db_salt,
      iterations,
      keylen,
      digest
    );

    if (passwordEncoding.toString("base64") === db_password) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log("Dencoding controller ERROR", err);
  }
}
