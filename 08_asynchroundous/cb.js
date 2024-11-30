function goMart() {
  console.log("마트에 갑니다");
}

// 콜백함수를 이용해서
// pickDrink 작업이 끝난 후 pay가 실행되도록
function pickDrink(callback) {
  setTimeout(() => {
    console.log("고민끝");
    product = "제로콜라";
    price = 1500;
    // 위 작업이 완료된 후 실행
    callback(); //메개변수로 받고 있는 콜백함수
  }, 3000);
}

function pay() {
  console.log(`상품: ${product}에 대한 가격 ${price}지불`);
}

let price, product;

goMart();
pickDrink(pay); //맨 마지막에 실행됨 (시간이 걸리는 작업)
// pickdrink 이후에 pay가 실행될 수있도록 콜백을 넘겨줌
