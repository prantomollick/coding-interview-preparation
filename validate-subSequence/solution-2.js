function isValidSubsequence(array, sequence) {
  if (sequence.length === 0) {
    return false;
  }
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  let leftS = 0;
  let rightS = sequence.length - 1;
  let idx = 0;

  while (left < right && idx < sequence.length) {
    if (idx === sequence.length) break;

    if (array[left] === sequence[leftS] && idx < sequence.length) {
      idx++;
      leftS++;
    }

    if (array[right] === sequence[rightS] && idx < sequence.length) {
      idx++;
      rightS--;
    }

    left++;
    right--;
  }

  return idx === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
