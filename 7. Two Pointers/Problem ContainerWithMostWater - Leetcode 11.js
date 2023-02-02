// Using Two Pointer Approach

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// Graph
/*  height  :   1   8   6   2   5   4   8   3   7

            8       |                   |
            7       |                   |       |
            6       |   |               |       |
            5       |   |       |       |       |
            4       |   |       |   |   |       |
            3       |   |       |   |   |   |   |
            2       |   |   |   |   |   |   |   |
            1   |   |   |   |   |   |   |   |   |
            
Indexing        0   1   2   3   4   5   6   7   8   ==> Width = End - Start

*/

function maxArea(height) {
  let max = 0;

  // Pointers
  let start = 0,
    end = height.length - 1;

  while (start < end) {
    // Water stored in the minHeight
    let minHeight = Math.min(height[start], height[end]);
    // Width is the blocks calculating
    let width = end - start;
    // Area = Height * Width
    let tArea = minHeight * width;

    max = Math.max(tArea, max);

    // Condition for moving pointer
    if (start < end) start++;
    else end--;
  }

  return max;
}

console.log(maxArea(height));
