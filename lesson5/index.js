// exam 1

// Yangi Functionob'ekt yaratadi. Konstruktorni to'g'ridan-to'g'ri chaqirish funksiyalarni dinamik ravishda yaratishi mumkin, lekin xavfsizlik va shunga o'xshash (lekin unchalik ahamiyatsiz) ishlash muammolaridan aziyat chekadi eval().

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

// exam2
let age = 18;
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    age < 18;
    return false;
  }
  return confirm("Did parents allow you");
}

// exam3

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    age < 18;
    return false;
  }
  return confirm("Did parents allow you");
}

// Funktsiya operator bilan konstruktor sifatida foydalanilganda ishlatiladi new. U yangi ob'ektning prototipiga aylanadi.

// exam4
function min(a = 0, b = 0) {
  let res = a / b;

  return res;
}
console.log(parseInt(min(2, 5)));
console.log(parseInt(min(3, -1)));
console.log(min(1, 1));

// name(a, b);

// exam5

// function mmm(x, n) {
//   return x ** n;
//   console.log(pow(3, 2));
//   console.log(pow(3, 3));
//   console.log(pow(1, 100));
// }
// mmm(x, n);
