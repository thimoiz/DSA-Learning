// ==========================================================
// =================== Palindrome String ====================
// ==========================================================

function palString(string, left, right) {
  if (left == right) return true;
  if (string[left] != string[right]) return false;
  return palString(string, left + 1, right - 1);
}

console.log(palString("racecar", 0, 6));
