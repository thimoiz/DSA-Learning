// ===================================================================
// Q : Find non repeating TWO elements, while every element is 2 times
// ===================================================================

let arrayTWO = [1, 1, 2, 3, 3, 4, 5, 5];

function nonRepeatTWO(array) {
  let xor = 0,
    a = 0,
    b = 0;
  for (let value of array) {
    xor = xor ^ value;
  }

  // in case of 13 : 1 1 0 1 ===> the right most significant bit is at 0 position
  // and it can be accesible by this formula
  rightMostSignificantBit = xor & -xor;

  for (let value of array) {
    if ((value & rightMostSignificantBit) !== 0) {
      a ^= value;
    } else {
      b ^= value;
    }
  }
  console.log([a, b]);
}

nonRepeatTWO(arrayTWO);
