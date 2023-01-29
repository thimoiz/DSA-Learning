// Finding SubArray with the given sum k

let array = [10, 2, -2, -20, 10];
let k = -10;

function subArray(array, sum) {
  let map = {};

  let curSum = 0;
  let start = 0;
  let end = -1;

  for (let i = 0; i < array.length; i++) {
    curSum += array[i];
    map[curSum] = i;
    if (curSum == sum) {
      start = 0;
      end = map[curSum];
      break;
    } else if (map[curSum - sum]) {
      start = map[curSum - sum] + 1;
      end = i;
      break;
    }
  }
  let res = [];
  if (end == -1) {
    return "Not Found";
  } else {
    for (let i = start; i <= end; i++) {
      res.push(array[i]);
    }
    return res;
  }
}

console.log(subArray(array, k));
