function transposeMatrix(matrix) {
  // Write your code here.
  const rows = matrix.length;
  const cols = matrix[0].length;
  const t_martix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      t_martix[col][row] = matrix[row][col];
    }
  }
  return t_martix;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
