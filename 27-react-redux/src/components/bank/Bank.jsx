import { useDispatch, useSelector } from "react-redux";
import { bankMinus, bankPlus } from "../../store/module/bankReducer";
import { useRef, useState } from "react";

export default function Bank() {
  const bankMoney = useSelector((state) => state.bank);
  const input = useRef();
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>코딩온 은행</h1>
        <h1>
          잔액:<span>{bankMoney.toLocaleString()}</span>
        </h1>
        <input type="number" step={10000} ref={input} />
        <button onClick={() => dispatch(bankPlus(input.current.value))}>
          입금
        </button>
        <button onClick={() => dispatch(bankMinus(input.current.value))}>
          출금
        </button>
      </div>
    </>
  );
}
