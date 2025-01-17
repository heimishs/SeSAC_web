import { useState } from "react";

export default function EventFult() {
  const [fult, setFult] = useState("./peach.jpg");
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [text, setText] = useState("text");

  const changeFult = (e) => {
    const selectBox = e.target;
    const selectValue = selectBox.options[selectBox.selectedIndex].value;
    setFult(`./${selectValue}.jpg`);
  };

  const changeBackgroundColor = (e) => {
    const selectBox = e.target;
    const selectValue = selectBox.options[selectBox.selectedIndex].value;
    setBackgroundColor(selectValue);
  };

  const changeTextColor = (e) => {
    const selectBox = e.target;
    const selectValue = selectBox.options[selectBox.selectedIndex].value;
    setTextColor(selectValue);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <label>
          과일:
          <select onChange={changeFult}>
            <option value="peach">복숭아</option>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="grape">청포도</option>
          </select>
        </label>
        <label>
          배경색:
          <select onChange={changeBackgroundColor}>
            <option value="black">검정</option>
            <option value="red">빨강</option>
            <option value="white">하양</option>
            <option value="orange">주황</option>
            <option value="green">초록</option>
          </select>
        </label>
        <label>
          글자색:
          <select onChange={changeTextColor}>
            <option value="black">검정</option>
            <option value="red">빨강</option>
            <option value="white">하양</option>
            <option value="orange">주황</option>
            <option value="green">초록</option>
          </select>
        </label>
        <br />
        <label>
          내용:
          <input type="text" onChange={handleTextChange} />
        </label>
        <br />
        <img style={{ width: "300px" }} src={fult} alt="selected fruit" />
        <br />
        <br />
        <br />
        <span
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
            display: "inline-block",
            padding: "10px",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
