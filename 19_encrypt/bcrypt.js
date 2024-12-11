const bcrypt = require("bcrypt");

const saltRound = 10;

function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRound);
}

function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw); //true, fasle
}

const orignalPw = "1234";
const hashedPw = hashPw(orignalPw);
console.log("암호화", hashedPw);

// 비밀번호 일치여부
const isMatch = comparePw("1234", hashedPw);
const isMatch2 = comparePw("12345", hashedPw);
console.log("암호화", hashedPw);
console.log("일치여부", isMatch);
console.log("일치여부", isMatch2);
