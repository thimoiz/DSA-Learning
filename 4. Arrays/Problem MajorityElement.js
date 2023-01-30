// =================================================
// =============== Moore's Voting Algorithm ========
// =================================================

let array1 = [1, 3, 4, 4, 4, 4, 5];
let array2 = [1, 1, 1, 2, 3, 5, 7];

// ================ Case 1 > N / 2 =================

function majorityElement(array) {
  let count = 0,
    n = array.length,
    element = 0;

  // Loop to check majority element
  for (let i = 0; i < n; i++) {
    if (element == array[i]) {
      count++;
    } else if (count == 0) {
      element = array[i];
      count = 1;
    } else {
      count--;
    }
  }

  // Loop to check frequency if it is greater than n / 2
  let frequency = 0;
  for (let i = 0; i < n; i++) {
    if (element == array[i]) frequency++;
  }

  // Now Return Statement
  if (frequency > n / 2) {
    return element;
  } else {
    return "No Element is more than n / 2 times";
  }
}
console.log(majorityElement(array1));

// ================ Case 2 > N / 3 =================

function majorityElement2(A) {
  let count1 = 0,
    count2 = 0;
  let element1 = 0,
    element2 = 0;
  let n = Math.floor(A.length / 3);

  for (let i = 0; i < A.length; i++) {
    if (A[i] == element1) count1++;
    else if (A[i] == element2) count2++;
    else if (count1 < 1) {
      count1 = 1;
      element1 = A[i];
    } else if (count2 < 1) {
      count2 = 1;
      element2 = A[i];
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;
  for (let value of A) {
    if (element1 == value) count1++;
    if (element2 == value) count2++;
  }

  if (count1 > n) return element1;
  else if (count2 > n) return element2;
  else return -1;
}
console.log(majorityElement2(array2));
