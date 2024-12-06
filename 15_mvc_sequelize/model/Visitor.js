const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "xzrjs1589",
  database: "sesac",
});

// 전체 목록 조회
exports.getVisitors = (cb) => {
  // // 연결 테스트
  // conn.connect((err) => {
  //   if (err) {
  //     console.error("데이터베이스 연결 실패:", err);
  //     return;
  //   }
  //   console.log("데이터베이스에 성공적으로 연결되었습니다.");
  // });

  // DB연결 후
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }

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

// 특정 데이터 조회
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("visitor table 데이터 하나 조회", rows);
    cb(rows[0]);
  });
};

// 데이터 등록
exports.postVisitor = (data, cb) => {
  // data = req.body commnet,name 정보가 있는
  conn.query(
    `INSERT INTO visitor VALUE(NULL,"${data.name}","${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      /*ResultSetHeader {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 6, 현재 넣어진 id
        info: '',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 0
      } */
      console.log();
      console.log("post", rows);
      cb(rows.insertId);
    }
  );
};

// 데이터 삭제
exports.deleteVisitor = (id, cb) => {
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("모델 특정 데이터 삭제", rows);
    cb();
  });
};

exports.patchVisitor = (data, cb) => {
  console.log("model", data);
  // {id,name,comment}
  conn.query(
    `UPDATE visitor SET name="${data.name}", comment="${data.comment}" WHERE id=${data.id}`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Visitor 수정", rows);
      cb();
    }
  );
};
