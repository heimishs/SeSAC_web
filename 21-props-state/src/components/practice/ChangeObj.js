import { useState } from "react";

export default function ChangeObj(props) {
  console.log(props);
  const [index, setIndex] = useState(0);

  const change = () => {
    console.log(index, props.objArr.length);
    if (index < props.objArr.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div>
      <p>이름: {props.objArr[index].name}</p>
      <p>나이: {props.objArr[index].age}</p>
      <p>별명: {props.objArr[index].nickName}</p>
      <button onClick={change}>멤버 바꾸기</button>
    </div>
  );
}
