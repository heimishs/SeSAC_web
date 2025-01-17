import { use, useRef, useState } from "react";

export default function Section2() {
  const divBox = useRef();
  const inputColor = useRef();
  const [color, setColor] = useState({ backgroundColor: "none" });

  const changeColor = () => {
    setColor({ backgroundColor: inputColor.current.value });
    inputColor.current.value = "";
    inputColor.current.focus();
  };

  return (
    <>
      <div style={color} ref={divBox}>
        <input type="text" ref={inputColor} />
        <button onClick={changeColor}>색 적용</button>
      </div>
    </>
  );
}
