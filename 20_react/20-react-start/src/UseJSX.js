// 컴포넌트 만들기
export default function UseJSX() {
  //   return <h1>hello react</h1>;
  //   inline style 사용해보기
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "yellow",
  //     border: "1px solid gray",
  //     marginLeft: "5px",
  //     display: "inline-block",
  //   };
  //   return (
  //     <div>
  //       <div style={{ color: "#fff", backgroundColor: "red" }}>first</div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //     </div>
  //   );
  //  JS 문법 사용해보기
  //   let isShow = true;
  //   let str = "allie";
  //   return (
  //     <div>
  //       <div style={{ backgroundColor: "red" }}>
  //         {isShow ? "isShow가 true 일때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "orange" }}>
  //         {/* isShow가 true 라면 뒤의 문자열이 렌더링됨 */}
  //         {isShow && "isShow가 true 일때 보임"}
  //       </div>
  //       <div style={{ backgroundColor: "yellow" }}>
  //         {!isShow ? "isShow가 true 일때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "green" }}>
  //         {!isShow && "isShow가 true 일때 보임"}
  //       </div>
  //       <div>{str}님 안녕하세요</div>
  //     </div>
  //   );
  //   onclick 사용
  function myfunc() {
    alert("안녕 내 이름은 엘리야");
  }

  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      <span onClick={myfunc}>안녕하세요</span>
      <span
        onClick={() => {
          myfunc();
        }}
      >
        안녕하세요
      </span>
      <br />

      {/* 매개변수를 넣어줘야하는 함수를 호출할땐 화살표 함수를 사용 */}
      <span onClick={() => addNum(8, 5)}>
        8+5의 결과를 alert로 확인해보세요.
      </span>
    </div>
  );
}

// export default UseJSX
