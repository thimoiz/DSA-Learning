function GCD(a, b) {
  if (b == 0) {
    return a;
  }
  return GCD(b, a % b);
}

let a = 24,
  b = 60;

// GCD is Similar term of HCF
let HCF = GCD(a, b);
let LCM = (a * b) / HCF;

console.log("HCF = ", HCF, "\nLCM = ", LCM);
