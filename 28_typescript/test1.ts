// 1. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
let game: [object, boolean];

game = [
  {
    name: "달리기",
    type: "혼성계주",
  },
  true,
];

console.log(game);

//2. olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기

interface gameA {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

const games: gameA = {
  title: "로스트아크",
  price: 40000,
  desc: "본격 쌀먹 액션 RPG",
  category: "RPG",
  platform: "PC",
};

const games2: gameA = {
  title: "로스트아크",
  price: 40000,
  category: "RPG",
  platform: "PC",
};

console.log(games);

function print(a: number, b: number): void {
  console.log(a + b);
}

print(5, 11);

const nums: number[] = [1, 2, 3, 4, 10];

function plus(...items: number[]) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    count = count + items[i];
  }
  console.log(count);
}

plus(...nums);

function arrFunc<T, K>(arr: T[], num: K): number {
  return 0;
}
