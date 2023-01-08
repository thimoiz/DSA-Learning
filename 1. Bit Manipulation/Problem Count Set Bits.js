function countSetBits2(n) {
  let ans = new Array(n + 1).fill(0);

  ans[0] = 0;
  ans[1] = 1;

  for (let i = 2; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
    // n & 1 === n % 2 ------ n >> 1 = n / 2 (int)
  }
  return ans;
}

console.log(countSetBits2(15));

// Logic is same :
// 0  : 0000
// 1  : 0001
// 2  : 0010
// 3  : 0011
// 4  : 0100
// 5  : 0101
// 6  : 0110
// 7  : 0111

// IF Number is EVEN (n % 2 == 0) then the bits are equal to 'n/2' or 'n >> 1'
// IF Number is ODD (n % 2 == 1) then the bits are equal to '1 + n/2' or '1 + n >> 1'

// n & 1 == n % 2
