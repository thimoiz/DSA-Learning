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

function trappingWater(array) {
  let n = array.length;
  let leftArr = new Array(n);
  let rightArr = new Array(n);

  let left = 0;
  let right = 0;

  let i = 0;

  // incase of left it will start from left
  while (i < n) {
    left = Math.max(left, array[i]);
    leftArr[i] = left;
    i++;
  }

  i--;

  // in case of right it will start from right
  while (i >= 0) {
    right = Math.max(right, array[i]);
    rightArr[i] = right;
    i--;
  }

  // Final
  let ans = new Array(n);

  for (let i = 0; i < n; i++) {
    let trapWater = Math.min(leftArr[i], rightArr[i]) - array[i];
    ans[i] = trapWater;
  }

  return ans;
}

console.log(trappingWater(array));
