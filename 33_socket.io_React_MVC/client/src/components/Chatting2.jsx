import { useEffect, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});

export default function Chatting2() {
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

  const [nickName, setNickName] = useState(null); // 나의 닉네임 저장
  const [nickNameInput, setNickNameInput] = useState(""); // nickname input value 관리

  useEffect(() => {
    // initSocketConnect();
  }, []);

  useEffect(() => {
    const noticeHandler = (notice) => {
      const newChatList = [...chatList, { type: "notice", content: notice }];
      setChatList(newChatList);
    };

    console.log("이벤트 등록");
    socket.on("notice", noticeHandler);

    return () => {
      console.log("이벤트 해제");
    };
  }, [chatList]);

  const handleSubmit = (e) => {
    e.preventDefault(); //새로고침막기
  };

  const join = () => {
    initSocketConnect();

    // 닉네임 사용1. 중복체크를 위해 닉네임을 서버로 전달
    socket.emit("checkNick", nickNameInput);
  };

  useEffect(() => {
    socket.on("error", (errmsg) => {
      alert(errmsg);
    });

    socket.on("entrySuccess", (myNick) => {
      // nickname의 초기값 null
      // 입장에 성고앟면 nickname:string
      setNickName(myNick);
    });
  }, []);
  return (
    <>
      <ul>
        <li>닉네임 받고 중복체크(서버)</li>
        <li>퇴장공고</li>
      </ul>

      {!nickName ? (
        <div className="entry-box">
          <input
            type="text"
            id="nickname"
            placeholder="닉네임 입력"
            value={nickNameInput}
            onChange={(e) => setNickNameInput(e.target.value)}
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
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
      )}
    </>
  );
}
