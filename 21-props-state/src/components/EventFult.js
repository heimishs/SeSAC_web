import { useState } from "react";

export default function EventFult() {
  const [fult, setFult] = useState("./peach.jpg");
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("black");
  const [text, setText] = useState("");
  let style = {
    backgroundColor: "black",
    display: "inlineBlock",
    padding: "10px",
    color: "#fff",
  };

  const changeFult = (e) => {
    const selectBox = e.target;
    let selectValue = selectBox.options[selectBox.selectedIndex].value;
    setFult(`./${selectValue}.jpg`);
  };

  const changeColor = (e) => {
    const selectBox = e.target;
    let selectValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectValue);
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
          <select onChange={changeColor}>
            <option value="black">검정</option>
            <option value="red">빨강</option>
            <option value="white">하양</option>
            <option value="orange">주황</option>
            <option value="green">초록</option>
          </select>
        </label>
        <label>
          글자색:
          <select>
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
          <input type="text" />
        </label>
        <br />
        <img style={{ width: "300px" }} src={fult} />
        <br />
        <br />
        <br />
        <span style={style}>text</span>
      </div>
    </div>
  );
}
