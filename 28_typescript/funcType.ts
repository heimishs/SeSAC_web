function tsPring(a: number, b: number, c?: number): void {
  console.log(a, b, c);
}

// tsPring(1, 2, 3);
// tsPring(1, 2);
// tsPring(1, 2, 3, 4);

function tsPrint2(a: number, b: number, c = 5) {
  console.log(a, b, c);
}

tsPrint2(1, 2, 3);
tsPrint2(1, 2);

function concatStr(a: string, b: number): string {
  return a + b;
}

function circleArea(r: number) {
  return r * r * Math.PI;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a + b;
};

// 리턴 키워드 없는 리턴

const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

console.log(circleArea(5));
console.log(squareArea(3, 4));
console.log(`${triangleArea("5", "6")}`);

// function goingOn(): never {
//   while (true) {
//     console.log("go");
//   }
// }

// 오버로딩
// - 함수에서 매개변수의 개수, 타입 / 반환 타입이 다를때
// - 같은 함수의 이름으로 매개변수의 종류와 개수를 다르게 선언 가능
// - 비슷한 기능일 때만 사용 가능

// 오버라이딩 = 클래스

function add(x: string, y: string): string;
function add(x: number, y: number): number;

// 오버로딩 함수 구현
function add(x: any, y: any) {
  return x + y;
}

console.log(add(1, 2));
console.log(add("1", "2"));

// 제네릭: 함수를 호출할때 데이터 타입을 지정할 수 있는 문법
