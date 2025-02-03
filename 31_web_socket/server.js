const express = require("express");
const ws = require("ws");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(port, () => {
  console.log("서버작동");
});

// console.log(server); // 서버객체

// 접속하는 클라이언트마다 고유한 값을 주기 위한함수
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  // console.log("timestapm", timestamp);
  const reandomString = Math.random().toString(36).substring(2);
  // console.log(reandomString);

  return timestamp + reandomString;
}

// console.log("id", generateUniqueId());
// console.log("asdasd".substring(2));
// console.log("asdasd".substring(2, 5));

const sockets = [];
const wsServer = new ws.Server({ server });

/*
ws 모듈 이벤트
-connection: 클라이언트와 웹소켓 서버가 연결되었을 때
-message: 클라이언트에게 메세지를 받았을 때
-error: 연결중 오류
-close: 클라이언트와 연결 종료
*/

wsServer.on("connection", (socket) => {
  // console.log(socket); // 연결될 하나의 클라이언트에 대한 정보
  const clientId = generateUniqueId();
  console.log(`클라이언트 id:[${clientId}] 연결됨`);
  sockets.push(socket); // 접속한 클라이언트(브라우저) socket을 배열에 추가

  socket.on("message", (msg) => {
    // 메세지는 버퍼 객체
    // console.log(msg.toString());
    // console.log("--------------------");
    // console.log(msg);
    console.log(`${clientId} 에게 받은 메세지 : ${msg}`); // msg.toString() 암시적으로 호출

    // socket.send("안녕하세요?"); // 현재 연결된 소켓에게만 메세지 보냄 (마지막으로 연결된)

    // 연결된 모든 클라이언트에 보내기
    sockets.forEach((clinet) => {
      clinet.send(`${msg}`);
    });
  });
});
