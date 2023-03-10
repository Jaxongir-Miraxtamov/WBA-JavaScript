// Har bir xususiyat kalitga ega (shuningdek, "nom" yoki "identifikator" deb ataladi). Mulk nomidan keyin ikki nuqta qo‘yiladi ":", so‘ngra xususiyat qiymati ko‘rsatiladi. Agar ob'ekt bir nechta xususiyatga ega bo'lsa, ular vergul bilan ajratiladi.

// exam1
function makeUser() {
  return {
    name: "john",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); //what is the results

// exam2
let ladder = {
  step: 1,
  up() {
    this.step++;
  },
  down() {
    this.step++;
  },
  showStep: function () {
    console.log(this.step);
  },
};
// ladder.up().up().down().showStep().down().showStep();

// =======================================
// Ob'ekt userendi ikkita xususiyatga ega:

// Agar qiymat nullyoki bo'lsa undefined, u bo'sh ob'ektni yaratadi va qaytaradi.
// Aks holda, u berilgan qiymatga mos keladigan Type ob'ektini qaytaradi.
// Agar qiymat allaqachon ob'ekt bo'lsa, u qiymatni qaytaradi.

// exam3
function A() {}
function B() {}

let a = new A();
let b = new B();

a = 77;
b = 77;
console.log(a == b);
