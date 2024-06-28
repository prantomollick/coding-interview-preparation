function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2) {
    return true;
  }

  let direction = array[1] - array[0];
  for (let idx = 2; idx < array.length; idx++) {
    if (direction === 0) {
      direction = array[idx] - array[idx - 1];
      continue;
    }

    if (breaksDirection(direction, array[idx - 1], array[idx])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction, previousInt, currentInt) {
  let difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
