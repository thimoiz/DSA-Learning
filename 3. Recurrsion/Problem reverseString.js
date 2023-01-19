function revString(string, index = string.length - 1) {
  if (index == 0) {
    console.log(string[index]);
    return;
  }
  console.log(string[index]);
  revString(string, index - 1);
}

revString("Moiz");
