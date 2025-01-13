import { useRef, useState } from "react";

const comment = [
  {
    id: 1,
    writer: "민수",
    title: "내용",
  },
];

export default function Refs() {
  const inputWriter = useRef("");
  const inputTitle = useRef("");

  const addComment = (e) => {
    if (inputWriter.current.value != "" && inputTitle.current.value != "") {
      if (e.key === "Enter") {
        console.log("asd");
      }
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input type="text" ref={inputWriter} />
        <label htmlFor="title">제목: </label>
        <input type="text" ref={inputTitle} onKeyDown={addComment} />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
