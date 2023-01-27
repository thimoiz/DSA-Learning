// Insertion Sort ==> Array into two partts

let array = [4, 5, 2, 3, 1, 9, 7, 0];
let n = array.length;

// ================ Using Iteration ==================
function insertionSort(array, n) {
  for (let i = 1; i < n; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
}

// =============== Using Recursion ===================
function recursionInsertionSort(array, n) {
  // Base Case
  if (n == 1) return;

  // Recursiive Approach we have n - 1 sorted Array
  recursionInsertionSort(array, n - 1);

  let temp = array[n - 1];
  let j = n - 2;

  while (j >= 0 && array[j] > temp) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = temp;
}

recursionInsertionSort(array, n);
console.log(array);
