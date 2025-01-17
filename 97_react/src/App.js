import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Student from "./Components/Student";
import "./Style/common.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="/student/:codingon" element={<Student />} />
        <Route path="/student/:new" element={<Student />} />
      </Routes>
    </>
  );
}

export default App;
