import { useRef, useState } from "react";

export default function Section1() {
  const inputWriter = useRef("");
  const inputTitle = useRef("");

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    // 새로운 아이템 추가
    const newItem = {
      id: list.length + 1, // 새로운 id +1하여 중복되지않도록
      writer: writer, // 작성자
      title: title, // 제목
    };

    if (inputWriter.current.value != "" && inputTitle.current.value != "") {
      // 리스트 상태 업데이트하면서 끝에 새 데이터를 추가함
      setList([...list, newItem]);

      // 입력값 초기화
      setWriter("");
      setTitle("");
    } else {
      inputWriter.current.focus();
    }
  };

  const keyEnter = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };

  return (
    <>
      <div>
        <label>
          작성자:
          <input
            type="text"
            ref={inputWriter}
            value={writer}
            onChange={(e) => {
              setWriter(e.target.value);
            }}
          />
        </label>
        <label>
          제목:
          <input
            type="text"
            ref={inputTitle}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              keyEnter(e);
            }}
          />
        </label>
        <button onClick={addList}>작성</button>

        <div>
          <table width={"500px"} border={"1"}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {list.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el.id}</td>
                    <td>{el.writer}</td>
                    <td>{el.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
