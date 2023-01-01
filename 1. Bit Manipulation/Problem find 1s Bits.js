function countBITS(number) {
  let count = 0;
  while (number !== 0) {
    number = number & (number - 1);
    count++;
  }
  console.log(count);
}

countBITS(14);
