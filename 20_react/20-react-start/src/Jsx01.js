export default function Jsx01() {
  const name = "애옹이";
  const animal = "고양이";
  const spanStyle = {
    TextDecoration: "underline",
  };

  let isShow = true;

  let a = 7;
  let b = 5;

  return (
    <div>
      <div>
        <h2>
          제 반려 동물의 이름은
          <span style={{ textDecoration: "underline" }}>{name}</span>입니다.
          <br />
          <span style={{ textDecoration: "underline" }}>{name}</span>는
          <span style={{ textDecoration: "underline" }}>{animal}</span>입니다.
        </h2>
      </div>
      <div>
        <span>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</span>
      </div>
      <div>
        <span>{a > b && "a가 b보다 큽니다"}</span>
      </div>
    </div>
  );
}
