// 자료형의 종류
// string, number, boolan, null, undefind
// object객체, array, 

//1.string

let myName = "엘리";
let email = "allie@nave.com";
console.log(myName);
console.log(email);

// 문자와 변수를 동시에 써보기
console.log('내 이름은', myName);
let aaa = '내 이름은'+myName+'이고, 이메일은'+email+'입니다';
let bbb = `내 이름은 ${myName}이고, 이메일은 ${email}입니다.`
console.log(aaa);
console.log(bbb);

// 2. number
let number = 123;
let opacity = 0.7;

console.log(number);
console.log(opacity);

console.log(number + opacity);

console.log("apple"-3); // Not a Number

// 3. boolean true, fasle
let cheak = true;
let isShow = false;

console.log(cheak);
console.log(isShow);

// 4. undefiend 값이 없는상태

let undef;
let obj = {
    abc:123
}
console.log(undef);
console.log(obj.abc);
console.log(obj.efg);

// 5. Null, 빈값 타입이 없는 상태
let empty = null;
console.log(empty);

// array 배열
let fruits = ["orange","apple","banana","mango"];
let fruits2 = new Array("orange","apple","banana","mango");

console.log(fruits[3]);
console.log(fruits2[1]);

// 여러 데이터타입을 하나의 배열에 넣을 수 있음
let data = [1, number, number, "string", 100];
console.log(data[3],data[2]);

// 2차원 배열
let korean = [["가","갸","거","겨"],
            ["나","냐","너","녀"],
            ["다","댜","더","뎌"]];

// console.log(korean[2][0])


// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2]);


const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums[1][0][1]);


// object 타입
// key: 값 의 쌍으로 이루어져 있음
let cat = {
    name:'나비',
    age:1,
    gender:'F',
    isCute:true
}

console.log(cat.name);
cat.like = ['참치','쥐']

// 접근방법 2 대괄호 접근법
console.log(cat["name"]);

cat["parent"] = "초롱이";
console.log(cat);

// 자료형 확인
console.log('---------------')

let und;
console.log(typeof "문자")
console.log(typeof 123)
console.log(typeof true)
console.log(typeof {}) //obj
console.log(typeof [123]) //obj
console.log(typeof null) //obj
console.log(typeof und) //obj
console.log(typeof NaN) //obj


// 형변환
console.log("------------------------")
// ? >>string
let str1 = true;
let str2 = 123;
let str3 = null;
80
console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))
console.log(str1.toString())

// ? > number
let n1 = true
let n2 = "123"
let n3 = "123.5"
console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))
console.log(parseInt(n2))
console.log(parseInt(n3)) // 소수점을 버림 정수변환

// let english = prompt("영어점수를 입력해주세요")
// let math = prompt("수학점수를 입력해주세요")

// english = Number(number)
// math = Number(math)

// let avg = (english + math) / 212
// console.log(avg)

console.log("------------------------")
console.clear()

// OR 사용중 여러개의 조건을 사용시 첫 조건에서 TRUE가 나오면 이 후조건을 무시한다
// AND 도 마찬가지

// 변수

var name = "홍갈동" //재할당 재선언가능
name = "길동" //재할당 가능

var name = "성춘향" //재선언가능
// 재선언 가능한 것이 장점같을 수 있으나 협업과 유자보수에 힘들다

// let 재할당 가능, 재선언 불가능
let c; // 선언과 초기화를 동시에 하지 않아도 된다
console.log(c)
c = 10
console.log(c)

// let c = 123 재선언 불가능

// const - 재할당 재선언 불가능 상수
// const b 선언과 동시에 초기화 되야합니다
const b = 3;

let q1 = 3;
q1 - 2;

console.log(q1)

let q2 = 10;
q2 = q2 + 10;
q2 = q2 - 5;
console.log(q2)
console.clear()

console.log("연산자")
/*
연산자
대입연산자 =
비교연산자 == === != !== > >= < <=
산술연산자 + = * / % **
논리연산자 ! && ||

*/

// 비교연산자 == === != !== > >= < <=
// 비교 연산자의 결과값은 true or fasle
console.log( 1 == 1)
console.log( 1 == 2)
console.log( 1 != 1)
console.log( 1 != 2)
console.log( 1 == '1')
console.log( 1 != '1')
console.log( 1 == '2')

console.log('---(=== 비교)')

console.log( 1 === 1)
console.log( 1 === 2)
console.log( 1 !== 1)
console.log( 1 !== 2)
console.log( 1 === '1')
console.log( 1 !== '1')
console.log( 1 === '2')

console.log('크기비교')
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 >= 1)

console.log('산술연산자')
console.log(1 + 2)
console.log(1 * 2)
console.log(1 - 2)
console.log(1 / 2)

// 나머지 연산자
console.log(8%5)
console.log(2**5)

// 논리 연산자
console.log(true)
console.log(false)
console.log(!false)
console.log(!true)

console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(true || true)
console.log(false || false)

console.clear()

// 연산자 이용
console.log("0" == false)
console.log("0" == 0)
console.log("" == 0)
console.log(undefined == null)
console.log(0 == false)

console.log("" == "0")
console.log(false == undefined)
console.log(false == null)

console.clear()

// 연산자 이용
console.log("0" === false)
console.log("0" === 0)
console.log("" === 0)
console.log(undefined === null)
console.log(0 === false)

console.log("" === "0")
console.log(false === undefined)
console.log(false === null)


