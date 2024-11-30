function call(name) {
  return new Promise((resolve, reject) => {
    console.log(name);
    setTimeout(() => {
      console.log(`${name} 반가워`);
      resolve();
    }, 1000);
  });
}

function back(back) {
  return new Promise((resolve, reject) => {
    console.log(back);
    setTimeout(() => {
      console.log(`${back} 을 실행했구나`);
      resolve();
    }, 1000);
  });
}

function hell(hell) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(hell);
    }, 1000);
  });
}

async function exec() {
  await call("kim");
  await back("back");
  await hell("여기는 callback hell");
}

exec();
