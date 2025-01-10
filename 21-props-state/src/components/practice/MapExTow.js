import { useState } from "react";

export default function MapExTow() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      title: title,
      name: name,
    });
    setList(newList);
    setName("");
    setTitle("");
  };
  return (
    <div>
      <div>
        작성자:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        제목:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={addList}>작성</button>
      </div>

      <div>
        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input type="text" placeholder="검색어" />
        <button>검색</button>

        <div>
          <table width={500} border={1}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {list.map((el) => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
