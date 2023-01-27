// Merge Sort uses divide and conquer technique
// Time Complexity (N log N) : Space Complexity O(N)

let array = [3, 9, 4, 1, 2, 0, 8, 5];
let n = array.length;

// Helper Functions
function conqueror(array, start, mid, end) {
  let mergedArray = new Array(end - start + 1); // indicates size of array

  // Index for left Array
  let sIndex = start;
  // Index for Right Array
  let midIndex = mid + 1;
  // Index for MergedArray
  let index = 0;

  // Sort and Copying elements from array
  while (sIndex <= mid && midIndex <= end) {
    if (array[sIndex] <= array[midIndex]) {
      mergedArray[index] = array[sIndex];
      index++, sIndex++;
    } else {
      mergedArray[index++] = array[midIndex++];
    }
  }

  // Downside both conditions only work when above one statement is false

  while (sIndex <= mid) {
    mergedArray[index++] = array[sIndex++];
  }

  while (midIndex <= end) {
    mergedArray[index++] = array[midIndex++];
  }

  for (let i = 0, j = start; i < mergedArray.length; i++, j++) {
    array[j] = mergedArray[i];
  }
}

// Solution
function mergeSort(array, start = 0, end = array.length - 1) {
  // Base case in Divide and Conquer Technique
  if (start >= end) {
    return;
  }

  // Dividing Arrays
  let mid = Math.floor((start + end) / 2);
  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);

  // Conquering Arrays
  conqueror(array, start, mid, end);
}

mergeSort(array);
console.log(array);
