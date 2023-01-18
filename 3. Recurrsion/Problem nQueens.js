const n = 4; // Number of queens
const board = new Array(n).fill(0).map(() => new Array(n).fill(0));

function isSafe(row, col) {
  // Check if a queen can be placed on board[row][col]
  // Check left side of the current row
  for (let i = 0; i < col; i++) {
    if (board[row][i]) {
      return false;
    }
  }

  // Check upper diagonal on left side
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  // Check lower diagonal on left side
  for (let i = row, j = col; i < n && j >= 0; i++, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  return true;
}

function solveNQueens() {
  if (solveNQueensHelper(0)) {
    // Print the solution
    for (let i = 0; i < n; i++) {
      console.log(board[i].join(" "));
    }
  } else {
    console.log("Solution does not exist");
  }
}

function solveNQueensHelper(col) {
  if (col === n) {
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (isSafe(i, col)) {
      board[i][col] = 1;
      if (solveNQueensHelper(col + 1)) {
        return true;
      }
      board[i][col] = 0;
    }
  }
  return false;
}

solveNQueens();
