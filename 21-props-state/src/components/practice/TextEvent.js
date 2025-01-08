import { useState } from "react";

export default function TextEvent() {
  const [textVal, setTextVal] = useState(true);
  const toggle = () => {
    setTextVal(!textVal);
  };

  return (
    <div>
      <div>
        <button onClick={toggle}>{textVal ? "사라져라" : "보여라"}</button>
        <br />
        <h1>{textVal ? "안녕하세요" : ""}</h1>
      </div>
    </div>
  );
}
