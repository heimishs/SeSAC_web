import { useParams } from "react-router-dom";

export default function Student() {
  const params = useParams();
  return (
    <main>
      <div>
        <p>학생 이름은 {params.name} </p>
        <p>실제 이름은 ~~ 입니다. </p>
        <button>이전 페이지로</button>
      </div>
    </main>
  );
}
