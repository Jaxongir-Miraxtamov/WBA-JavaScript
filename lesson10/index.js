// JavaScript massivi - bu o'xshash turdagi elementlar to'plamini ifodalovchi ob'ekt.

// JavaScript-da massiv yaratishning 3 ta usuli mavjud

// Massiv harfi bilan
// To'g'ridan-to'g'ri Array misolini yaratish orqali (yangi kalit so'z yordamida)
// Array konstruktoridan foydalanish (yangi kalit so'z yordamida)
// 1) JavaScript-ning literal massivi

// array methods

// concat()	Ikki yoki undan ortiq birlashtirilgan massivlarni o'z ichiga olgan yangi massiv ob'ektini qaytaradi.
// copywithin()	U berilgan massiv qismini o‘z elementlari bilan nusxalaydi va o‘zgartirilgan massivni qaytaradi.
// yozuvlar()	U iterator ob'ektini va har bir kalit/qiymat juftligi ustida takrorlanadigan tsiklni yaratadi.
// har bir()	U massivning barcha elementlari taqdim etilgan funksiya shartlariga mos kelishini aniqlaydi.
// tekis()	U belgilangan chuqurlikka qadar rekursiv ravishda birlashtirilgan pastki qator elementlarini olib yuruvchi yangi massivni yaratadi.
// flatMap()	U massivning barcha elementlarini xaritalash funksiyasi orqali ko'rsatadi, so'ngra natijani yangi massivga tekislaydi.
// to'ldirish()	U elementlarni statik qiymatlar bilan massivga to'ldiradi.
// dan()	U boshqa massiv elementining aniq nusxasini olib yuruvchi yangi massivni yaratadi.
// filtr()	U taqdim etilgan funktsiya shartlaridan o'tadigan elementlarni o'z ichiga olgan yangi massivni qaytaradi.
// topish()	U berilgan massivdagi belgilangan shartni qondiruvchi birinchi elementning qiymatini qaytaradi.
// findIndex()	U berilgan massivdagi belgilangan shartni qondiruvchi birinchi elementning indeks qiymatini qaytaradi.
// har biriga()	Massivning har bir elementi uchun berilgan funksiyani bir marta chaqiradi.
// o'z ichiga oladi()	Berilgan massivda belgilangan element mavjudligini tekshiradi.
// indexOf()	U berilgan massivda belgilangan elementni qidiradi va birinchi moslik indeksini qaytaradi.
// isArray()	O'tkazilgan qiymat massiv yoki yo'qligini tekshiradi.
// qo'shilish()	U massiv elementlarini satr sifatida birlashtiradi.
// kalitlari()	U faqat massivning kalitlarini o'z ichiga olgan iterator ob'ektini yaratadi, so'ngra ushbu tugmalar orqali aylanadi.
// lastIndexOf()	U berilgan massivda belgilangan elementni qidiradi va oxirgi moslik indeksini qaytaradi.
// map()	U har bir massiv elementi uchun belgilangan funksiyani chaqiradi va yangi massivni qaytaradi
// of()	U har qanday turdagi argumentlarni o'z ichiga olgan o'zgaruvchan sonli argumentlardan yangi massiv yaratadi.
// pop()	U massivning oxirgi elementini olib tashlaydi va qaytaradi.
// Durang()	U massiv oxiriga bir yoki bir nechta elementlarni qo'shadi.
// teskari()	Berilgan massivning elementlarini teskari aylantiradi.
// kamaytirish (funktsiya, boshlang'ich)	U chapdan o'ngga har bir qiymat uchun taqdim etilgan funktsiyani bajaradi va massivni bitta qiymatga qisqartiradi.
// kamaytirishRight()	U o'ngdan chapga har bir qiymat uchun taqdim etilgan funktsiyani bajaradi va massivni bitta qiymatga qisqartiradi.
// biroz()	U massivning biron bir elementi amalga oshirilgan funktsiya testidan o'tishini aniqlaydi.
// shift()	U massivning birinchi elementini olib tashlaydi va qaytaradi.
// tilim()	U berilgan massiv qismining nusxasini o'z ichiga olgan yangi massivni qaytaradi.
// sort()	U berilgan massiv elementini tartiblangan tartibda qaytaradi.
// splice()	Berilgan massivga elementlarni qo'shish/o'chirish.
// toLocaleString()	Belgilangan massivning barcha elementlarini o'z ichiga olgan qatorni qaytaradi.
// toString()	U belgilangan massivning elementlarini asl massivga ta'sir qilmasdan, satr shakliga aylantiradi.
// unshift()	U berilgan massivning boshiga bir yoki bir nechta elementlarni qo'shadi.
// qiymatlar()	U massivdagi har bir indeks uchun qiymatlarni tashuvchi yangi iterator obyektini yaratadi.

// Massiv konstruktori boʻyicha obyekt yaratish misoli quyida keltirilgan.

// Massiv
// Ob'ekt Array, boshqa dasturlash tillaridagi massivlarda bo'lgani kabi, bitta o'zgaruvchi nomi ostida bir nechta elementlar to'plamini saqlashga imkon beradi va umumiy massiv operatsiyalarini bajarish uchun a'zolarga ega .

// Tavsif
// JavaScript-da massivlar ibtidoiy emas, balki Arrayquyidagi asosiy xususiyatlarga ega ob'ektlardir:

// JavaScri

// JavaScript sintaksisi raqam bilan boshlanadigan xususiyatlarga nuqta belgisi o'rniga qavs belgisi yordamida kirishni talab qiladi .

// splice();

// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// Array.from();
// ArrayMassivga o'xshash ob'ektdan yoki takrorlanadigan ob'ektdan yangi misol yaratadi .

// Array.isArray();
// trueArgument massiv yoki boshqacha bo'lsa, qaytaradi false.

// Array.of();
// ArrayArgumentlar soni yoki turidan qat'i nazar, o'zgaruvchan sonli argumentlar bilan yangi misol yaratadi .

const fruits = [];
fruits.push("banana", "apple", "peach", "fruit", "obricose");
console.log(fruits.length); // 3

// exam

let res = {};
const get = (srt) => {
  for (j of srt) {
    if (res[("webbrain", "academy", [1, 2, 3, 4])] in res) res[i]++;
    else res[i] = 1;
  }
};
// let ar1 = [1, 2, 3, 4];
// let ar2 = ["webbrain", "academy"];

get();
