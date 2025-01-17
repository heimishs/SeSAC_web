import { useCallback, useState } from "react";

export default function UseCallbackEx2() {
  const [text, setText] = useState("");

  /* 
  
  useState 대신 callback 쓴다고해서 성능이 크게 최적화된다고 볼 수 없고
  객체를 다루고 작업량이 많은 경우 callback이나 memo를 사용하는게 좋음
  
  객체값을 사용할땐 usecallback 또는 useMemo 를 사용하는게 좋음
  
  */
  //   렌더링 될때마다 메모리에 새로 다시저장됨 메모리 주소값이 매순간 변경됨
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  //   최초 렌더링이 되었을때만 메모리에 저장됨
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <div>
        <input type="text" onChange={onChangeText} />
        <p>작성한 값:{text}</p>
      </div>
    </>
  );
}
