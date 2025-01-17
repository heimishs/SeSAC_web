import { Link, useParams } from "react-router-dom";

export default function Student() {
  const params = useParams("name");
  const params2 = useParams();
  console.log(params2);
  return (
    <>
      <div>
        <h3>
          학생 이름은 <span style={{ color: "green" }}>{params.name}</span>
          입니다.
        </h3>
      </div>
    </>
  );
}
