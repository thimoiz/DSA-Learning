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
    let elementsForThisLength = 1 << ((len - 1) >> 1);
    count += elementsForThisLength;
  }
  count -= 1 << ((len - 1) >> 1);
  let offSet = n - count - 1;

  let ans = 1 << (len - 1);
  ans |= offSet << (len >> 1);

  let valForReverse = ans >> (len >> 1);
  let rev = getRev(valForReverse);

  ans |= rev;
  return ans;
}

console.log(palindromicBinaryRepresentation(9));
