const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log(socket.io);

    socket.on("Test", (str) => {
      socket.emit("Test2", "메세지 잘받았습니다");
    });

    socket.on("send", (msg) => {
      socket.emit("rcv", msg);
    });

    socket.on("bye", (str) => {
      socket.emit("bye2", "잘가요");
    });
    socket.on("study", (str) => {
      socket.emit("study2", "공부중");
    });
    socket.on("hello", (str) => {
      socket.emit("hello2", "안녕하세요");
    });
  });
}

module.exports = socketHandler;
