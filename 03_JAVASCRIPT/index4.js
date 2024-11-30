// if

/*
조건식이 참일때 실행할 문장

*/

// if(5>3){
//     console.log('조건이 참입니다')
// }

// let number = prompt("숫자를 입력")
// if(number > 10){
//     console.log("입력받은 수가 10보다 큽니다")
// }else
// {
//     console.log("입력 받은 수가 10과 같거나 작습니다")
// }

// if(number > 10){
//     console.log("입력받은 수가 10보다 큽니다")
// }
// else if(Number(number) === 10)
// {
//     console.log("같습니다")
// }

// 90점 이상은 A 80점 이상은 B 70점 이상은 C


let num = 70
if(num >= 90 && num <= 100){
    console.log("A")
}else if(num >= 80 ){
    console.log("B")
}else if(num >= 70){
    console.log("C")
}else{
    console.log("F")
}

// 중첩

let userId = 'user01'
let userPw = '1234qwer'

function loginUser(){
    let promptid = prompt("아이디입력")
    let promptpw = prompt("패스워드")


    if(userId === promptid){
        if(promptpw === userPw){
            console.log('로그인성공')
            alert('안녕하세요 '+userId+" 님")
        }
        else{
            alert('패스워드가 틀립니다')
        }
    }
    else if(promptid === ''){
        alert('아이디를 입력하지않았습니다')
    }
    else{
        alert('아이디가 틀렸어요')
    }
}

// loginUser()

// switch문

// switch의 괄호에는 조건이 아닌 값이 들어갑니다

// let a = Number(prompt('ㅁㄴㅇ'));
// switch(a){
//     case 3:
//         // case에는 값에 대한 경우가 들어감
//         console.log('a가 3입니다')
//         break;
//     case 4:
//         console.log('a가 4입니다')
//         break;
//     case 5:
//     case 6:
//         console.log('a가 5,6입니다')
//         break
//     default:
//         console.log('a는 ???')
//         break;
// }


// 삼항 연산자
let nums = 5;
if(nums % 2 === 1){
    console.log('홀수')
}
else
{
    console.log('짝수')
}

// 조건? 참일때: 거짓일 때
nums % 2 === 1 ? console.log('홀수'):console.log('짝수')

let fruit = 'banana'
const value = fruit === "banana" ? "yellow" : "red"
console.log(value)

let value2;
if(fruit === "banana"){
    value2 = "yellow"
}else{
    value2 = "red"
}

console.log(value2)
console.clear()

/