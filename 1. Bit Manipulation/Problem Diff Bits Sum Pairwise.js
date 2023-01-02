function bitSumPair(array) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let countOnes = 0;
    let mask = 1 << i;
    for (let j = 0; j < array.length; j++) {
      if ((array[j] & mask) !== 0) {
        countOnes++;
      }
    }
    ans += countOnes * (array.length - countOnes) * 2;
  }
  return ans;
}

console.log(bitSumPair([1, 3, 5]));
