const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = {}; //{socket.id: nickname}

  io.on("connection", (socket) => {
    console.log(socket.io);
    //chattig1

    // 입장 성공시 입장메세지 보내기
    io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다");

    //chatting2
    // 닉네임 사용2. 닉네임 중복체크
    socket.on("checkNick", (nickname) => {
      if (Object.values(nickInfo).includes(nickname)) {
        //닉네임이 nickInfo 에 이미 존재하는 경우 중복됨
        socket.emit("error", "이미존재하는 닉네임 입니다");
      } else {
        //닉네임이 nickInfo에 존재 하지않는 경우 사용가능
        nickInfo[socket.id] = nickname; // {asdqwf: "닉네임", ...}

        // 중복되지않은 닉네임을 클라이언트로 전달
        socket.emit("entrySuccess", nickname);
      }
    });
    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + "님이 퇴장했습니다");
      // nickInfo객체 해당 키를 객체에서 제거
      delete nickInfo[socket.id];
    });
  });
}

module.exports = socketHandler;
