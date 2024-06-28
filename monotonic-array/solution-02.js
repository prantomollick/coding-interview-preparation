function isMonotonic(array) {
  // Write your code here.
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let idx = 1; idx < array.length; idx++) {
    if (array[idx] < array[idx - 1]) {
      isNonDecreasing = false;
    }

    if (array[idx] > array[idx - 1]) {
      isNonIncreasing = false;
    }
  }

  return isNonDecreasing || isNonIncreasing;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
