export function multiplyMatrices(m1: number[][], m2: number[][]) {
  if (m1[0].length !== m2.length) {
    throw new Error("Matrices can't be multiplied");
  }

  const resultingMatrix: number[][] = [];

  // rows
  for (let i = 0; i < m1.length; i += 1) {
    // columns
    resultingMatrix[i] = resultingMatrix[i] || [];
    for (let j = 0; j < m2[0].length; j += 1) {
      for (let k = 0; k < m1[0].length; k += 1) {
        resultingMatrix[i][j] = resultingMatrix[i][j] || 0;
        resultingMatrix[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return resultingMatrix;
}
