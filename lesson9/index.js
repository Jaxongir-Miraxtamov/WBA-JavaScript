// let srt1 = "webb \t rain";
// let srt2 = "webbrain";
// let srt3 = `web ${srt1} brain`;

// console.log(srt3[2]);
// console.log(srt1.length);
// console.log(srt3[srt3.length - 4]);

// let srt4 = "Webbrain IT Academy web brain";

// console.log(srt4.toLowerCase().lastIndexOf("web", 1));
// console.log(srt4.toLowerCase().indexOf("web", -10));

// console.log(srt2.includes("web"));
// console.log(srt2.startsWith("web"));
// console.log(srt2.endsWith("web"));

// let srt5 = " 779441512 ";
// console.log(srt5.padStart(srt5.length + 4, "+998"));
// console.log(srt5.padEnd(srt5.length + 4, "00"));

// console.log(srt5.slice(2, 4));
// console.log(srt5.substring(2, 4));

// console.log(srt5.substr(2, 4));
// console.log(eval(2 + 9 * 8));
// console.log(srt5.trim().length);
// console.log(srt5.trimStart().length);
// console.log(srt5.trimEnd().length);

// console.log(srt5.split(" "));

// console.log(srt1.concat(srt5, srt1));

// for (let i = 0; i <= srt5.length; i++) {
//   console.log(i);
// }

// for (i of srt5) {
//   console.log(i);
// }

// let srt = "abs ";
// console.log(srt.localeCompare("ab"));

// ================================HOME WORK==========================================

// exam1

function check(st1 = "webbrain", st2 = "acsa") {
  if (st1 > st2) {
    console.log(true);
  } else {
    st1 >= st2 || st1 <= st2;
    console.log(false);
  }
}

check("webbrain");
check("acsa");

// exam2
let str = "webrain";
console.log(str.match());

// exam3
let s = "webbrain academy";
console.log(s.slice(0, 5));

// exam4
let ss = "$1200";
console.log(ss.slice(1, 5));

// exam5
let string = "webb@!n_2022";
console.log(string.match());

// exam6
let ssss = "webbrain academy";
console.log(ssss.toUpperCase());
