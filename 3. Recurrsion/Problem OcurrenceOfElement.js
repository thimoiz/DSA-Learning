function ocurrence(string, element, index = 0) {
  if (index == string.length) {
    return;
  }
  if (string[index] == element) {
    console.log(index + 1);
  }
  ocurrence(string, element, index + 1);
}

ocurrence("abcaabega", "a");
