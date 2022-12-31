// =========================================
// =========== Q : FIND NTH BIT ============
// =========================================

let number = 0b1110;
console.log("The Number is :", number, " & The Bits are 1 1 1 0");

function findBIT(number, index) {
  let mask = 1 << index;
  if ((number & mask) !== 0) console.log("The Bit at ", index, "is ", 1);
  else if ((number & mask) === 0) console.log("The Bit at ", index, "is ", 0);
}

findBIT(number, 2);

// =========================================
// =========== Q : SET NTH BIT =============
// =========================================

function setBIT(number, index) {
  let mask = 1 << index;
  number = number | mask;
  console.log("After Set Bit : ", number);
}

setBIT(number, 5);

// =========================================
// =========== Q : CLEAR NTH BIT ===========
// =========================================

function clearBIT(number, index) {
  let mask = 1 << index;
  number = number ^ mask;
  console.log("After Clearing Bit : ", number);
}

clearBIT(number, 2);

// ======================================================
// Q : How Many Bits are required to convert "a" into "b"
// ======================================================

let a = 10,
  b = 15;

function numBITS(a, b) {
  let bits = a ^ b,
    count = 0;
  while (bits !== 0) {
    bits = bits & (bits - 1);
    count++;
  }
  console.log("Required Bits are : ", count);
}

numBITS(a, b);
