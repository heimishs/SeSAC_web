import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isOpen, setIsOpen] = useToggle();
  return (
    <>
      <div>
        <h3>custom hook 사용해보기</h3>
        <div onClick={setIsOpen}>Q. 리액트에서custom hook을 만들수 있나요</div>
        <div>{isOpen && <span>네</span>}</div>
      </div>
    </>
  );
}
