import CustomHook from "./Components/CustomHook";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";
import UseCallbackEx1 from "./Components/UseCallbackEx1";
import UseCallbackEx2 from "./Components/UseCallbackEx2";
import UseMemo1 from "./Components/UseMemo1";
import UseMemoObj from "./Components/UseMemoObj";
import UseReducer from "./Components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("hook 배워보기");

  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj /> */}
      {/* <UseCallbackEx1 /> */}
      {/* <UseCallbackEx2 /> */}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <Form /> */}
      <Form2 />
    </>
  );
}

export default App;
