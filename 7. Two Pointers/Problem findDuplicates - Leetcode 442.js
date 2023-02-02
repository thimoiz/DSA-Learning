// find duplicates in O(n) and O(1)
// Condition ==> Duplicates Range : 1 <= A[i] <= N
// If any element found then array must have its -1 element

let array = [4, 3, 2, 7, 8, 2, 3, 1];

function duplicatesN(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let element = Math.abs(array[i]);
    // in this case n = element and n - 1 is element visited
    if (array[element - 1] > 0) {
      array[element - 1] = -1 * array[element - 1];
    } else {
      res.push(element);
    }
  }
  return res;
}

console.log(duplicatesN(array));
