import { use, useCallback, useEffect, useState } from "react";

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log("is number", number);
  };

  const func2 = useCallback(() => {
    console.log(`number is ${number}😎`);
  }, [number]);

  useEffect(() => {
    console.log("func1 변경됨");
  }, [func1]);

  useEffect(() => {
    console.log("func2 변경됨");
  }, [func2]);
  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            func1();
            func2();
          }}
        >
          call function
        </button>
        <button
          onClick={() => {
            setIsTrue(!isTrue);
          }}
        >
          {isTrue.toString()}
        </button>
      </div>
    </>
  );
}
