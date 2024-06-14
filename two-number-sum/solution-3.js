function twoNumberSum(array, targetSum) {
  // Write your code here.
  if (array.length < 2) return [];

  const sortedArray = array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sumOfPair = sortedArray[left] + sortedArray[right];
    if (sumOfPair === targetSum) {
      return [sortedArray[left], sortedArray[right]];
    } else if (sumOfPair < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
