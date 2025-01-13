import { useRef, useState } from "react";

// DOM 요소를 선택하기 위한 ref
export function RefFunc1() {
  // ref 객체만들기
  const inputRef = useRef();

  //   ref.current 에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <div>
      {/* 선택하고싶은 태그에 ref 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}

// 변수처럼 사용하는 ref
export function RefFunc2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    ref.current += 1;
    console.log("ref", ref.current);
  };
  const plusState = () => {
    setState(state + 1);
    console.log("state", state);
  };
  const plusVar = () => {
    variable += 1;
    console.log("var", variable);
  };

  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVar}>plus variable</button>
    </div>
  );
}
