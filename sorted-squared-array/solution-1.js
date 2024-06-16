function sortedSquaredArray(array) {
  const newArray = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] ** 2;
  }
  return newArray.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
