function twoNumberSum(array, targetSum) {
  // Write your code here.
  if (array.length < 2) return [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) return [array[i], array[j]];
    }
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

// [3, 5, -4, 8, 11, 1, -1, 6]
// 10
