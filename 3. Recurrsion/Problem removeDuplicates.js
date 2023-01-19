function removeDuplicates(string, index = 0, map = {}, newStr = "") {
  let char = string[index];
  if (index == string.length - 1) {
    console.log(newStr);
    return;
  }
  if (!map[char]) {
    newStr += char;
    map[char] = true;
    return removeDuplicates(string, index + 1, map, newStr);
  }
  return removeDuplicates(string, index + 1, map, newStr);
}

removeDuplicates("moizzoima");
