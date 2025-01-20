import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThmemContext } from "./context/ThemeContext";
import { AgeContext } from "./context/AgeContext";
import { UserContext } from "./context/UserContext";
import UserProvider from "./components/provider/UserProvider";
import AgeProvider from "./components/provider/AgeProvider";

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  return (
    <>
      <ThmemContext.Provider value={"Dark"}>
        <Box />
      </ThmemContext.Provider>

      <UserProvider>
        <AgeProvider>
          <Profile />
        </AgeProvider>
      </UserProvider>

      {/* <UserContext.Provider value={{ name, setName }}>
        <AgeContext.Provider value={{ age, setAge }}> */}
      {/* <Profile /> */}
      {/* </AgeContext.Provider>
      </UserContext.Provider> */}
    </>
  );
}

export default App;
