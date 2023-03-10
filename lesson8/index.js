// Statik xususiyatlar
// Math[@@toStringTag]
// Xususiyatning boshlang'ich qiymati @@toStringTagstring hisoblanadi "Math". Bu xususiyat Object.prototype.toString().

// Math.E
// Eyler soni va natural logarifmlar asosi; taxminan 2.718.

// Math.LN2
// ning natural logarifmi 2; taxminan 0.693.

// Math.LN10
// ning natural logarifmi 10; taxminan 2.303.

// Math.LOG2E
// ning asosi-2 logarifmi E; taxminan 1.443.

// Math.LOG10E
// Baza-10 logarifmi E; taxminan 0.434.

// Math.PI
// Doira aylanasining diametriga nisbati; taxminan 3.14159.

// Math.SQRT1_2
// ½ kvadrat ildiz; taxminan 0.707.

// Math.SQRT2
// ning kvadrat ildizi 2; taxminan 1.414.

// Statik usullar
// Math.abs()
// ning mutlaq qiymatini qaytaradi x.

// Math.acos()
// ning arkkosinini qaytaradi x.

// Math.acosh()
// ning giperbolik arkkosinini qaytaradi x.

// Math.asin()
// ning arksinusini qaytaradi x.

// Math.asinh()
// Sonning giperbolik arksinusini qaytaradi.

// Math.atan()
// ning arktangentini qaytaradi x.

// Math.atanh()
// ning giperbolik arktangentini qaytaradi x.

// Math.atan2()
// Argumentlar qismining arktangentini qaytaradi.

// Math.cbrt()
// ning kub ildizini qaytaradi x.

// Math.ceil()
// dan katta yoki teng eng kichik butun sonni qaytaradi x.

// Math.clz32()
// 32 bitli butun sonning bosh nol bitlari sonini qaytaradi x.

// Math.cos()
// ning kosinusini qaytaradi x.

// Math.cosh()
// ning giperbolik kosinusini qaytaradi x.

// Math.exp()
// e x qaytaradi , bu erda x argument va e Eyler soni ( 2.718..., natural logarifm asosi).

// Math.expm1()
// 1dan ayirish bilan qaytariladi exp(x).

// Math.floor()
// dan kichik yoki teng eng katta butun sonni qaytaradi x.

// Math.fround()
// ning eng yaqin yagona aniqlikdagi float tasvirini qaytaradi x.

// Math.hypot()
// Argumentlari kvadratlari yig'indisining kvadrat ildizini qaytaradi.

// Math.imul()
// xva ning 32 bitli butun sonni ko'paytirish natijasini qaytaradi y.

// Math.log()
// ning natural logarifmini (㏒ e ; shuningdek, ㏑) qaytaradi x.

// Math.log1p()
// Raqamning natural logarifmini (㏒ e ; shuningdek ㏑) qaytaradi .1 + xx

// Math.log10()
// ning asosiy-10 logarifmini qaytaradi x.

// Math.log2()
// ning asosiy-2 logarifmini qaytaradi x.

// Math.max()
// Nol yoki undan ortiq sonlarning eng kattasini qaytaradi.

// Math.min()
// Nol yoki undan ortiq sonlarning eng kichigini qaytaradi.

// Math.pow()
// xBazani ko'rsatkich darajasiga qaytaradi y(ya'ni, xy).

// Math.random()
// 0va orasidagi psevdo-tasodifiy sonni qaytaradi 1.

// Math.round()
// xRaqamning eng yaqin butun songa yaxlitlangan qiymatini qaytaradi .

// Math.sign()
// Ijobiy, salbiy yoki nol ekanligini xko'rsatuvchi belgisini qaytaradi .x

// Math.sin()
// ning sinusini qaytaradi x.

// Math.sinh()
// ning giperbolik sinusini qaytaradi x.

// Math.sqrt()
// ning musbat kvadrat ildizini qaytaradi x.

// Math.tan()
// ning tangensini qaytaradi x.

// Math.tanh()
// ning giperbolik tangensini qaytaradi x.

// Math.trunc()
// ning butun son qismini qaytaradi x, har qanday kasr raqamlarini olib tashlaydi.

// Math.round(x)	X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
// Math.ceil(x)	X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
// Math.floor(x)	X ni eng yaqin butun soniga yaxlitlangan holda qaytaradi
// Math.trunc(x)	x ning butun qismini qaytaradi ( ES6 da yangi )

// exam1
let n = 5;
console.log(n.toString(2));

let p = 280;
console.log(p.toString(2));
let q = 9;
console.log(q.toString(2));

let o = 234;
console.log(o.toString(2));

// exam2
console.log(Math.max(7, -8, 2));

console.log(Math.max(-7, -35, 42));
console.log(Math.min(17, 8, 2));

console.log(Math.min(-7, 5, 2));

const array1 = [1, 3, 2];

console.log(Math.max(...array1));

// exam4

let y = 586;
let l = 56;
console.log(y - l);

let m = 86;
let e = 58;
console.log(m - e);

let g = 546;
let u = 6;
console.log(g - u);

// exam5
var v = 3.14;
[Math.trunc(v), Math.round(v), Math.floor(v), Math.ceil(v)];
// prints results
// turli xil kirish qiymatlari uchun siz ushbu natijalarni olasiz

//  v        t     f   c
//  3.87 : [ 3,    3,  4]
//  3.14 : [ 3,    3,  4]
// -3.14 : [-3, - -4, -3]
// -3.87 : [-3, - -4, -3]
Math.trunc(); // kasrlarni kesib tashlaydi (qisqaradi) . eng yaqin butun songa
Math.floor(); // 3.5 -> 3 -3.5 -> -4 Usul Math.floor()sonni PASHGA bo'lgan eng yaqin butun songa yaxlitlaydi.
Math.ceil(); // 3.5 -> 4 -3.5 -> -3  Usul Math.ceil()yuqoriga yaxlitlangan sonni eng yaqin butun songa yaxlitlaydi.

// exam6

// function RANDOM(min, max) {
//   console.log(Math.random() * 50);
// }

// RANDOM;
let h = Math.floor(Math.random() * 10 + 1);

let f = Math.random() * 50;

// function getInteger(min, max) {
//   return Math.random() * 50;
// }
// getInteger(1, 50);

function add() {
  for (var i = 0; i < 49; i++) {
    var a = Math.floor(Math.random() * 50) + 1;
  }
}
add();

Math.random()*50;

Math.floor(Math.random() * 50);
