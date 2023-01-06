const array = [3, 4, 5];

// SubArrays = n * (n + 1) / 2 ==> 6.
// [3], [3, 4], [3, 4, 5], [4], [4, 5], [5]

function xorSubArray(array) {
  let xor = 0,
    n = array.length;

  for (let i = 0; i < n; i++) {
    let subArrayElementWise = (i + 1) * (n - i);
    if (subArrayElementWise % 2 === 1) {
      xor ^= array[i];
    }
  }

  return xor;
}

console.log(xorSubArray(array));

console.log(4 % 1000000007);
