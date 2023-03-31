// // recursion

// // recursion function

// let res = 0;
// const sum = (n) => {
//   console.log(n);
//   if (n === 1) return (res += 1);
//   else {
//     console.log(n);
//     res += n;
//     return sum(n - 1);
//   }
// };

// sum(4); //4+3+2+1

// let res2 = 0;
// const summ = (n) => {
//   console.log(n);
//   if (n === 1) return (res2 += 1);
//   else {
//     console.log(n);
//     res2 += n;
//     return sum(n - 1);
//   }
// };

// sum(41); //4+3+2+1

function pow(x, n) {
  if (n === 1) {
    return x * 1;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(2, 9)); //512

// exam5

let company = {
  sales: [
    {
      name: "Joh",
      salary: 2500,
    },
    {
      name: "Ali",
      salary: 1000,
    },
  ],

  development: {
    sites: [
      {
        name: "salim",
        salary: 500,
      },
      {
        name: "Jack",
        salary: 800,
      },
    ],

    internals: [
      {
        name: "Pow",
        salary: 300,
      },
    ],
  },
};

function pullar(oylik) {
  if (Array.isArray(oylik)) {
    // 1
    return oylik.reduce((prev, current) => prev + current.salary, 0);
  } else {
    //  2
    let sum = 0;
    for (let sub of Object.values(oylik)) {
      sum += pullar(sub);
    }
    return sum;
  }
}

console.log(pullar(company)); // 5100

// exam4

const focus = (n) => {
  return n === 1 ? 1 : n * focus(n - 1);
};
console.log(focus(5)); //120
