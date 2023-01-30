// find pair with sum zero [-4, 4] ----> output
// Array must be sorted in this case

let array = [10, 15, -5, 15, -10, 5];

function subArraySum(array) {
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

console.log(subArraySum(array));
