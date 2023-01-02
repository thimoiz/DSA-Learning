function bitSumPair(array) {
  let ans = 0;
  let n = array.length;
  for (let i = 0; i < 32; i++) {
    let countOnes = 0;
    let mask = 1 << i;
    for (let j = 0; j < n; j++) {
      if ((array[j] & mask) !== 0) {
        countOnes++;
      }
    }
    ans += countOnes * (n - countOnes) * 2;
  }
  return ans;
}

console.log(bitSumPair([1, 3, 5]));
