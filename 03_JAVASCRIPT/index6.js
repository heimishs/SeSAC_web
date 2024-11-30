// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon";
let str2 = "   Strawberry Moon    ";

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0]+ str1[11])

// Sonny 만들기
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

console.log(str1.length)
console.log(str2.length)

// 메서드 사용해보기
console.log(str1.trim())
console.log(str2.trim().length)

console.log(str2.toUpperCase())
console.log(str2.toLowerCase())


console.clear()
// indexOF, charAt, slice
let fruit = "applemango";
// 내가 찾고 싶은 문자열의 인덱스번호 반환
console.log(fruit.indexOf("e"))
console.log(fruit.indexOf("a"))
console.log(fruit.indexOf("apple"))
console.log(fruit.indexOf("mango"))
console.log(fruit.indexOf("z")) //없는 문자열은 -1 반환함

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(55)) //없는 문자열은 아무것도 안나옴 주의해서 사용

console.log(fruit.slice(5)) //mango
console.log(fruit.slice(3,6)) //lem
console.log(fruit.slice(-1)) //o
console.log(fruit.slice(-4)) //ango

console.clear()
// replace, replaceAll
let msg = "Wow ~ It is so amazing!!";
console.log(msg.replace("Wow","Hey~~"))
console.log(msg.replaceAll("o","O"))

let date = "2024.11.06";
date = date.replaceAll('.','-');
console.log(date)

let hello = "hello"
console.log(typeof hello)

let hello2 = hello.split()
console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2 = hello.split("e")
console.log(hello2)

// '2024', '11', '06'
console.log(date = date.split("-"))  //문자열로 배열을 만들때
console.clear()

// ----------------배열-------------------
let arr1 = [1,2,3,4,5]
let arr2 = ["quakka","rabbit","puppy","hamster"]

// arr1[5] = 6;
// arr1[8] = 6;

arr1.push(6);
arr1.push(7,8);

arr1.pop() // 제거하는 값을 반환
console.log(arr1);

arr2.unshift("cat")
arr2.shift(); // 제거하는 값을 반환


// includes
console.log(arr2.includes("quakka"))

arr1 = [1,2,3,4,5]
console.log(arr1.indexOf(4)) // 3, 요소가 몇번 인덱스에 있는지
console.log(arr1.reverse()) // 기존 배열순서 뒤집기

// join('), 배열 > 문자열로 병합
str1 = arr1.join()
console.log(str1) //아무것도 안쓰면 콤마 까지 문자열로 변경됨
str1 = arr1.join('')
console.log(str1)

console.clear()

let arr3 = [1,5,3,2,6]
let abc = ["a","b","c","d","e","f"]

// 기본 for 문
for(let i = 0; i < arr3.length;i++){
    console.log(arr3[i])
}


// for of문 배열을 한바퀴 돌기
for(let el of arr3){
    console.log(el)
}

console.clear()

// forEach(익명함수)
// forEach(function(a[,b,c]))
abc.forEach((num,index,arr) => {
    console.log("값",num)
    console.log("값위치",index)
    console.log("배열전체",arr)
    console.log("--------------")
});

arr3.forEach((num) => {
    console.log(num)
});

console.clear()

arr2 = ["quakka","rabbit","puppy","hamster"]
// filter, map, find
// 매개변수로 들어가는 함수에 리턴값이 필수
// return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six = arr2.filter((el)=>{
    return el.length === 6
})
console.log(six)


// find
let six2 = arr2.find((word)=>{
    return word.length === 6
})

console.log(six2)

let arr4 = [1,2,3,4,5]

let marr = arr4.map((num)=> num * 3)

console.log(marr)
console.clear()
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
    area: 'ff'
};

for(let area in areaNum){
    console.log(area) //Key
    console.log(areaNum[area]) // 대괄호 접근법으로 키의 값에 접근가능
}