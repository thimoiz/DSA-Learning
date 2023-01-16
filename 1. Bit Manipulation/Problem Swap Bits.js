function swapping(n, p1, p2) {
  // Indexing starts from 0 , so we took position - 1
  p1 -= 1;
  p2 -= 1;

  let mask1 = 1 << p1;
  let mask2 = 1 << p2;

  let bitP1 = n & mask1;
  let bitP2 = n & mask2;

  if (bitP1 !== bitP2) {
    n = n ^ mask1;
    n = n ^ mask2;
  }

  return n;
}

console.log(swapping(0b1110, 3, 1).toString(2));
