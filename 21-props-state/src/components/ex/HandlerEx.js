import { useState } from "react";

export default function HandlerEx() {
  const [textVal, setTextVal] = useState("Hello World!");
  const cha = () => {
    setTextVal("Goodbye World!");
  };
  return (
    <div>
      <h2>{textVal}</h2>
      <button onClick={cha}>클릭</button>
    </div>
  );
}
