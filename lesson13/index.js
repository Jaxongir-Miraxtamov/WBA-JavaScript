let obj = { name: "web", title: "eshmat", info: { age: 2345 } };
let ar = ["orange", "apple", "banana"];

let [ikki, uch] = ar;
let [bir, ...rest] = ar;

console.log(rest);

let { name: newName } = obj;
let { info } = obj;
console.log(obj.info.age);

console.log(Object.keys(obj));
console.log(info);

function getData({ info: { age } }) {
  console.log(age);
}

getData(obj);

// let time = new Date();
// console.log(Date.getTime());

console.log(JSON.stringify(obj, ["pw", "title"]));

let set = new Set();
set.add("eshmat");
console.log(set);

let map = new Map();
map.add("quyon");
console.log(map);

// exam1 Home work

let time = new Date();
console.log(Date.apply());
console.log(Date.call());
console.log(Date.bind());
console.log(Date.parse());
console.log(Date.toString());
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getFullYear());
console.log(time.getHours());
console.log(time.getMilliseconds());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMonth());
console.log(time.getTimezoneOffset());
console.log(time.getUTCDate());
console.log(time.getUTCDay());
console.log(time.getUTCMonth());
