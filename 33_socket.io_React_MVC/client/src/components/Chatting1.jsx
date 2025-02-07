import { useEffect, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});

export default function Chatting() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me",
      content: "내가보낸 메시지",
    },
    {
      type: "other",
      content: "다른사람이 보낸 메시지",
    },
    {
      type: "notice",
      content: "공지사항 메시지(입장, 퇴장)",
    },
  ]);

  useEffect(() => {
    initSocketConnect();

    // 문제점1 : newChatList를 만들때  chatList가 mount된 시점의 chatList
    // socket.on("notice", (notice) => {
    //   const newChatList = [...chatList, { type: "notice", content: notice }];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    // chatList가 변경될 때 마다 이벤트 핸들러 재등록
    // 기존 chatList가 기준이 아닌 변경된 charList가 기준이 될 수 있도록
    // 문제점2 이벤트 핸들러 재등록

    const noticeHandler = (notice) => {
      const newChatList = [...chatList, { type: "notice", content: notice }];
      setChatList(newChatList);
    };

    console.log("이벤트 등록");
    socket.on("notice", noticeHandler);

    // socket.on("notice", (notice) => {
    //   const newChatList = [...chatList, { type: "notice", content: notice }];
    //   setChatList(newChatList);
    // });

    //해결 2
    // 클린업 함수는 unmount 뿐만 아니라
    // useeffect가 다시 실행되기 직전에도 실행
    return () => {
      console.log("이벤트 해제");
    };
  }, [chatList]);

  const handleSubmit = (e) => {
    e.preventDefault(); //새로고침막기
  };

  return (
    <>
      <ul>
        <li>채팅 UI(실습2번)</li>
        <li>입장 공지(실습3번)</li>
      </ul>

      <div class="wrap">
        <header>
          <p>A번 대화방입니다</p>
        </header>
        <main>
          {chatList.map((chat, key) =>
            chat.type === "notice" ? (
              <Notice chat={chat} key={key} />
            ) : (
              <SpeechChat chat={chat} key={key} />
            )
          )}
        </main>
        <footer>
          <div>
            <form id="msg-form" class="msg-form" onSubmit={handleSubmit}>
              <div class="inputBox">
                <select id="dm-select"></select>
                <input
                  type="text"
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                />
                <button>전송</button>
              </div>
            </form>
          </div>
        </footer>
      </div>
    </>
  );
}
