// Count no of ways in n x m matrix

/*
                x   0   0
                0   0   0   
                0   0   x
*/

function countWays(row, col) {
  if (row == 1 || col == 1) return 1;
  return countWays(row - 1, col) + countWays(row, col - 1);
}

console.log(countWays(4, 5));
