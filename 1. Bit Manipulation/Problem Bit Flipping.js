let number = 0b101;

function BitFlip(n) {
  let temp = n,
    significant = 0;
  while (temp !== 0) {
    temp >>= 1;
    significant = (significant << 1) | 1;
  }
  return ~n & significant;
}

console.log(BitFlip(number).toString(2));
console.log(BitFlip(number));
