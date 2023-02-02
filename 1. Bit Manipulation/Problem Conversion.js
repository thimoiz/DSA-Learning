// Hexadecimal
let num = 1633652;

function toHex(num) {
  if (num == 0) {
    return 0;
  }
  let hex = "0123456789ABCDEF";
  let ans = "";
  while (num != 0) {
    // writing ans at end ==> this will add ans = "" at the end
    ans = hex[num & 15] + ans;
    // The equivalent of num & 15 in the code is num % 16.
    num >>= 4;
    // right shifted base time i.e base of hexaDecimal is 16
  }
  return ans;
}

console.log(toHex(num));
console.log(num.toString(16));

function toBinary(num) {
  let bin = "01";
  let ans = "";
  while (num != 0) {
    ans = bin[num & 1] + ans; // in this case n & 1 means n % 2
    num >>= 1;
  }
  return ans;
}

console.log(toBinary(num));
console.log(num.toString(2));
