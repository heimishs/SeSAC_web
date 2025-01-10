export default function Select({ setData }) {
  return (
    <div>
      과일:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">화이트</option>
        <option value="red">레드</option>
        <option value="yellow">노랑</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, color: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">화이트</option>
        <option value="red">레드</option>
        <option value="yellow">노랑</option>
      </select>
    </div>
  );
}
