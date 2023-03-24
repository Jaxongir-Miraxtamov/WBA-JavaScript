// JavaScript massivi - bu o'xshash turdagi elementlar to'plamini ifodalovchi ob'ekt.

// JavaScript-da massiv yaratishning 3 ta usuli mavjud

// Massiv harfi bilan
// To'g'ridan-to'g'ri Array misolini yaratish orqali (yangi kalit so'z yordamida)
// Array konstruktoridan foydalanish (yangi kalit so'z yordamida)
// 1) JavaScript-ning literal massivi

// Massiv konstruktori boʻyicha obyekt yaratish misoli quyida keltirilgan.

// Massiv
// Ob'ekt Array, boshqa dasturlash tillaridagi massivlarda bo'lgani kabi, bitta o'zgaruvchi nomi ostida bir nechta elementlar to'plamini saqlashga imkon beradi va umumiy massiv operatsiyalarini bajarish uchun a'zolarga ega .

// Tavsif
// JavaScript-da massivlar ibtidoiy emas, balki Arrayquyidagi asosiy xususiyatlarga ega ob'ektlardir:

// JavaScri

// JavaScript sintaksisi raqam bilan boshlanadigan xususiyatlarga nuqta belgisi o'rniga qavs belgisi yordamida kirishni talab qiladi .

// =================================================================================

// exam1

js = "Array";
console.log(Object.keys(js)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// exam2

// let res = {};
// const get = (srt) => {
//   for (j of srt) {
//     if (res[("webbrain", "academy", [1, 2, 3, 4])] in res) res[i]++;
//     else res[i] = 1;
//   }
// };
// // let ar1 = [1, 2, 3, 4];
// // let ar2 = ["webbrain", "academy"];
// console.log(Object.keys(srt));

// get();

// let res = {};
// res[("webbrain", "academy", [1, 2, 3, 4])] in res;
// // let ar1 = [1, 2, 3, 4];
// // let ar2 = ["webbrain", "academy"];
// console.log(Object.keys(res));

// get();

// exam3

// let ar1 = [1, 2];
// let ar2 = [1, 2];

// if ((ar1 = ar2)) console.log(ar1.some(false));
// else ar1 > ar2 || ar1 < ar2;
// console.log(ar2.every(true));

// exam4

// c = camelcase.CamelCase();

// txt = "lorem ipsum dolor sit amet";

// console.log(c.hump(txt));

let camelize1 = "background-color";
console.log(camelize1.toLocaleUpperCase());

let camelize2 = "list-style-image";
console.log(camelize2.toLocaleLowerCase());

let camelize3 = "-webkittransition";
console.log(camelize3.normalize());

// exam 5

let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 1999, engine: 2, name: "matiz" },
  { id: 3, year: 2000, engine: 3, name: "gentra" },
  { id: 4, year: 1998, engine: 4, name: "cobolt" },
  { id: 5, year: 1998, engine: 5, name: "malibu" },
  { id: 6, year: 1998, engine: 6, name: "damas" },
  { id: 7, year: 1998, engine: 7, name: "tracker" },
];
