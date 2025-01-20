import { useContext } from "react";
import { ThmemContext } from "../context/ThemeContext";

export default function Box() {
  const themeContext = useContext(ThmemContext);
  console.log(themeContext);
  return (
    <div>
      <h3>ThemeContext 사용하기</h3>
      Theme: {themeContext}
    </div>
  );
}
