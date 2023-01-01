// ==============================================================
// Q : Find non repeating element, while every element is 2 times
// ==============================================================

let arrayONE = [1, 1, 2, 2, 3, 4, 4, 5, 5];

function nonREPEAT(array) {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    number = number ^ array[i];
  }
  console.log(number);
}

nonREPEAT(arrayONE);

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

// ==============================================================
// Q : Find non repeating element, while every element is 3 times
// ==============================================================

let arrayTHREE = [1, 1, 1, 2, 3, 3, 3];

function nonREPEAT3(array) {
  // Initialize variables to store the sum of the bits at each position
  let bit0 = 0;
  let bit1 = 0;
  let bit2 = 0;

  // Iterate through the array and add the bits at each position for each element
  for (let i = 0; i < array.length; i++) {
    bit0 += array[i] & 1;
    bit1 += (array[i] >> 1) & 1;
    bit2 += (array[i] >> 2) & 1;
  }
  console.log("Sum0 = ", bit0);
  console.log("Sum1 = ", bit1);
  console.log("Sum2 = ", bit2);
  // Calculate the remainder when each sum is divided by 3
  let rem0 = bit0 % 3;
  let rem1 = bit1 % 3;
  let rem2 = bit2 % 3;

  let result = 0;

  // If the remainder is not 0, then the bit at that position is set in the non-repeating element
  if (rem0 !== 0) result |= 1;
  if (rem1 !== 0) result |= 1 << 1;
  if (rem2 !== 0) result |= 1 << 2;

  console.log(result);
}

nonREPEAT3(arrayTHREE);
