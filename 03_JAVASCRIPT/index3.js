/*
함수
- 특정 작업을 수행하기 위해 설계된 코드 집합
- 함수의 선언 구조
- 키워드 function
- 함수의 이름 camelCase로 함수의 이름 작성 
- 매개변수 함수내부에서 사용할 변수
- {스코프} 함수의 내부 코드
함수 선언문, 함수 표현식
- 함수 표현식: 변수에 함수를 저장
- 함수 선언문: 명시적 함수 선언

*/


helloworld1()
console.log('선언되기 전')

function helloworld1(){
    console.log('helloworld 1')
}
helloworld1()

function helloworl2(){
    // 리턴키워드
    // 함수 내부 코드의 최종 결과값을 보관하기 위한 키워드
    return 'hello world2'
    console.log('리턴 아래입니다..')
}

console.log(helloworl2())
// helloWorld3() 선언 되기 전에 호출 불가능

const helloWorld3 = function (){
    console.log('hello world3')
}

helloWorld3()

// helloWorld4() 선언되기 전에 호출 불가능

const helloWorld4 = ()=>{
    console.log('hello world4')
}


helloWorld4()


// 매개변수가 있는 함수 만들기
// 1. 매개변수 1개, 함수 선언문
function sayHello1(text){
    return text;
}

console.log(sayHello1("qwe"))

function sayHello2(text, name){
    return `${text}! ${name}`;4
}

console.log(sayHello2("안녕","앨리"))

// \매개변수 2개 함수 표현식
// 내부수코프 콘솔로그

let sayHellol3 = function(text, name){
    return `${text}! ${name}`;
}

console.log(sayHellol3("안녕!","앨리"))

// 메개변수 2개 , 화살표 함수

const sayHellol4 = (text, name) =>{
    return `${text}! ${name}`;
}

console.log(sayHellol4("안녕!!", "앨리"))

function multifly(num1, num2){
    return num1, num2;
}

console.log(multifly(2,4))


// let input_num = prompt("숫자를 입력해주세요");
// const square = function(num){
//     return num * num
// }
// console.log(square(input_num))

