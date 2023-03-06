// If,else//Nullish

if ("0") {
  console.log("Hello");
}

// Exam
let begin = "ECMAScript";
if (begin == "ECMAScript") {
  console.log("Right");
} else {
  console.log("You don't know 'ECMAScript'!");
}

// Exam2

let res = prompt("Type is number: ");
if (res > 0) {
  console.log(1);
} else if (res < 0) {
  console.log(-1);
} else if (res == 0) {
  console.log(0);
} else {
  console.log("Error");
}

// Turnry 1

let result;
let a = 1;
let b = 1;

a + b < 4 ? console.log((result = "below")) : console.log((result = "Over"));

// Turnry 2

let message;

let login = "hello";
login == "Employee"
  ? console.log((message = "Hello"))
  : login == "Directotr"
  ? console.log(message == "Grettings")
  : login == ""
  ? console.log(message == "No login")
  : console.log(" ");
