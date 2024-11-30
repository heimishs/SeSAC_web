// Promise 체이닝 실습

function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve(msg);
    }, 1000);
  });
}

function hell(hellmsg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(hellmsg);
    }, 1000);
  });
}

function exec() {
  call("kim").then((name) => {
    setTimeout(() => {
      console.log(name, "반가워");
    }, 1000);
    back("back").then((msg) => {
      setTimeout(() => {
        console.log(`${msg} 을 실행했구나`);
      }, 1000);
      hell("여기는 callback hell");
    });
  });
}

exec();
