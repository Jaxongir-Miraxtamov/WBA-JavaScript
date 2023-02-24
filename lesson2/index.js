// Prefix and Postfix
let a = 1,
  b = 1;

let c = ++a; //2
let d = b++; //1

console.log(c);
console.log(d);

// Assinment result

let k = 2;
let x = 1 + (k *= 2);

console.log(x); //5

// Type conversion

"" + 1 + 0;
console.log("" + 1 + 0); //0+1+0=1

"" - 1 + 0;
console.log("" - 1 + 0); // 0-1+0=-1

true + false;
console.log(true + false); //1+0=1

6 / "3";
console.log(6 / "3"); // Faqatgina "stringlar + qoshilsa boshqa joylarda" shnda bu 6/3=2

"2" * "3";
console.log("2" * "3"); //2*3=6

4 + 5 + "px";
console.log(4 + 5 + "px"); // 4+5+px=9px

"$" + 4 + 5;
console.log("$" + 4 + 5); // $+4+5=45$

"4" - 2;
console.log("4" - 2); // "4"-2 =2

" -9" + 5;
console.log(" -9" + 5); // -9 + 5= -14

" -9" - 5;
console.log(" -9" - 5); // -9-5 = -95

null + 1;
console.log(null + 1); // 1

undefined + 1;
console.log(undefined + 1); // underfined +1 =NaN

"\t\n" - 2;
console.log("\t\n" - 2); //  0-2 = -2

// Comparisons
console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); //false
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false
