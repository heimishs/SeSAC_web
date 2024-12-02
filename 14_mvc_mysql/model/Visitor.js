const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "xzrjs1589",
  database: "sesac",
});

exports.getVisitors = (cb) => {
  // 연결 테스트
  conn.connect((err) => {
    if (err) {
      console.error("데이터베이스 연결 실패:", err);
      return;
    }
    console.log("데이터베이스에 성공적으로 연결되었습니다.");
  });

  // 쿼리 예시
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    console.log("쿼리 결과:", rows);
    cb(rows);
  });

  // conn.query("SELECT * FROM visitor", (err, rows) => {
  //   console.log(conn);
  //   // if (err) {
  //   //   throw err;
  //   // }

  //   console.log("fdd", rows);
  //   cb(rows);
  // });
};
