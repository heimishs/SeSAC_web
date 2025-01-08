import { useState } from "react";

export default function FunctionEx() {
  let [numVal, setNumVal] = useState(0);
  const increase = () => {
    setNumVal(++numVal);
  };
  const decrease = () => {
    setNumVal(numVal - 2);
  };
  return (
    <div>
      <p>{numVal}</p>
      <button onClick={increase}>1++</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
