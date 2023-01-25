// Bubble Sorting ==> last element at the end

let array = [4, 5, 2, 3, 1, 7, 9, 0];
let n = array.length - 1;

// ============== Using iteration ================

function bubbleSort(array, n) {
  for (let i = n; i >= 0; i--) {
    let isSwapped;
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return array;
}

// ================ Using recursion =================

function recursionBubbleSort(array, n) {
  // Base case
  if (n == 0) return;

  // Flag if sorting is needed
  let isSwapped;

  for (let j = 0; j < n; j++) {
    if (array[j] > array[j + 1]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      isSwapped = true;
    }
  }
  if (!isSwapped) return;
  recursionBubbleSort(array, n - 1);
}

recursionBubbleSort(array, n);
console.log(array);
