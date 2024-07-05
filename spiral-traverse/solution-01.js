function spiralTraverse(array) {
  // Write your code here.
  let row = array.length - 1;
  let col = array[0].length - 1;

  const visited = [];

  let rowStart = 0,
    rowEnd = row,
    colStart = 0,
    colEnd = col;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    //Traverse Right
    for (let i = colStart; i <= colEnd; i++) {
      visited.push(array[rowStart][i]);
    }
    rowStart++;

    //traverse down
    for (let i = rowStart; i <= rowEnd; i++) {
      visited.push(array[i][colEnd]);
    }
    colEnd--;

    //traverse right
    if (rowStart <= rowEnd) {
      for (let j = colEnd; j >= colStart; j--) {
        visited.push(array[rowEnd][j]);
      }
    }
    rowEnd--;

    //traverse up
    if (colStart <= colEnd) {
      for (let j = rowEnd; j >= rowStart; j--) {
        visited.push(array[j][colStart]);
      }
    }
    colStart++;
  }

  return visited;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
