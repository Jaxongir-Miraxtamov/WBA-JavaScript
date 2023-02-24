// O'zgaruvchilar var, let,const

// var => bu eski ishlatilinadigan turi

// let => hozirgi vaqtda foydalaniladigan let ishlatilinadi o'zgaruvchilarda

// const  => bu o'zgarmas nomi bilan buni ozgaetorib bolmaydi

var q = "string";
console.log(q);

let g = 77;
console.log(g);

const k = "Academy";
let m = "Webbrain";
console.log(k);

// PRIMITIVE data types

// 1 Number - faqat raqamlar sonlar kiradi  +-*/ lar ham kiradi

let a = 5;
let b = 25;
console.log(b - a);

console.log(1234567890);

// 2 Bigint - oxiriga n qo'shilsa Bigint hisoblanadi

console.log(9007199254740992n);

// 3 String - text xisoblanadi stringlar barchasi '', "", `` 3 xil qo'shtirnoq ichida boladi

let text = "Webbrain Academy";

console.log(text);

console.log('Men "Webbrain Academy" da oqiyman');

// 4 Boolean - true / false lar kiradi
console.log(true);
console.log(false);

// Null biron bir qiymat belgilanmasa null chiqadi bo'sh qiymat

var v = null;
console.log(null == undefined);

// Undefined - qiymatsiz e'lon qilingan o'zgaruvchi
let c;
console.log(c);

// NON-primitive

// Symbols Function Array;
let num = [1, 2, 3];
num[0] = 10;

console.log(num); // [10, 2, 3]

let arr = ["Webbrain", +998712222222, true, false];
console.log(arr);

function name(params) {
  console.log("name");

}
