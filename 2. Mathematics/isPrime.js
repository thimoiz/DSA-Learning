function listPrime(n) {
  let array = new Array(n + 1).fill(true);
  array[0] = array[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (array[i]) {
      for (let j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  // This Statement is used to filter products
  return array.map((isPrime, i) => (isPrime ? i : null)).filter((i) => i);
}

console.log(listPrime(12));
