import { useState } from "react";
import { UserContext } from "../../context/UserContext";

// app.js 에서 state를 관리하는게 아닌 해당 state를 관리할 provider 를 따로 선언
export default function UserProvider({ children }) {
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
