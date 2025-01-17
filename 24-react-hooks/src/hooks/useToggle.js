import { useState } from "react";

export default function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);
  const toggleValue = () => setValue(!value);

  //   현재의 value 값과, 반대 전환 함수를 배열에 담아서 리턴
  return [value, toggleValue];
}
