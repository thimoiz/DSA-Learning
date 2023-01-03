function swapping(n, p1, p2) {
  // Indexing starts from 0 , so we took position - 1
  p1 -= 1;
  p2 -= 1;

  let bitP1 = n & (1 << p1);
  let bitP2 = n & (1 << p2);

  if (bitP1 !== bitP2) {
    n = n ^ (1 << p1);
    n = n ^ (1 << p2);
  }

  return n;
}

console.log(swapping(0b1110, 3, 1).toString(2));
