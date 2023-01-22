// =================================================
// =============== Moore's Voting Algorithm ========
// =================================================

// Majority Element > N / 2

let array = [1, 3, 4, 4, 4, 4, 5];

function majorityElement(array) {
  let count = 1,
    n = array.length,
    element = array[0];

  // Loop to check majority element
  for (let i = 1; i < n; i++) {
    if (element == array[i]) {
      count++;
    } else {
      count--;
      if (count == 0) {
        element = array[i];
        count = 1;
      }
    }
  }

  // Loop to check frequency if it is greater than n / 2
  let frequency = 0;
  for (let i = 0; i < n; i++) {
    if (element == array[i]) frequency++;
  }

  // Now Return Statement
  if (frequency > n >> 1) {
    return element;
  } else {
    return "No Element is more than n / 2 times";
  }
}

console.log(majorityElement(array));
