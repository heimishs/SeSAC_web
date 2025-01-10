import { FunctionProps2 } from "./FunctionProps";

export default function PropsMap({ arr }) {
  console.log(arr);
  const testArr = [1, 2, 3, 4, 5];
  //   const newTestArr = testArr.map((el) => {
  //     return el + 10;
  //   });

  const testArr2 = [<div>안녕하세요</div>, <div>제 이름은</div>];
  return (
    <div>
      <h3>Map 사용해보기</h3>
      {testArr}
      <br />
      {/* {newTestArr} */}
      <br />
      {/* {testArr2} */}
      <div></div>
      <ul>
        {arr.map((el, i) => {
          return (
            <li key={i}>
              {el.name}, {el.number}개에 {el.krPrice}원
            </li>
          );
        })}
      </ul>

      {/* <FunctionProps2 name="사과" krPrice={10000} number={4} /> */}
      {arr.map((el, i) => {
        return (
          <FunctionProps2
            key={i}
            name={el.name}
            number={el.number}
            krPrice={el.krPrice}
          />
        );
      })}
    </div>
  );
}
