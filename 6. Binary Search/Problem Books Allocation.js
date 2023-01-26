// Books Allocation ==> Minimize the maximum pages read by a student

let arr1 = [10, 20, 5, 15, 5];
let arr2 = [10, 10, 20, 30];

// Helper Function
function isFeasible(array, students, result) {
  let checkStudent = 1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (sum + array[i] > result) {
      checkStudent++;
      sum = array[i];
    } else {
      sum += array[i];
    }
  }
  if (checkStudent <= students) return true;
  return false;
}

// Solution
function booksAllocation(array, students) {
  // This will return maximum value from array
  let min = array.reduce((a, b) => Math.max(a, b));
  // This will return sum of all values in an array
  let max = array.reduce((a, b) => a + b);
  let res = 0;

  while (min <= max) {
    let mid = (min + max) >> 1;
    if (isFeasible(array, students, mid)) {
      res = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return res;
}

console.log(booksAllocation(arr1, 2));
console.log(booksAllocation(arr2, 2));
