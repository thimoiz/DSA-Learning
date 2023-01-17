// ==========================================================
// =================== Sorting Array ========================
// ==========================================================

function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return true;
}

let i = 0,
  j = 1;
let sortedArray = [];

function arraySorting(array) {
  if (isSorted(array)) {
    sortedArray = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    arraySorting(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    arraySorting(array);
  }
}

arraySorting([8, 5, 3, 9, 1, 4, 6]);
console.log(sortedArray);
