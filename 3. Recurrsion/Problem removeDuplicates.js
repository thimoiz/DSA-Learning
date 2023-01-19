function removeDuplicates(string, index = 0, newStr = "") {
  let char = string[index];
  if (index == string.length - 1) {
    return newStr;
  }
  if (!newStr.includes(char)) {
    newStr += char;
    return removeDuplicates(string, index + 1, newStr);
  }
  return removeDuplicates(string, index + 1, newStr);
}

console.log(removeDuplicates("moizzoima"));
