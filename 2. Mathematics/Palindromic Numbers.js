function palNumber(n) {
  let res = 0,
    temp = n;
  while (temp !== 0) {
    res = res * 10 + (temp % 10); // lastDigit = n % 10 ----- res = lastDigit * 10;
    temp = ~~(temp / 10); // (~~) will return negative value but Math.floor not
  }
  if (n === res) return true;
  else return false;
}

console.log(palNumber(123));
