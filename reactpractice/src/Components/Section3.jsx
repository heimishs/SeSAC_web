import { useEffect, useRef, useState } from "react";

const Quiz = () => {
  const input = useRef();
  const [value1, setValue1] = useState("1");
  const [operator, setOperator] = useState("+");
  const [value2, setValue2] = useState("5");

  const result = () => {
    console.log(input.current.value);
    if (operator === "+") {
      console.log(value1 + value2);
      Number(input.current.value) === value1 + value2
        ? alert("정답😁")
        : alert("오답🤔");
    } else if (operator === "-") {
      console.log(value1 - value2);
      Number(input.current.value) === value1 - value2
        ? alert("정답😁")
        : alert("오답🤔");
    } else {
      console.log(value1 * value2);
      Number(input.current.value) === value1 * value2
        ? alert("정답😁")
        : alert("오답🤔");
    }
  };

  useEffect(() => {
    const operatorRand = Math.floor(Math.random() * 3) + 1;
    if (operatorRand === 0) {
      setOperator("+");
    } else if (operatorRand === 1) {
      setOperator("-");
    } else {
      setOperator("*");
    }
    setValue1(Math.floor(Math.random() * 10));
    setValue2(Math.floor(Math.random() * 10));
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span>{value1}</span>
        <span>{operator}</span>
        <span>{value2}</span>
        <br />
        <input type="text" ref={input} />
        <br />
        <button onClick={result}>정답 제출</button>
      </div>
    </>
  );
};

export default function Section3() {
  return (
    <>
      <Quiz />
    </>
  );
}
