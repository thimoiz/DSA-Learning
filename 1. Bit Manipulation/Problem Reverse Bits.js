function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let leftSignificantBit = n & 1;
    let revLSB = leftSignificantBit << (31 - i);
    result |= revLSB;
    n >>= 1;
  }
  return result;
}
console.log(reverseBits(3));
