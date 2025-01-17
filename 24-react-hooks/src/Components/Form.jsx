import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register, //Input 의 변경 감지
    handleSubmit, // form의 submit 이벤트 발생시 호출
    watch, // 특정 필드의 값을 실시간으로 관찰
    formState: { errors },
  } = useForm();

  //   단축평가
  //   console.log("단축평가 || 논리합", true || "hello"); // true
  //   console.log("단축평가 || 논리합", false || "hello"); // hello
  //   console.log("단축평가 && 논리곱", true && "hi"); // hi
  //   console.log("단축평가 && 논리곱", false && "hi"); // false

  const userNameRegister = register("username");
  //   console.log(userNameRegister);
  console.log("errors", errors);

  const onValid = (data) => {
    console.log("유효한 데이터", data);
    // {email, username, password}
  };
  const onInvalid = (data) => {
    console.log("유효하지 않은 데이터", data);
    // 폼 내부에 작성한 유효성 검사가 실패했을때
  };

  console.log("watch", watch());
  console.log("watch username", watch("username"));
  return (
    /*
    handleSubmit(funcA,funcB) : 인자로 함수를 두개받음
    - 자동으로 새로고침이 방지됨
    - funcA 필수! 유효성 검증이 모두 만족했을때, 실제 제출할때 실행
    - funcB 선택, 유효하지 않을때 실행될 함수
    */
    <>
      <form
        style={{ border: "1px solid salmon" }}
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            //required가 지켜지지않았다면 errors 객체로 메세지 전달됨
            //errors.username,message
            required: "이름을 입력해주세요",
            minLength: {
              message: "이름은 최소 두글자 이상으로 입력해주세요",
              value: 2, //minlength
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="email"
          placeholder="Email(gmail)"
          {...register("email", {
            required: "이메일을 입력해주세요",
            validate: {
              useGamil: (value) => {
                console.log("value", value);
                return (
                  // 단축평가
                  value.includes("gmail.com") || "gmail로만 가입가능 합니다"
                );
              },
            },
          })}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <br />
        <button type="submit"> submit</button>
      </form>
    </>
  );
}
