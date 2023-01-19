function isSorted(array, index = 1) {
  if (index == array.length - 1) {
    console.log("Array is sorted");
    return;
  }
  if (array[index - 1] <= array[index]) {
    isSorted(array, index + 1);
  } else console.log("Array is not sorted");
}

isSorted([1, 2, 3, 5, 5]);
console.log(5 > 5);
