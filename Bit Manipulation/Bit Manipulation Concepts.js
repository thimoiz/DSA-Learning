// =============================================================
// =============== Bitwise Operators ===========================
// =============================================================

// 1. "&" AND operator : Only return true when both values are 1 - 1.

// 2. "|" OR operator : Only return true when one value is 1.

// 3. "!" NOT operator : Inverts the bit.

// 4. "^" XOR operator : Only return true when both values are different.

// 5. ">>" RIGHT shift : 12 >> 2 : 12 right shifted to 2 bits
// 12 => Bits = 1 1 0 0 . So when right shifted by 2 bits . Bits => 1 1 = 3
// WHEN we shift 5 >> 1 . It means we divide it by 2 ; RETURN INT VALUE

// 6. "<<" LEFT shifted : 12 << 2 : 12 left shifted to 2 bits
// 12 => Bits = 1 1 0 0 . So when left shifted by 2 bits . Bits => 1 1 0 0 0 0 = 48
// WHEN we shift 5 << 1 . It means we multiply it by 2 ; RETURN INT VALUE

// ======================================================
// ============== EVEN ODD - SWAPPING ===================
// ======================================================

function EO(number) {
  if ((number & 1) === 0) console.log("Even");
  else if ((number & 1) === 1) console.log("ODD");
}

let a = 10;
let b = 15;

EO(a);
EO(b);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("Swapping : ", a, b);
