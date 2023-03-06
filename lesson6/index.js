// JavaScript-dagi deyarli barcha ob'ektlar ning misollari Object; tipik ob'ekt dan xususiyatlarni (shu jumladan usullarni) meros qilib oladi Object.prototype, garchi bu xususiyatlar soyada bo'lishi mumkin (aka bekor qilingan). Meros olmaydigan yagona ob'ektlar prototype ga ega yoki boshqa prototip ob'ektlaridan kelib chiqqan Object.prototypeob'ektlardir .nullnull

// Ob'ektlar bir qator qo'shimcha funktsiyalarga ega bo'lgan assotsiativ massivlardir.

// Ular xususiyatlarni (kalit-qiymat juftlari) saqlaydi, bu erda:

// Xususiyat kalitlari satrlar yoki belgilar (odatda satrlar) bo'lishi kerak.
// Qadriyatlar har qanday turdagi bo'lishi mumkin.
// Mulkga kirish uchun biz foydalanishimiz mumkin:

// Nuqta belgisi: obj.property.
// Kvadrat qavslar obj["property"]. Kvadrat qavslar o'zgaruvchidan kalitni olish imkonini beradi, masalan, obj[varWithKey].
// Qo'shimcha operatorlar:

// Mulkni o'chirish: delete obj.prop.
// Mulk mavjudligini tekshirish: "key" in obj.
// Ob'ekt xususiyatlari bo'yicha takrorlash: a for loop for (let key in obj).
// Ushbu bobda biz o'rgangan narsa "oddiy ob'ekt" yoki oddiygina Object.

// JavaScript-da ko'plab boshqa turdagi ob'ektlar mavjud:

// Arraybuyurtma qilingan ma'lumotlar to'plamini saqlash uchun,
// Datesana va vaqt ma'lumotlarini saqlash uchun,
// Errorxato ma'lumotlarini saqlash uchun.
// … va hokazo.

// exam 1
const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

console.log(user);

// Agar qiymat nullyoki bo'lsa undefined, u bo'sh ob'ektni yaratadi va qaytaradi.
// Aks holda, u berilgan qiymatga mos keladigan Type ob'ektini qaytaradi.
// Agar qiymat allaqachon ob'ekt bo'lsa, u qiymatni qaytaradi.

let user = {
  name: "John",
  age: 30,
};
// Har bir xususiyat kalitga ega (shuningdek, "nom" yoki "identifikator" deb ataladi). Mulk nomidan keyin ikki nuqta qo‘yiladi ":", so‘ngra xususiyat qiymati ko‘rsatiladi. Agar ob'ekt bir nechta xususiyatga ega bo'lsa, ular vergul bilan ajratiladi.

// Ob'ekt userendi ikkita xususiyatga ega:

// Nomi "name"va qiymati bo'lgan birinchi xususiyat "John".
// Nomi "age"va qiymati bilan ikkinchi xususiyat 30.

let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6

// exam 4

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...другие свойства
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
// exam3'

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // ключи
  alert(key); // name, age, isAdmin
  // значения ключей
  alert(user[key]); // John, 30, true
}
