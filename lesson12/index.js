// crud

let arr = [1, 3, 2, 8, 5, 2, 3, 5];
while (arr.length > 1) {
  arr.sort((a, b) => b - a);
  if (arr[0] - arr[1] != 0) arr[1] = arr[0] - arr[1];
  else if (arr.length == 2) arr = [0];
  arr.shift();
  console.log(arr);
}

// telegram link 5 exam

// const findLength = (n) => {
//   let bin = n.toString(2);
//   console.log(bin);
//   let col = 0,
//     res = 0;
//   for (let i = 0; i < bin.length - 1; i++) {
//     if (bin[i])==1 && bin[+i+1] ==0{
// col=0
//     }
//   }
// };

// exam4

let ar = [1, 2, 3, 4, 5, 6, 2];
const getMiddleArfi = (ar, n) => {
  let res = 0;
  while (ar.length) {
    ar.reduce((sum, curr, index) => {
      let middleArfi = (sum + curr) / (index + 1);
      if (middleArfi == n) {
        res++;
      }
      return sum + curr;
    }, 0);
    ar.shift();
  }
  return res;
};

console.log(getMiddleArfi(ar, 4));

// exam6

let arrr = [1, 2, 5, 4, 9];
while (arrr.length > 1) {
  arrr = arrr.sort((a, b) => a - b);
  let s = arrr[arr.length - 1] - arrr[arrr.length - 2];
  arrr.splice(arrr.length - 2, 2);
  s ? arrr.push(s) : null;
  console.log(arrr);
}
