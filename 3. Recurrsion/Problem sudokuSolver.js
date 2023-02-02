let grid = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

function isSafe(grid, row, col, num) {
  // Check row and col
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num || grid[x][col] === num) {
      return false;
    }
  }

  // Check 3x3 box
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }
  return true;
}

function solveSudokuHelper(grid) {
  let row = -1,
    col = -1;
  let emptyFound = false;

  // Find the first empty cell
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        row = i;
        col = j;
        emptyFound = true;
        break;
      }
    }
    if (emptyFound) {
      break;
    }
  }

  // Base case: If no empty cell is found, the grid is solved
  if (!emptyFound) {
    return true;
  }

  // Try each number from 1 to 9
  for (let num = 1; num <= 9; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;

      // Move to the next empty cell
      if (solveSudokuHelper(grid)) {
        return true;
      }

      // Backtrack
      grid[row][col] = 0;
    }
  }
  return false;
}

function solveSudoku() {
  if (solveSudokuHelper(grid)) {
    for (let i = 0; i < 9; i++) {
      console.log(grid[i].join(" "));
    }
  } else {
    console.log("No solution exists");
  }
}

solveSudoku();
