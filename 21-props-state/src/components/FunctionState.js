import { useState } from "react";

export default function FunctionState() {
  //   바닐라 방식
  //   let apple = "사과";
  //   const inEng = () => {
  //     // apple = "apple";
  //     const content = document.querySelector(".state");
  //     // console.log(apple);
  //     content.textContent = "apple";
  //   };
  //   //   state를 사용하기
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };
  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       <button onClick={inEng2}>영어로변경</button>
  //     </div>
  //   );
  //   바닐라 js 사과 > 애플 > 사과 > 애플

  //   const chang = () => {
  //     const content = document.querySelector(".state");
  //     content.innerText === "사과"
  //       ? (content.innerText = "apple")
  //       : (content.innerText = "사과");
  //   };

  //   리액트 방식
  const [showEng, setShowEng] = useState(true);
  const chang = () => {
    setShowEng(!showEng);
  };

  return (
    <div>
      <div className="state">{showEng ? "apple" : "사과"}</div>
      <button onClick={chang}>언어변경</button>
    </div>
  );
}
