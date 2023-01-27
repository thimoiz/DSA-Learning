// It uses Pivot and Partition rule
// Pivot can be : ist element, median, random, last element

let array = [3, 9, 4, 1, 2, 0, 8, 5];
let n = array.length;

// Helper Function
function partition(array, start, end) {
  let pivot = array[end];
  // i for finding empty spaces
  let i = start - 1;

  // This loop will iterate upto 2nd last element
  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      i++;
      // Swaping
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  // for the increment
  i++;
  // after loop we find original position of pivot in i
  let temp = array[end];
  array[end] = array[i];
  array[i] = temp;
  return i;
}

function quickSort(array, start = 0, end = array.length - 1) {
  // Basecase
  if (start >= end) {
    return;
  }

  let pivotIndex = partition(array, start, end);
  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
}

quickSort(array);
console.log(array);
