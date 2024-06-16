function sortedSquaredArray(array) {
  const start = array.length;

  let startPointer = 0;
  let endPointer = start - 1;

  const newArray = new Array(start);

  for (let i = start - 1; i > -1; i--) {
    const startValue = Math.abs(array[startPointer]) ** 2;
    const lastValue = Math.abs(array[endPointer]) ** 2;

    if (startValue > lastValue) {
      newArray[i] = startValue;
      startPointer++;
    } else {
      newArray[i] = lastValue;
      endPointer--;
    }
  }

  return newArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
