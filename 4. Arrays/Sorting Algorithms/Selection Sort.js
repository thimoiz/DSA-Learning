// Selection Sort ==> Collect min element and swap it with first

let array = [4, 5, 2, 3, 1, 9, 7, 0];
let n = array.length;

// ================ Using Iteration ================

function selectionSort(array, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}

selectionSort(array, n);
console.log(array);
