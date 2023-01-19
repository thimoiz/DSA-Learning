function printSubsequences(string, subsequence = "", index = 0) {
  if (index == string.length) {
    console.log(subsequence);
    return;
  }
  let char = string[index];
  printSubsequences(string, subsequence + char, index + 1);
  printSubsequences(string, subsequence, index + 1);
}

printSubsequences("abc");
