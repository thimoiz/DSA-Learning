const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

function divide(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 0) {
    return INT_MAX;
  }

  if (
    (dividend === INT_MAX && divisor === 1) ||
    (dividend === INT_MIN && divisor === -1)
  ) {
    return INT_MAX;
  }

  let quotient = 0;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);

  let shift = 0;
  let temp = absDivisor << shift;
  while (temp <= absDividend) {
    shift++;
  }
  // console.log(shift);

  for (let i = shift - 1; i >= 0; i--) {
    let temp2 = absDivisor << i;

    if (temp2 <= absDividend) {
      absDividend = absDividend - temp2;
      quotient += 1 << i;
    }
  }

  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    return quotient;
  } else {
    return -quotient;
  }
}

console.log(divide(89, 8));
