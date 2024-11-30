function goMart() {
  console.log("마트에 갑니다");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("고민끝");
      product = "제로콜라";
      price = 1500;
      resolve("구매완료");
    }, 3000);
  });
}

function pay() {
  console.log(`상품: ${product}에 대한 가격 ${price}지불`);
}

// 실행함수
// await 를 쓰려면 async 를 써야한다
async function exec() {
  try {
    goMart();
    await pickDrink();
    pay();
  } catch (err) {
    console.log(err);
  }
}

let price, product;
exec();
