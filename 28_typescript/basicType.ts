let num: number = 1;

num = 2;

console.log(num);
let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array 선언 타입과 배열 둘다선언
let numArr: number[] = [1, 2, 3, 4, 5, 6];
let strArr: Array<string> = ["a", "b", "c"];

let arr1: (number | string)[] = ["qwe", 2];
let arr2: Array<boolean | null | number[]> = [true, null, [1]];

let arr3: any[] = [123, "asd", null, true];

// object
let obj1: object = {
  name: "aa",
};

// 타입스크립트는 알아서 타입을 추론한다
// 암묵적 타입 지정
let aa = 5; //선언하는 순간 암묵적으로 number 형으로 지정
let bb = "hello";
