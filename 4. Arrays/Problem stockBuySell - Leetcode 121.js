// At a single time you can buy only once
let array = [3, 5, 1, 7, 4, 9, 3];

function maxProfit(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    min = Math.min(min, array[i]);
    max = Math.max(max, array[i]);
  }
  return `Your profit is ${max - min}`;
}

console.log(maxProfit(array));
