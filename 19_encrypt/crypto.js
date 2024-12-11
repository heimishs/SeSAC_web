const crypto = require("crypto");
/*
단방향 암호화 구현 > 복호하 불가능 해쉬값으로 검증
createHase(알고리즘)
pdkdf2Sync(비밀번호,솔트, 반복횟수, 키의길이, 알고리즘)
*/

// 1-1 createHash(알고리즘).update(평문).digest(인코딩방식)
// 인코딩 방식 base64, hex, ascii, binary
// 암호화된 문장을 우리가 읽을 수 있는 문자열로 인코딩 하는것
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log(createHashPW("1234"));
console.log(createHashPW("1234"));
console.log(createHashPW("1234"));
console.log(createHashPW("1234."));

// 1-2 pdkdf2Sync(비밀번호,솔트, 반복횟수, 키의길이, 알고리즘).toString("인코딩방식")

function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  //   솔트값이 매번 변하기때문에 맞는 솔트값을 같이 내보냄 암호화 키가 다 틀림
  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm)
    .toString("base64"); //buffer 객체를 리턴하는중
  return { salt: salt, hash: hash };
}

function checkPw(inputPw, savedSalt, saveHash) {
  const iterations = 100; //암호화 설정값과 같아야함
  const keylen = 64; //암호화 설정값과 같아야함
  const algorithm = "sha512"; //암호화 설정값과 같아야함

  //   모든인자가 같다면 해쉬값도 같다
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");

  return hash === saveHash;
}

console.log("pdkdf2Sync:", saltAndHashPw("1234"));

const realPw = "qwer1234";
const data = saltAndHashPw(realPw);
const { salt: DB_salt, hash: DB_hash } = data;
console.log("===일치여부");
const isMatch = checkPw("qwer1234!", DB_salt, DB_hash);
const isMatch2 = checkPw("qwer1234", DB_salt, DB_hash);
console.log(isMatch);
console.log(isMatch2);

// ===========================================
// 양방향

// createCipheriv: 암호화
// createDecipheriv:복호화

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //비밀수
const algorithm = "aes-256-cbc";
const originalMessage = "hello world";

// 암호화
function encrypt(text) {
  // 암호화객체생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  //   실제 데이터 암호화 (평문, 입력인코딩, 출력인코딩)
  let encryted = cipher.update(text, "utf8", "base64");
  //   최종결과 생성
  encryted += cipher.final("base64");
  return encryted; // 암호화된 데이터
}

console.log(encrypt(originalMessage));
console.log(encrypt(originalMessage));

// 복호화
function dencrypt(encrytedText) {
  // 복호화객체생성
  const deciher = crypto.createDecipheriv(algorithm, key, iv);

  //   실제 데이터 암호화 (평문, 입력인코딩, 출력인코딩)
  let decrypted = deciher.update(encrytedText, "base64", "utf8");

  // 최종결과
  decrypted += deciher.final("utf8");
  return decrypted;
}

const encrMess = encrypt(originalMessage);
console.log("암호화", encrMess);

const dencrpy = dencrypt(encrMess);
console.log("복호화", dencrpy);
