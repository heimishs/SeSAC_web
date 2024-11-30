function goMart() {
  console.log("마트에 갑니다");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("고민끝");
      product = "제로콜라";
      price = 1500;
      //resolve("구매완료"); //then의 콜백의 인자로 전달
      reject("구매실패");
    }, 3000);
  });
}

function pay() {
  console.log(`상품: ${product}에 대한 가격 ${price}지불`);
}

function exec() {
  goMart();
  pickDrink()
    .then((result) => {
      // pickdrink가 끝나고 나서 실행되는 작업
      pay();
      console.log(result);
      //   resolve로 전달된 값
    })
    .catch((err) => {
      console.log("err", err);
      //  리젝트로 전달된 값
    })
    .finally(() => {
      console.log("집으로 돌아감니다");
    });
}

let price, product;
exec();
