function superPower(a, b) {
  if (b == 0) return 1;
  if (a == 0) return 0;

  let result = superPower(a, b >> 1);

  if (b % 2 == 1) {
    result = result * result * a; // in case of odd x^5 = x^2 * x^2 * x
  } else if (b % 2 == 0) {
    result = result * result; // incase of even x^4 = x^2 * x^2
  }

  return result;
}

console.log(superPower(2, 5));
