// ==============================================================
// Q : Find non repeating element, while every element is 3 times
// ==============================================================

let array = [1, 1, 1, 2, 2, 6, 2, 3, 3, 3];

function nonREPEAT(array) {
  let ones = 0,
    twos = 0;
  for (let i = 0; i < array.length; i++) {
    ones = (ones ^ array[i]) & ~twos;
    twos = (twos ^ array[i]) & ~ones;
  }
  console.log(ones);
}

nonREPEAT(array);
