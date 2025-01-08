import { useState } from "react";

export default function EventHandler() {
  const [colorTex, setcolorTex] = useState("검정색 글씨");
  const [colorVal, setColorVal] = useState("black");

  const red = () => {
    setcolorTex("빨간색 글씨");
    setColorVal("red");
  };

  const blue = () => {
    setcolorTex("파란색 글씨");
    setColorVal("blue");
  };

  return (
    <div>
      <h1 style={{ color: colorVal }}>{colorTex}</h1>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
}
