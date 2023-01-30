// Finding Max Sum of K subArrays : K is number of SubArray

let array = [1, 1, 2, 5, 6, 7, 4, 3];
let k = 4;

function maxSumSubArray(array, k) {
  let map = {};
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += array[i];
  }
  map[sum] = 1;
  let j = 0;
  for (let i = k; i < array.length; i++) {
    sum += array[i] - array[j];
    j++;
    map[sum] = j + 1;
  }
  // console.log(map);
  let res = Object.keys(map);
  max = 0;
  for (let key of res) {
    max = Math.max(max, key);
  }
  return max;
}

console.log(maxSumSubArray(array, 4));
