// es6 문법

// 배열의 구조분해 문법

const arr1 = ['tomato','kiwi','banana']
const tomato = arr1[0]
const [a,b,c] = arr1

console.log(a)
console.log(b)

const arr2 = ['red','orange','pink','yellow']
// red만 공백 제외하고 선언
const [red,orange, ,yellow] = arr2
console.log(red)

// 변수교환
let value1 = "second"
let value2 = "first"

let temp; // 값을 저장하기위한 임시 변수

// 변수교환의 정석
temp = value1
value1 = value2
value2 = temp

value1 = "second"
value2 = "first"

[value1,value2] = [value2,value1]
console.log(value1, value2)


// 1-2 객체의 구조분해 할당 문법

const obj = {
    title: '제목',
    content: '내용',
    num:10
}

console.log(obj.title)

const {num, title, content} = obj
const {title:t1, content:c2} = obj
console.log(t1)

console.clear()


// spread와 rest ...
const arr3 = [1,2,3,4,5]
const arr4 = ['a','b','c']

console.log(...arr3)
console.log(...arr4)

// arr1, arr4 합치기

const arr5 = arr3.concat(arr4)
const arr6 = [...arr3, ...arr4]
console.log(arr6)


const str = 'alliehigh'
let strtoarr = [...str]
let strtoarr2 = str.split('')

console.log(strtoarr2)
console.log(strtoarr)

let obj1 = {
    name: 'glle',
    height: '163',
    friend: null,
    married: false
}

let obj2 = {
    name: '진형',
    like:['잠자기','코딩'],
    greetubg:function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요..
            키는 ${this.height}입니다
            `)
    }
}


let me = {...obj1,...obj2,gender:'female'}

console.log(me)

function test(a,b)
{
    console.log(a)
    console.log(b)

}

function test2(...val)
{
    
    console.log(val) //rest로 받아준 결과는 배열
    const [a,b,c, ...rest] = val
    console.log(rest)
}

test(1,2)
test2(1,2,3,4,5,6)
// ...rest

console.clear()
// 매개변수가 몇개가 들어오든 합해서 반환하는 함수

function addNumber(...val){
    console.log(val)
    let sum =0;

    rest.forEach((number) => {
        sum += number;
    });

    return  sum
}

// console.log(addNumber(1,2,3,4,5))


