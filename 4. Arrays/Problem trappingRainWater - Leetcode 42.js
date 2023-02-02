// Water trapping in Arrays

/*
        3   1   2   4   0   1   3   2

//  Logic : water will only be filled when left and right block is greater

                         ⬜                   
        ⬜   💧   💧   ⬜   💧   💧   ⬜   
        ⬜   💧   ⬜   ⬜   💧   💧   ⬜   ⬜
        ⬜   ⬜   ⬜   ⬜   💧   ⬜   ⬜   ⬜

left:   3     3     3    4     4    4    4     4
right:  4     4     4    4     3    3    3     2 ==> Started from right

*/

let array = [3, 1, 2, 4, 0, 1, 3, 2];

function trappingWater(height) {
  let n = height.length;
  let res = [];
  let left = new Array(n),
    right = new Array(n);

  let maxHeightLeft = 0;
  for (let i = 0; i < n; i++) {
    left[i] = Math.max(maxHeightLeft, height[i]);
    // Updating maxHeightLeft
    maxHeightLeft = left[i];
  }

  let maxHeightRight = 0;
  for (let i = n - 1; i >= 0; i--) {
    right[i] = Math.max(maxHeightRight, height[i]);
    // Updating maxHeightRight
    maxHeightRight = right[i];
  }

  for (let i = 0; i < n; i++) {
    let trappedWater = Math.min(left[i], right[i]) - height[i];
    res[i] = trappedWater;
  }

  return res;
}

console.log(trappingWater(array));
