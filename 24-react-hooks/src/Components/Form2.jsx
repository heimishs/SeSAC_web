import { useForm } from "react-hook-form";

export default function Form2() {
  const {
    register, //변경감지
    handleSubmit, //submit 제출시
    formState: { errors },
  } = useForm();

  //   값 유효할때
  const onValid = (data) => {
    console.log("필터된 데이터", data);
  };

  //   값 유효하지않을때
  const onInvalid = (data) => {
    console.log("필터에 맞지않는 데이터", data);
  };

  return (
    <>
      <form
        style={{ border: "1px solid #000" }}
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <input
          type="text"
          placeholder=""
          {...register("name", {
            required: "이름을 입력해주세요",
            minLength: {
              message: "이름은 최소 3글자 이상 입력해주세요",
              value: 3,
            },
          })}
        />
        {/* 유효성이 올바르지 않을때 */}
        {errors.name?.message}
        <br />
        <input
          type="number"
          {...register("age", {
            required: "나이를 입력해주세요",

            pattern: {
              value: /^[1-9]{1,3}$/, //1이상 숫자 3자리 표현식
              message: "0이상 숫자 3자리 까지 입력가능합니다",
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button onClick={() => {}}>제출</button>
      </form>
    </>
  );
}
