import { useEffect, useState } from "react";

const Mycomponent = ({ number }) => {
  const [text, setText] = useState("");
  /*
    useEffect (effect[,])
    effect : 콜백함수
    dependency_arr(의존성 배열)
    의존성 배열에 있는 데이터가 변하면 콜백 함수 실행
    []: Mount 되었을 때만 동작
    생략: mount, update시 언제나 동작
    [data]:Mount, data 가 업데이트 되었을때 동작
    */

  // 마운트 시점 동작
  useEffect(() => {
    console.log("함수형 컴포넌트");
  }, []);

  //   언마운트 시점 동작 마운트랑 같이 써도 상관없음
  useEffect(() => {
    // console.log("함수형 컴포넌트");
    return () => {
      console.log("언마운트 시점 실행");
    };
  }, []);

  //   업데이트 시점에 동작 text number 스테이트가 바뀔 때 모두 실행됨
  useEffect(() => {
    console.log("함수형 컴포넌트 업데이트");
  });

  //   특정 state 업데이트 마운트 시점 포함 업데이트
  useEffect(() => {
    console.log("함수형 컴포넌트 업데이트 text 변경시");
  }, [text]);

  return (
    <>
      <p>MyComponet: {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <Mycomponent number={number} />}
    </>
  );
};

export default LifeCycleFunc;
