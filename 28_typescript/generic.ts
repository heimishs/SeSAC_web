// 제네릭: 함수를 호출할때 데이터 타입을 지정할 수 있는 문법

function printSome<T>(x: T, y: T) {
  console.log(x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>("1", "2");
printSome<boolean>(true, false);

function printSome2<T, K>(x: T, y: K) {
  console.log(x, y);
  return x;
}

printSome2<boolean, string>(true, "123");

function arrLength<T>(arr: T[]): number {
  return arr.length;
}

function getValue<T>(val: T): T {
  return val;
}

console.log(arrLength<string>(["a", "b"]));
console.log(arrLength<string | number>(["a", 5]));
console.log(getValue<string[]>(["a"]));

// interface generic 사용
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "black",
};

console.log(iphone15);

type IphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<IphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log(iphone16);
