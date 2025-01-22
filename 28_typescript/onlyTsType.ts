// tuple: 배열의 개수와 데이터타입 순서를 정하는 타입
let drink: [string, string];
drink = ["콜라", "cola"];

let drink2: [string, string, number] = ["cola", "콜라", 2];

drink2[0] = "사이다";
console.log(drink2);

// readonly 옵션: 타입과 순서를 완벽하게 고정
//  수정 불가
let drink3: readonly [string, string] = ["cola", "콜라"];

// enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);

enum Cake {
  chock,
  vanilla,
  strawberry,
}
console.log(Cake.chock);
console.log(Cake.vanilla);
console.log(Cake.strawberry);

// 인터페이스 interface
interface Student {
  name: string;
  isPpassed: boolean;
}
const student: Student = {
  name: "엘리",
  isPpassed: true,
};

console.log(student);

type Score = "A+" | "B" | "C" | "D" | "F";

// interface 도 상속가능
interface 야구부 extends Student {
  // Student에서 상속받아온 정보
  // name: string;
  // isPpassed: boolean;

  position: string;
  weight: number;
  height: number;
  backnumber?: number; // 없어도 되는 값은 ? 처리
  [grade: number]: Score; //추가를 해야하는데 몇개가 들어올지 모를때
}

const otani: 야구부 = {
  name: "otani",
  isPpassed: true,
  weight: 95,
  height: 193,
  position: "pitcher",
  1: "A+",
  2: "C",
};

otani["1"] = "A+";
otani.position = "투수";
console.log(otani);

interface Calc {
  (a: number, b: number): number;
}

const sum: Calc = (a: number, b: number) => {
  return a + b;
};

console.log(sum(2, 5));

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

// 교차타입 & 두 타입을 모두 만족해야함
let ToyCar: Toy & Car = {
  name: "붕붕이",
  color: "blue",
  price: 5000,
  start() {
    console.log(this.name, "의 가격은", this.price, "입니다");
  },
};

ToyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "다니엘",
  gender: "F",
  age: 21,
};

enum GenderEnum {
  FEMALE = "Female",
  MALE = "Male",
}

type Gender = "Female" | "Male";

// 타입에 타입을 지정가능
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "알버트",
  like: ["car"],
  gender: GenderEnum.MALE,
};

console.log(albert.gender);
