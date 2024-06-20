function transposeMatrix(matrix) {
  // Write your code here.
  const transposeMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposeMatrix.push(newRow);
  }
  return transposeMatrix;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
