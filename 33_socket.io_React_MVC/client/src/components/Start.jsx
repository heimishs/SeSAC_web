import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Start() {
  const initSocketConnect = () => {
    // console.log(socket.initSocketConnect);
    if (!socket.connected) socket.connect(); // 소켓과 접속하는 코드
  };

  useEffect(() => {
    initSocketConnect();
  }, []);
  return (
    <>
      <h2>소켓통신</h2>
    </>
  );
}
