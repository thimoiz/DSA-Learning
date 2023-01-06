function getRev(n) {
  let rev = 0;
  while (n !== 0) {
    let lmsb = n & 1;
    rev |= lmsb;
    rev <<= 1;
    n >>= 1;
  }
  rev >>= 1;
  return rev;
}

function palindromicBinaryRepresentation(n) {
  let count = 1,
    len = 1;
  while (count < n) {
    len++;
    let elementsForThisLength = 1 << ((len - 1) >> 1); // can be written as 2 power (length - 1) / 2
    count += elementsForThisLength;
  }
  count -= 1 << ((len - 1) >> 1); // can be written as 2 power (length - 1) / 2
  let offSet = n - count - 1; // -1 is due to indexing

  let ans = 1 << (len - 1); // can be written as 2 power (length - 1) / 2
  ans |= offSet << (len >> 1); // offSet << length / 2

  let valForReverse = ans >> (len >> 1); // ans >> Length / 2
  let rev = getRev(valForReverse);

  ans |= rev;
  return ans;
}

console.log(palindromicBinaryRepresentation(9));
