import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 3. 스토어를 설정 store가 전역 상태 관리 변수
// module/index.js 에서 통합한 rootreducer를 value로 전달
const store = configureStore({ reducer: rootReducer });

//4. App 컴포넌트 자식 컴포넌트 모두에서 사용가능한 하도록
// Store props로 store 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
