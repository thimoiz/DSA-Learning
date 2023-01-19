function moveElementAtEnd(string, element, newStr = "", index = 0, count = 0) {
  if (index == string.length - 1) {
    for (let i = 0; i < count; i++) {
      newStr += element;
    }
    return newStr;
  }
  if (string[index] != element) {
    newStr += string[index];
    return moveElementAtEnd(string, element, newStr, index + 1, count);
  }
  if (string[index] == element) {
    count++;
    return moveElementAtEnd(string, element, newStr, index + 1, count);
  }
}

console.log(moveElementAtEnd("abcxyabxxz", "x"));
