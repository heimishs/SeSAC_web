import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <header>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/"}>수업</Link>
      <Link to={"/"}>실습</Link>
    </header>
  );
}
