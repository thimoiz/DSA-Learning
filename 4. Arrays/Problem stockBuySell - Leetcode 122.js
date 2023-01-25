// In this problem we can buy stock multiple times and sell it
let array = [5, 2, 7, 3, 6, 1, 2, 4];
//              B  S  B  S  B     S     ==> B = Buy and S = Sell
//                  Profit = Sell - Buy
//                5     3      3        ==> 5 + 3 + 3 = 11

function maxProfit(array) {
  let profit = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      profit += array[i] - array[i - 1];
    }
  }
  return `Maximum Profit earned is $${profit}`;
}

console.log(maxProfit(array));
