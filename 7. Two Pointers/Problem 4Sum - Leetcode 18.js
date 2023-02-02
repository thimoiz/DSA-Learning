// find pairs in 2D arrays i.e sum of fours == 0
let array = [1, 0, -1, 0, -2, 2];

function fourSum(array) {
  if (array.length < 4) return [];
  let res = [];

  for (let i = 0; i < array.length - 3; i++) {
    // Duplicates
    if (i > 0 && array[i] == array[i - 1]) continue;
    // 2nd iteration
    for (let j = i + 1; j < array.length - 2; j++) {
      // Duplicates
      if (j > i && array[j] == array[j - 1]) continue;
      // Setup for Pointers
      let start = j + 1,
        end = array.length - 1;
      // Last Iteration
      while (start < end) {
        let sum = array[i] + array[j] + array[start] + array[end];
        if (sum == 0) {
          res.push([array[i], array[j], array[start], array[end]]);
          start++;
          end--;
          // Duplicates in inner loop
          while (start < end && array[start] == array[start + 1]) start++;
          while (start < end && array[end] == array[end - 1]) end--;
        }
        if (sum < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return res;
}

console.log(fourSum(array));
