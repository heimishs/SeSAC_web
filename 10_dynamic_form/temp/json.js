// JSON
// Javascript Object Notation

const car = `{
    "model":"아이오닉6",
    "company":"현대",
    "price": 50000000,
    "year": 2023,
    "isElectric":true,
    "option":["side","smart sensor"]
}`;

console.log(typeof car);

// json.parse() > Json ---> object
const obj = JSON.parse(car);

console.log(typeof obj);
console.log(obj);

console.log(obj.model);

// json.stringify() obj > json

const carJson = JSON.stringify(obj);
console.log(typeof carJson);
console.log(carJson);

// stringify 세번째인자 들여쓰기할 문자의공백
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
