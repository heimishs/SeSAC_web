// for문
/*
for(변수 선언과 초기화;조건식;증감식){
    반복 실행 코드
}

*/

// i++ 혹은 i= i+1, i+=1

for(let i = 0; i < 10;i++){
    console.log('안녕',i)
}
console.log('----------')
for(let i = 0; i < 10;i=i+2){
    console.log(`안녕 ${i}`)
}
console.log('----------')
for(let i = 1;i<=5;i++){
    console.log(i)
}
console.log('----------')
for(let i = 0; i < 5; i++){
    console.log(i+1)
}
console.log('----------')
for(let i = 5; i > 0;i--){
    console.log(i)
}

let fruits = ['apple','banana','orage','mango']

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}


// 1부터 N까지 더하기
let numx = 11;
let sum = 0;

for(let i = 1; i <= numx ;i++){
    sum = sum + i
    console.log(sum)
}
console.clear()

let array = [99,98,85,77,100,50]
let sums = 0;

for(let i = 0;i <array.length;i++){
    sums = sums + array[i]
}

console.log(sums)

// 1이상 ~ 20이하의 수 중에서 짝수만 더한 값 출력

let num2 = 0;

for(let i = 0; i <= 20; i++){
    if(i%2===0){
        num2= + i
    }
}

for(let i = 0; i<=20; i+2){
    num2+=i
}

console.log(num2)