import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h4>Box1입니다.</h4>
      <Box2 />
    </div>
  );
}

export function Box2() {
  //   const state = useSelector((state) => state);
  //   combineReducers 의 인자로 전달했던 객체의 key..
  //   console.log(state); {isData: false, count: 1}

  //   여러 개가 저장되어 있는 store에서 "특정한 state" 만 가지고 오는 것
  const isData = useSelector((state) => state.isData);
  const count = useSelector((state) => state.count);
  //   console.log(isData);
  //   console.log(count);

  //   useSelector store에 저장되어 있는 state 가져오기
  //   useDispatch action을 전달하기 위한 dispatch 함수 제공
  //    -dispatch: action을 reducser에 전달해주는 함수
  //   여러개가 저장되어 있는 store에서 특정한 state만 가지고 오는 것
  const dispatch = useDispatch();
  return (
    <div style={{ border: "2px dashed skyblue", padding: "10px" }}>
      <h4>Box2입니다.</h4>
      <p>count: {count}</p>
      <p>isData: {isData.toString()}</p>
      <button onClick={() => dispatch({ type: "count/INCREMENT" })}>
        count +1
      </button>
      <button onClick={() => dispatch({ type: "count/DECREMENT" })}>
        count -1
      </button>
      <br />
      <br />
      <h1>action 리턴 함수 사용</h1>
      <button onClick={() => dispatch(countPlus())}>count +1</button>
      <button onClick={() => dispatch(countMinus())}>count -1</button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
    </div>
  );
}
