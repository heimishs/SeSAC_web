// while문

let sum = 0;

// 홀수의 합 구하기
for(let i = 0; i < 10; i++){
    // if(i % 2 === 1) sum += i;

    if(i % 2 === 0 ) continue; //다음반복으로 넘어가기
    sum += i;

    console.log(sum);
}

for(let i = 0; i < 5; i++)
{
    console.log("--------");
    for(let j = 0; j < 5; j++){
        // console.log(j)
    }
}


// while문
let n1 = 1;
while(n1 <= 5){
    console.log(n1);
    n1++;
}

let n2 = 9;

while(n2 >= 5){
    console.log(n2)
    n2--;
}

let q = 0;
while(q <10){
    q++;
    if(q%2===1){
        console.log(q)
    }
}

console.clear()
let a = 0
while(true){
    console.log(a)
    a++;
    if(a > 10){
        break;
    }
}

let a2 = 0;

// confirm 확인/취소 알림창
while(confirm("계속진행하시겠습니까?")){
    a2++
    alert(`${a2} 번째 alert 창`)
}