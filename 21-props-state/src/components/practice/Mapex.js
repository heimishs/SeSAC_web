import { useState } from "react";

export default function MapEx() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
  ]);

  const addList = () => {
    const newList = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: name,
      email: email,
    });
    setList(newList);
  };

  // 요소에서 el.id 로 id값을 받음
  const delList = (id) => {
    const newList = list.filter((data) => {
      // 받은 id 배열을 제외한 배열을 반환
      return data.id !== id;
    });
    setList(newList);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          // Input에 입력을 감지하면 입력한 값 setname에 실시간 저장
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onKeyDown={(e) => {
          // 엔터를 눌렀을때 감지
          if (e.key === "Enter") {
            console.log("qwe");
            addList();
          }
        }}
        onChange={(e) => {
          // Input에 입력을 감지하면 입력한 값 setemail에 실시간 저장
          setEmail(e.target.value);
        }}
      />
      <button type="button" onClick={addList}>
        등록
      </button>
      <ul>
        {list.map((el) => {
          return (
            <li
              style={{ listStyle: "none" }}
              key={el.id}
              onDoubleClick={() => delList(el.id)} // 더블 클릭시 클릭한 요소의 key (id값을 매개변수로 전달)
            >
              <h2>
                {el.name}: {el.email}
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
