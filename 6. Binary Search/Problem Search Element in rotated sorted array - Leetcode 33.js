// Modified Binary Search is used

let array = [120, 130, 40, 50, 90, 100, 110];

// =========== Using iteration ==============

function modifiedBinarySearch(array, element) {
  let start = 0,
    end = array.length - 1;
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (array[mid] == element) return mid;
    // Left Sorted Arrat
    else if (array[start] < array[mid]) {
      // Checking if element is present in left sorted array
      if (element >= array[start] && element < array[mid]) {
        end = mid - 1;
      }
      // if element is not present in sorted array then we discard it
      else {
        start = mid + 1;
      }
    }
    // Right Sorted Array
    else if (array[mid] < array[end]) {
      // Checking if element is present in Right sorted array
      if (element > array[mid] && element <= array[end]) {
        start = mid + 1;
      }
      // if element is not present in sorted array then we discard it
      else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

// =========== Using Recursion ==============

function rotatedBinarySearch(array, element, start, end) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (array[mid] === element) return mid;
  // Left Sorted Array
  if (array[start] <= array[mid]) {
    if (element >= array[start] && element < array[mid]) {
      return rotatedBinarySearch(array, element, start, mid - 1);
    } else {
      return rotatedBinarySearch(array, element, mid + 1, end);
    }
  }
  // Right Sorted Array
  else if (array[mid] < array[end]) {
    if (element > array[mid] && element <= array[end]) {
      return rotatedBinarySearch(array, element, mid + 1, end);
    } else {
      return rotatedBinarySearch(array, element, start, mid - 1);
    }
  }
}

console.log(rotatedBinarySearch(array, 90, 0, array.length - 1));
