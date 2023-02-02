// find pair with sum zero [-4, 4] ----> output

let array = [10, 15, -5, 15, -10, 5];

function twoSum(array) {
  if (array.length < 2) return [];

  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  let res = [];

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      res.push([array[left], array[right]]);
      left++;
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

console.log(twoSum(array));
