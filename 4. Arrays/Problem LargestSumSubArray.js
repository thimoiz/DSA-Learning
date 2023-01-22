// =================================================
// =============== Kadane's Algorithm ==============
// =================================================

// Finds the largest sum of a subArray
let array = [1, -2, 5, 6, -3, 5];

function largestSum(array) {
  let maxSum = 0,
    tSum = 0;
  for (let i = 0; i < array.length; i++) {
    tSum = tSum + array[i];
    if (tSum > maxSum) {
      maxSum = tSum;
    }
    if (tSum < 0) {
      tSum = 0;
    }
  }
  return maxSum;
}

console.log(largestSum(array));
