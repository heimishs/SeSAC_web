import { useRef, useState } from "react";

export default function SetText() {
  const refVal = useRef<number>(0); // 변수로 사용할 Ref
  const refInput = useRef<HTMLInputElement>(null); // ref 객체를 이용해서 DOM 접근시 null 초기값 전달 필수;

  const [text, setText] = useState("");

  //   refVal 변수를 변경하는 함수
  const ChangeRef = () => {
    refVal.current += 1;
    console.log("refVal:", refVal.current);
  };

  const changeState = () => {
    if (refInput.current) setText(refInput.current.value);
  };

  const checkString = () => {
    console.log("state string", text);
    console.log("input value ref", refInput.current?.value);
  };

  return (
    <div>
      <h2>useRef & useState 사용해보기</h2>
      <input type="text" ref={refInput} onChange={checkString} />
      <button onClick={changeState}>state 변경</button>
      <button onClick={ChangeRef}>ref + 1</button>

      <p>state: {text}</p>
      <p>refVal: {refVal.current}</p>
      <p>refInput의 value: {refInput.current?.value} </p>
    </div>
  );
}
