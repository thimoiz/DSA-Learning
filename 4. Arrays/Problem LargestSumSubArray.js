// =================================================
// =============== Kadane's Algorithm ==============
// =================================================

let array1 = [1, -2, 5, 6, -3, 5];
let array2 = [-526, -25];

// ============ Finds the largest sum of a subArray =============
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
console.log(largestSum(array1));

// ============= For Negative numbers and better Approach ============
function negativeNum(A) {
  let tSum = A[0],
    maxSum = A[0];

  for (let i = 1; i < A.length; i++) {
    tSum = tSum + A[i];

    if (tSum < A[i]) {
      tSum = A[i];
    }

    maxSum = Math.max(tSum, maxSum);
  }

  return maxSum;
}
console.log(negativeNum(array1));
console.log(negativeNum(array2));
