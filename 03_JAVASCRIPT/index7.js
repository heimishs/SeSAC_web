// Date 객체
let now = new Date()
console.log(now)
console.log(new Date("september 30, 1990, 13:00:00"))
// 1070년 01 01 000000초 이후로 몇초가 지났는지
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010,2,2,18,35,50))

console.log(now.getFullYear(),"년")
console.log(now.getMonth(),"월") // 0~11
console.log(now.getDate(),"일")// 1~
console.log(now.getHours(),"시") // 0 ~ 23
console.log(now.getMinutes(),"분") // 0 ~ 59
console.log(now.getSeconds(),"초") // 0 ~ 59
console.log(now.getMilliseconds(),"밀리초") // 0 ~ 999
console.log(now.getDay(),"요일") // 0 ~ 6 ( 일 ~ 토 )

// 조건문 사용 오늘이 주말인지 평일인지 

if(now.getDay() === 0 || now.getDay() === 6){
    console.log("주말입니다")
}else
{
    console.log("평일입니다")
}

const checkDay = now.getDay() === 0 || now.getDay() === 6 ?"주말":"평일"
console.log(checkDay)

// math 객체
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.min(50,10))
console.log(Math.max(50,10))
console.log(Math.random()) // 0 보다 크거나 같고 1 보다 작은값
console.log(Math.round(5.3)) // 
console.log(Math.floor(5.3)) // 
console.log(Math.ceil(5.3)) // 


console.log(Math.floor(Math.random()*10)) // 0~9까지의 소수가 아닌 난수 
console.log(Math.floor(Math.random()*10)+1) //

// 20 ~ 22
console.log(Math.floor(Math.random()*3+20)) //

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

// object의 key값만 가져와서 배열로 반환
let key = Object.keys(areaNum)
// object의 value값만 가져와서 배열로 반환
let value = Object.values(areaNum)

console.log(key)
console.log(value)