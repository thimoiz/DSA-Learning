// Find pair of sum zero ==> Array must be sorted

let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function sumZero(array) {
  let left = 0,
    right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero(array));
