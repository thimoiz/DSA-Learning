// Finding Max Sum of K subArrays : K is number of SubArray

let array = [1, 1, 2, 5, 6, 7, 4, 3];
let k = 4; // k is subArray length

function maxSum(array, k) {
  let res = array[0];
  let tSum = 0;
  for (let i = 0; i < k; i++) {
    tSum += array[i];
  }
  res = Math.max(tSum, res);
  for (let i = k; i < array.length; i++) {
    tSum = tSum + array[i] - array[i - k];
    res = Math.max(res, tSum);
  }
  return res;
}

console.log(maxSum(array, k));
