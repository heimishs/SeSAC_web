import Select from "./Select";
import Input from "./Input";
import Result from "./Result";
import { useState } from "react";

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "white",
    color: "black",
    content: "text",
  });
  return (
    <div>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </div>
  );
}
