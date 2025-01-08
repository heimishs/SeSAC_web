import { useState } from "react";

export default function EventAdd() {
  const style = {
    color: "red",
    fontSize: "3rem",
  };

  let [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <div>
        <span style={style}>{num}</span>
        <span style={style}>{num < 8 ? "😀" : "😎"}</span>
        <br />
        <button onClick={increase}>1증가</button>
        <button onClick={decrease}>1감소</button>
      </div>
    </div>
  );
}
