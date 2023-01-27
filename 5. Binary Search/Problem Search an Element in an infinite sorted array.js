// We can use range in this case see notes for more details

let array = [
  3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];

// Helper Function
function binarySearch(array, start, end, element) {
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (array[mid] == element) return mid;
    else if (array[mid] > element) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// Searching in an infinite array
function searchInfinite(array, element) {
  let start = 0;
  let end = 1;
  // Using exponential growth
  while (array[end] < element) {
    start = end;
    end = end * 2;
  }
  return binarySearch(array, start, end, element);
}

console.log(searchInfinite(array, 68));
