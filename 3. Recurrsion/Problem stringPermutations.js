function stringPermutation(string, permutation = "") {
  if (string.length == 0) {
    console.log(permutation);
    return;
  }
  for (let i = 0; i < string.length; i++) {
    let curChar = string[i];
    let newString = string.slice(0, i) + string.slice(i + 1);
    stringPermutation(newString, permutation + curChar);
  }
}

stringPermutation("abc");
