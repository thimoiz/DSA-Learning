// find pair with sum zero [-4, 4] ----> output
// Array must be sorted in this case
// Time complexity is linear O(n Log n)

let array = [10, 15, -5, 15, -10, 5];
let array2 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function subArraySum(array, sum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let tSum = array[left] + array[right];
    if (tSum == sum) {
      break;
    } else if (tSum < sum) {
      left++;
    } else {
      right--;
    }
  }

  return [array[left], array[right]];
}

console.log(subArraySum(array, 5));
