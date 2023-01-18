const mod = 1000000007;

function superPower(x, n, mod) {
  if (n < 0) {
    x = 1 / x;
    n = n * -1;
  }
  if (n == 0) return 1;
  if (x == 0) return 0;

  let res = 1;
  while (n > 0) {
    if (n % 2 == 1) {
      res = (res * x) % mod;
    }
    x = (x * x) % mod;
    n >>= 1;
  }

  return res;
}

console.log(superPower(3978432, 5, mod));
