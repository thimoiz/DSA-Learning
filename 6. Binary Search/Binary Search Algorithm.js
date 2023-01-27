// Algorithm Binary Search

let array = [-4, -1, 2, 3, 5, 7, 8, 9];
let n = array.length;

// ============= Using Iteration ===============

function binarySearch(array, n, element) {
  let start = 0,
    end = n - 1;

  while (start <= end) {
    let mid = (start + end) >> 1;
    if (array[mid] == element) {
      return mid;
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// ============= Using Recursion ===============

function recursionBinarySearch(array, n, element, start = 0, end = n - 1) {
  let mid = (start + end) >> 1;

  // Base cases
  if (array[mid] == element) return mid;
  if (start >= end) return -1;

  // Recursion
  if (array[mid] < element) {
    return recursionBinarySearch(array, n, element, mid + 1, end);
  } else if (array[mid] > element) {
    return recursionBinarySearch(array, n, element, start, mid - 1);
  }
}

console.log(recursionBinarySearch(array, n, 5));
