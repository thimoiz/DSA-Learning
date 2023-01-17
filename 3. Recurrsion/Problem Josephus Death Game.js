// Josephus Problem Gun death game

function deathGame(n, k) {
  if (n == 1) return 0;
  return (deathGame(n - 1, k) + k) % n;
}

console.log(deathGame(5, 3));
