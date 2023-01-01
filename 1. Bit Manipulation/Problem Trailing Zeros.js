function trailingZERO(number) {
  let count = 0;
  while ((number & 1) === 0 && number !== 0) {
    number = number >> 1;
    count++;
  }
  console.log(count);
}

trailingZERO(14);
