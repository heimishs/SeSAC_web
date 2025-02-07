const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = 8080;
/* middleware */
app.set("view engine", "ejs");

/* api */
app.get("/", (req, res) => {
  res.render("talk_dm");
});

/* socket */

const nickInfo = {};
// {socket:Id: nickname, ...}

io.on("connection", (socket) => {
  // [닉네임 사용]-2
  socket.on("checkNick", (nickname) => {
    // { RHHKyb6tHwpG1FjoAAAJ: 'ㅇㅇㅇㅇ' }
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      // 중복된 닉네임일 때
      // (1) 입장 실패
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      // 중복되지 않은 닉네임
      nickInfo[socket.id] = nickname; // 현재 클라이언트 닉네임 정보 넣기
      // (2) 입장 성공, 내 닉네임 정보 전달
      socket.emit("entrySuccess", nickname);
      // (3) 입장 성공, 입장알림메세지 전체에게 전달
      socket.broadcast.emit("notice", `${nickname}님이 입장하셨습니다.`);
      // (4) 입장 성공, 나를 포함한 전체 client 에게 전체 닉네임 정보 전달
      io.emit("updateNicks", nickInfo);
    }
  });

  console.log("connected! >>", socket.id, socket.rooms);
  //   나를 제외한 모든 클라이언트에게 입장 공지 전송
  // socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다`);

  //   4-2 메세지를 하나의 클라이언트에게 받고 전체 클라이언트에게 전송해주는 역할
  socket.on("send", (msgData) => {
    // msgData:{myNick, dm, msg}
    // console.log(`${socket.id}:${msg}`);

    console.log(msgData);

    if (msgData.dm === "all") {
      // 전체에게 메세지 보내기
      io.emit("message", { id: msgData.myNick, message: msgData.msg });
    } else {
      let dmSocketId = msgData.dm;
      // 특정 클라이언트 에게만 메세지 보내기 (나를 제외함)
      io.to(dmSocketId).emit("message", {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,

        // 나에게만 보내기
      });
      socket.emit("message", {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,
      });
    }
  });

  // 클라이언트 퇴장공고
  socket.on("disconnect", () => {
    io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다`);
    delete nickInfo[socket.id];
    io.emit("updateNicks", nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
