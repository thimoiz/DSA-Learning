// Using Dynamic Programming O(N)

function fibonacci(n) {
  let array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}

console.log(fibonacci(10));

// Using Matric Exponentiation O(Log N)

function fibonacciMatrixExp(n) {
  let baseMatrix = [
    [1, 1],
    [1, 0],
  ];
  let resultMatrix = [
    [1, 0],
    [0, 1],
  ];
  while (n > 0) {
    if ((n & 1) === 1) {
      resultMatrix = matrixMultiply(resultMatrix, baseMatrix);
    }
    baseMatrix = matrixMultiply(baseMatrix, baseMatrix);
    n = n >> 1;
  }
  return resultMatrix[0][1];
}

function matrixMultiply(a, b) {
  let c = [
    [0, 0],
    [0, 0],
  ];
  c[0][0] = a[0][0] * b[0][0] + a[0][1] * b[1][0];
  c[0][1] = a[0][0] * b[0][1] + a[0][1] * b[1][1];
  c[1][0] = a[1][0] * b[0][0] + a[1][1] * b[1][0];
  c[1][1] = a[1][0] * b[0][1] + a[1][1] * b[1][1];
  return c;
}

console.log(fibonacciMatrixExp(10));
