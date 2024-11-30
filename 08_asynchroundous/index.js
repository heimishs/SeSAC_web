function goMart() {
  console.log("마트에 갑니다");
}

function pickDrink() {
  setTimeout(() => {
    console.log("고민끝");
    product = "제로콜라";
    price = 1500;
  }, 3000);
}

function pay() {
  console.log(`상품: ${product}에 대한 가격 ${price}지불`);
}

let price, product;

goMart();
pickDrink(); //맨 마지막에 실행됨 (시간이 걸리는 작업)
pay();
