// find pairs in 2D arrays i.e sum of three == 0
let array = [-1, 0, 1, 2, -1, -4];

function tripletSum(array) {
  if (array.length < 3) return [];
  array.sort((a, b) => a - b);
  let res = [];

  // Approach ===> x + y + z = 0
  //               y + z = -x

  for (let i = 0; i < array.length - 2; i++) {
    // Checking if (i == i - 1) ==> for duplicates
    if (i > 0 && array[i] == array[i - 1]) continue;

    let start = i + 1,
      end = array.length - 1;

    while (start < end) {
      let sum = array[start] + array[end];
      if (sum == -array[i]) {
        res.push([array[i], array[start], array[end]]);
        start++;
        end--;
        // Checking Duplicates in start and end
        while (start < end && array[start] === array[start - 1]) start++;
        while (start < end && array[end] === array[end + 1]) end--;
        // =====================================
      } else if (sum < -array[i]) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
}

console.log(tripletSum(array));
